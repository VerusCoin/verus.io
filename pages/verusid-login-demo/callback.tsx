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
    await fetch('/api/auth/socket')
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
              <DefaultText align="center" fontSz="md">
                {result.id}! Congrats you logged in!
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
  const result = await fetch(
    `http://localhost:3000/api/auth/verifyLogin?${params}`
  ).then((res) => res.json())
  return {
    props: { loginResponse, result },
  }
}
export default LoginResponse
// {
//   session: '94a850aa-55b2-4eea-9ad5-2b3fbc0cffb3',
//   i5fvfsaTFKtrHCPYQHTXRaXcyxHmJMxTMe: 'GBg5orWH_4xx-3PflHNBqOX62hcB_VgCGvW4AVxk05q0TGDq2DF_n1qbbEw1J5lc0uKNozlFQWOU1oJWZdraSt3vHSRMeg9ysAUJ8BfPPdpjudQGAUkCBQNaJgABQR8ZXbvD1L2sm7zl1I9OT4G9wH8ovONqsN7OjB6vma1cMhiCe2Z-eVVgMB716O9N3z0HuJrJSfPwMxgm74qt1CVb5VMIvIgKfZzAHIT5TirM7RCjuokB_bkBFJxp3NyyM-0AIpq74vdqKpCBlIhIuehKZAAAAAAAAABWe5qHsXEx9u6y3QvdGR7OSl1gOwEBAAGuLr0oLCwFoopyexqNdvxusznFAf1qARr1uAFcZNOatExg6tgxf59am2xMsJWbQE1PbYD1JtpdGu0sm5uVuCzd7x0kTHoPcrAFCfAXzz3aY7nUBgFJAgUDWiYAAUEgAf-GxT9zAgE-MOe2YErJeNjbzXGYVShqMh2_jnhurbl_zacdF-scHTA-81LCskGvy4CZTyQMPjhsv8PC65T5EhkpwD6PqNScH421diaTivtXxDWcAc0UnGnc3LIz7QAimrvi92oqkIGUiEiV6EpkAAAAAAAAAAG6icTlqHBHKLhjOmPivbKh-kerrgEAAAAAAAABblWVGAN8pslHevIezJa93GHC0qYBY2h0dHA6Ly8xOTIuMTY4Ljg2LjY5OjMwMDAvdmVydXNpZC1sb2dpbi1kZW1vL2NhbGxiYWNrP3Nlc3Npb249OTRhODUwYWEtNTViMi00ZWVhLTlhZDUtMmIzZmJjMGNmZmIzJlZ7moexcTH27rLdC90ZHs5KXWA7AQEA'
// }
