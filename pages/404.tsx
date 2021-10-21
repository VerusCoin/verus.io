import styles from 'styled-components'

const StyledContainer = styles.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 350px);
`

const Custom404 = () => {
  return <StyledContainer>Enter</StyledContainer>
}

export default Custom404
