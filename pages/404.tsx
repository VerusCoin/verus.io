import styles from 'styled-components'
import { DefaultText, Img } from '@/components/elements'
import { MainLayout } from '@/components/layouts'

const StyledContainer = styles.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 350px);
  margin: auto;
  
  max-width: 400px;
  
`

const Custom404 = () => {
  return (
    <MainLayout>
      <StyledContainer>
        <Img height={294} name="page-not-found" />
        <DefaultText align="center">404 - Page Not Found</DefaultText>
      </StyledContainer>
    </MainLayout>
  )
}

export default Custom404
