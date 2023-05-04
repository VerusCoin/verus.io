import { useEffect, useState } from 'react'
// import { GetServerSideProps } from 'next'
import { isMobile } from 'react-device-detect'
// import io from 'socket.io-client'
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
import useSWR from 'swr'

// let socket
const StyledQRCode = styled.div`
  margin: auto;
  padding: 20px;
  border: solid 1px;
  border-radius: 5px;
`
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

// const StyledQRLink = styled.a<any>`
//   margin: auto;
//   padding: 20px;
//   border: solid 1px black;
//   border-radius: 5px;
//   text-decoration: none;
// `

const StyledNote = styled.div`
  grid-column: span 2;
  margin: auto;
  max-width: 600px;
`
const StyledButton = styled.a<any>`
  display: inline-flex;
  align-items: center;
  border: 0;
  padding: ${(props) => (props.small ? '12px 20px' : '16px 30px')};
  background: ${(props) => props.theme.buttons.primary.bg};
  border-radius: ${(props) => props.theme.buttons.primary.radius};
  color: ${(props) => props.theme.buttons.primary.text};
  cursor: pointer;
  transition: background-color ${(props) => props.theme.transitions.regular};
  text-decoration: none;
  font-family: ${(props) =>
    props.fontRegular
      ? props.theme.typo.primary.family
      : props.theme.typo.header.family};

  ${(props) => props.wide && `padding: 20px 30px;`}

  ${media.desktop`
    ${(props: any) => props.wide && `padding: 20px 60px;`}
  `}
`

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const VerusIdLoginExample = () => {
  const [qrHookURL, setQrHookURL] = useState()
  const [qrRedirURL, setQrRedirURL] = useState()
  const [user, setUser] = useState<string>()
  const [success, setSuccess] = useState(false)
  // const [session_key, setSession_key] = useState<string>()
  const title = 'VerusID Login Example'
  const description = 'Test using the VerusID as Login Credentials.'
  let session_key = ''

  useEffect(() => {
    // socketInitializer()
    getLoginConsentRequest()
  }, [])

  // const socketInitializer = async () => {
  //   await fetch('/api/socket')
  //   socket = io()

  //   socket.on('update-input', (msg) => {
  //     awaitSocketResponse(msg)
  //   })
  // }
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
    // .then((data) => {
    //   setSession_key(data.hook.session_key)
    //   setQrHookURL(data.hook.uri)
    //   setQrRedirURL(data.redir.uri)
    // })
    // console.log('request', data.hook.session_key)

    session_key = data.hook.session_key
    setQrHookURL(data.hook.uri)
    setQrRedirURL(data.redir.uri)
    // setSession(data.session)
    // setQrURL(data.data.uri)
  }

  // const awaitSocketResponse = (msg: any) => {
  //   // console.warn('socket', msg)
  //   // console.warn('current session', session_key)
  //   if (msg.session === session_key && msg.valid) {
  //     setSuccess(true)
  //     setUser(msg.id)
  //   }
  // }

  const { data } = useSWR(
    `/api/auth/verusIdLoginStatus?session=${session_key}`,
    fetcher,
    {
      refreshInterval: 6000,
    }
  )

  useEffect(() => {
    if (data) {
      if (data.session === session_key && data.valid) {
        setSuccess(true)
        setUser(data.id)
      }
    }
  }, [data])

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
              {isMobile ? (
                <>
                  <DefaultText align="center">
                    {qrRedirURL ? (
                      <StyledButton href={qrRedirURL}>
                        Login with VerusID
                      </StyledButton>
                    ) : (
                      <DefaultText align="center" fontSz="md">
                        ...Getting Login Request
                      </DefaultText>
                    )}
                  </DefaultText>
                  <DefaultText align="center" fontSz="md">
                    VerusID Login Example
                  </DefaultText>
                  <DefaultText align="center" fontSz="sm">
                    Click to login in using your VerusID on your Mobile App.
                  </DefaultText>
                </>
              ) : (
                <>
                  <StyledQRCode>
                    {qrHookURL ? (
                      <QRCode value={qrHookURL} level="Q" size={300} />
                    ) : (
                      <DefaultText align="center" fontSz="md">
                        ...Getting Login Request
                      </DefaultText>
                    )}
                  </StyledQRCode>
                  <DefaultText align="center" fontSz="md">
                    VerusID Login Example
                  </DefaultText>
                  <DefaultText align="center" fontSz="sm">
                    Scan the QR Code to login in using your VerusID on your
                    Mobile App.
                  </DefaultText>
                </>
              )}

              <StyledNote>
                <DefaultText align="center" fontSz="xs">
                  NOTE: This is a demo and not a full authentication process.
                </DefaultText>
              </StyledNote>
            </StyledDiv>
          </StyledContainer>
        )}
      </MainLayout>
    </>
  )
}

// export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
//   const loginResponse = ctx.query as {
//     session: string
//     i5fvfsaTFKtrHCPYQHTXRaXcyxHmJMxTMe: string
//   }
//   const params = new URLSearchParams(loginResponse)
//   if (params) {
//     // console.log(loginResponse.i5fvfsaTFKtrHCPYQHTXRaXcyxHmJMxTMe)
//     console.log(params)
//     // console.log(loginResponse.i5fvfsaTFKtrHCPYQHTXRaXcyxHmJMxTMe)
//   }

//   // const result = await fetch(
//   //   `http://localhost:3000/api/auth/verifyLogin?${params}`
//   // ).then((res) => res.json())
//   return {
//     props: {},
//   }
// }

export default VerusIdLoginExample

{
  /* <StyledQRLink href={qrRedirURL}>
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
                    /> */
}
//       <QRCode value={qrHookURL} level="Q" size={300} />
//       <DefaultText
//         align="center"
//         fontSz="xs"
//         customColor="black"
//       >
//         Click or scan QR-Code
//       </DefaultText>
//     </>
//   ) : (
//     <DefaultText align="center" fontSz="md">
//       ...Getting Login Request
//     </DefaultText>
//   )}
// </StyledQRLink> */}
