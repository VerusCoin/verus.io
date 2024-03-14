import styled from 'styled-components'

import { DefaultHeader } from '@/components/elements'

const StyledHeader = styled.div<any>`
  width: 100%;
  min-height: 175px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-image: url(${(props) => props.header});
  background-position: center bottom;
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: ${(props) => (props.avatar && '80px') || '32px'};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`

const StyledAvatar = styled.div<any>`
  margin: 32px;
  height: 160px;
  width: 160px;
  border-radius: 50%;
  background-image: url(${(props) => props.avatar});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  ${(props) =>
    props.header &&
    `
  position: relative;
  bottom: -90px;
  right: -32px;
  margin:0;
  `}
`
const StyledContent = styled.div<any>`
  width: 100%;
  padding: 0 32px;
  margin: 0;
`
//${(props) => (props.heading && '0 32px') || '32px'};
const ProfileHeader = ({
  profileHeader,
  verusId,
}: {
  profileHeader: Record<string, any>
  verusId: string
}) => {
  const avatar = profileHeader?.avatar
  const header = profileHeader?.header
  const about = profileHeader?.about

  return (
    <>
      {header ? (
        <StyledHeader header={header.image} avatar={avatar}>
          {' '}
          {avatar && (
            <StyledAvatar avatar={avatar.image} header={header} />
          )}{' '}
        </StyledHeader>
      ) : avatar ? (
        <StyledAvatar avatar={avatar.image} header={header} />
      ) : null}

      <StyledContent heading={avatar || header}>
        <DefaultHeader as="h3" align="left">
          {verusId}
        </DefaultHeader>
      </StyledContent>
      {about ? (
        <StyledContent heading={true}>
          <DefaultHeader as="h5" align="left">
            {about.text}
          </DefaultHeader>
        </StyledContent>
      ) : null}
    </>
  )
}

export default ProfileHeader
