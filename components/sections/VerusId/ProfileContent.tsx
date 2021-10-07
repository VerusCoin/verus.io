// import styled from 'styled-components'
// import { Button, Img } from '@/components/elements'
// import { media } from 'styled-bootstrap-grid'
// import { fontFam, fontSize } from '@/styles/helpers'

const ProfileContent = ({
  profileContent,
  vdxfidList,
}: {
  profileContent: any
  vdxfidList: any
}) => {
  const contentList = profileContent[vdxfidList.profilesFrom.content.vdxfid]
  if (contentList.content) {
    //either a arweave content or web content
    // let result = GetArweavePosts(contentList.content)
    // console.log(contentList)
  }
  return <div>Profile Content Here....Still building</div>
}

export default ProfileContent
