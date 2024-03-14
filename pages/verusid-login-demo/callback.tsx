import { MainLayout } from '@/components/layouts'
import { GetServerSideProps } from 'next'
import { NextSeo } from 'next-seo'
import { useEffect } from 'react'
import io from 'socket.io-client'
import { StyledContainer } from '@/components/sections/VerusId/Styles'
import { DefaultText, Img } from '@/components/elements'
import { spacer } from '@/styles/helpers'
import { FcApproval } from 'react-icons/fc'
import { media } from 'styled-bootstrap-grid'
import styled from 'styled-components'
import Link from 'next/link'

let socket

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
const StyledNote = styled.div`
  grid-column: span 2;
  margin: auto;
  max-width: 600px;
`
const LoginResponse = ({ loginResponse, result }: Record<string, any>) => {
  useEffect(() => {
    socketInitializer()
  }, [])
  const socketInitializer = async () => {
    await fetch('/api/socket')
    socket = io()
    socket.emit('input-change', { ...loginResponse, ...result })
  }
  const title = 'VerusId Login Example'
  const description = 'Test using the VerusID as Login Credentials.'

  return (
    <>
      <NextSeo title={title} description={description} />
      <MainLayout>
        {result && result.valid ? (
          <StyledContainer>
            <StyledDiv>
              <DefaultText align="center">
                <FcApproval size="64px" />
              </DefaultText>
              <DefaultText align="center" fontSz="mdlg">
                {result.id}
              </DefaultText>
              <DefaultText align="center" fontSz="md">
                you have successfully logged in using a VerusID you have full
                control over!
              </DefaultText>
              <StyledNote>
                <DefaultText align="center" fontSz="xs">
                  NOTE: This is a demo and not a full authentication.
                </DefaultText>
              </StyledNote>
              <Link href="/verusid-login-demo">
                Click here to try login again.
              </Link>
            </StyledDiv>
          </StyledContainer>
        ) : (
          <StyledContainer>
            <StyledDiv>
              <Img height={294} name="page-not-found" />
              <DefaultText align="center" fontSz="md">
                OOPS! Something went wrong on the login Attempt!
              </DefaultText>
              <Link href="/verusid-login-demo">
                Click here to try login again.
              </Link>
              <StyledNote>
                <DefaultText align="center" fontSz="xs">
                  NOTE: This is a demo and not a full authentication.
                </DefaultText>
              </StyledNote>
            </StyledDiv>
          </StyledContainer>
        )}
      </MainLayout>
    </>
  )
}
export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  const loginResponse = ctx.query as {
    session: string
    i5fvfsaTFKtrHCPYQHTXRaXcyxHmJMxTMe: string
  }

  const params = new URLSearchParams(loginResponse)
  // console.log(params)
  const result = await fetch(
    `http://localhost:3000/api/auth/verifyLogin?${params}`
  ).then((res) => res.json())
  return {
    props: { loginResponse, result },
  }
}
export default LoginResponse

