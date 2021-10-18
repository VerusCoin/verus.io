import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  position: relative;
  min-height: 34px;
`

const BaseBox = styled.div`
  height: 100%;
  position: absolute;
  border-radius: 8px;
`
const Background = styled(BaseBox)`
  background: #e3e3e3;
  width: 100%;
  height: 34px;
`
const Progress = styled(BaseBox)<{ value: number }>`
  height: 24px;
  margin: 5px;
  transition: width 10s ease-in-out;
  background: #4aa658;
  width: ${(props) => `${props.value}%`};
`

const Progressbar: React.FC<{ value: number }> = ({ value }) => {
  return (
    <Container>
      <Background />
      <Progress value={value} />
    </Container>
  )
}

export default Progressbar
