import { useEffect, useState } from 'react'

import io from 'socket.io-client'
import styled from 'styled-components'
// import { QRCode as QrCode } from 'react-qrcode-logo'
import { MainLayout } from '@/components/layouts'
import { NextSeo } from 'next-seo'
import QRCode from 'react-qr-code'
import { StyledContainer } from '@/components/sections/VerusId/Styles'
import { spacer } from '@/styles/helpers'
import { media } from 'styled-bootstrap-grid'
import { DefaultText } from '@/components/elements'
import { FcApproval } from 'react-icons/fc'
let socket
// const StyledQRCode = styled.div`
//   margin: auto;
//   padding: 20px;
//   border: solid 1px;
//   border-radius: 5px;
// `
const StyledDiv = styled.div<any>`
  ${(props) => (props.bottom ? spacer('xl') : spacer('xxl'))}
  justify-content: center;
  grid-auto-rows: auto;
  padding: 0 20px;
  margin-left: auto;
  margin-right: auto;
  max-width: 430px;

  display: flex;
  flex-direction: column;
  grid-gap: 20px;
  grid-template-rows: auto;

  ${media.tablet`
    
    max-width: 812px;
    min-width: 696px;
  `}
`

const StyledQRLink = styled.a<any>`
  margin: auto;
  padding: 20px;
  border: solid 1px black;
  border-radius: 5px;
  text-decoration: none;
`

const StyledNote = styled.div`
  grid-column: span 2;
  margin: auto;
  max-width: 600px;
`

const VerusIdLoginExample = () => {
  const [qrHookURL, setQrHookURL] = useState()
  const [qrRedirURL, setQrRedirURL] = useState()
  const [user, setUser] = useState<string>()
  const [success, setSuccess] = useState(false)
  const [session_key, setSession_key] = useState<string>()
  const title = 'VerusId Login Example'
  const description = 'Test using the VerusID as Login Credentials.'

  useEffect(() => {
    socketInitializer()
    getLoginConsentRequest()
  }, [])

  const socketInitializer = async () => {
    // await fetch('/api/auth/socket')
    socket = io()

    socket.on('update-input', (msg) => {
      awaitSocketResponse(msg)
    })
  }
  const getLoginConsentRequest = async () => {
    // let key = window.sessionStorage.getItem('verusIdLogin')
    // if (!key) {
    //   key = uuidV4()
    //   //TODO: put key back where other value is
    //   window.sessionStorage.setItem(
    //     'verusIdLogin',
    //     '94a850aa-55b2-4eea-9ad5-2b3fbc0cffb3'
    //   )
    // }

    const data = await fetch(
      `/api/auth/verusIdLogin?redir=${window.location.href}&hook=${window.origin}`
    ).then((res) => res.json())
    // console.log('request', data.hook.session_key)

    setSession_key(data.hook.session_key)
    setQrHookURL(data.hook.uri)
    setQrRedirURL(data.redir.uri)
    // setSession(data.session)
    // setQrURL(data.data.uri)
  }

  const awaitSocketResponse = (msg: any) => {
    console.warn('socket', msg)
    console.warn('current session', session_key)
    if (msg.session === session_key && msg.valid) {
      setSuccess(true)
      setUser(msg.id)
    }
  }
  return (
    <>
      <NextSeo title={title} description={description} />
      <MainLayout>
        {success ? (
          <StyledContainer>
            <StyledDiv>
              <DefaultText align="center">
                <FcApproval size="64px" />
              </DefaultText>
              <DefaultText align="center" fontSz="mdlg">
                {user}
              </DefaultText>
              <DefaultText align="center" fontSz="md">
                you have succefully logged in using a VerusID you have full
                control over!
              </DefaultText>

              <StyledNote>
                <DefaultText align="center" fontSz="xs">
                  NOTE: This is an demo and not a full authentication. Refresh
                  page to signout
                </DefaultText>
              </StyledNote>
            </StyledDiv>
          </StyledContainer>
        ) : (
          <StyledContainer>
            <StyledDiv>
              <StyledQRLink href={qrRedirURL}>
                {qrHookURL ? (
                  <>
                    {/* <QrCode
                      value={qrURL}
                      size={300}
                      logoImage={`./svg/verus-logo.svg`}
                      logoOpacity={0.25}
                      logoWidth={150}
                      qrStyle="dots"
                      ecLevel="Q"
                    /> */}
                    <QRCode value={qrHookURL} level="Q" size={300} />
                    <DefaultText align="center" fontSz="xs" customColor="black">
                      Click or scan QR-Code
                    </DefaultText>
                  </>
                ) : (
                  <DefaultText align="center" fontSz="md">
                    ...Getting Login Request
                  </DefaultText>
                )}
              </StyledQRLink>
              {/* <StyledQRCode>
                {qrURL ? (
                  <QRCode value={qrURL} level="Q" size={300} />
                ) : (
                  <DefaultText align="center" fontSz="md">
                    ...Getting Login Request
                  </DefaultText>
                )}
              </StyledQRCode> */}

              <DefaultText align="center" fontSz="md">
                VerusId Login Example
              </DefaultText>
              <DefaultText align="center" fontSz="sm">
                Scan the QR Code to login in, or click on QR-Code if Verus App
                is installed with a VerusID
              </DefaultText>
              <StyledNote>
                <DefaultText align="center" fontSz="xs">
                  NOTE: This is an demo and not a full authentication. Is not
                  configured to work on Mobile Browswer at this time. Test
                  scanning from desktop browswer only.
                </DefaultText>
              </StyledNote>
            </StyledDiv>
          </StyledContainer>
        )}
      </MainLayout>
    </>
  )
}

export default VerusIdLoginExample
