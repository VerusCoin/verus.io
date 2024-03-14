import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { MainLayout, Grid } from '@/components/layouts'
import {
  ProfileHeader,
  Profile,
  VerusIdResults,
} from '@/components/sections/VerusId'
import { VerusIDContext } from '@/lib/Contexts'
import { StyledProfileContainer } from '@/components/sections/VerusId/Styles'
import { VerusResult } from '@/lib/VerusIdProfile/ProfileTypes'
import { FetchVerusId, FetchVerusProfile } from '@/lib/VerusIdProfile'

const VerusIDResult = ({ data }: { data: Record<string, any> }) => {
  const { id, profileJSON } = data
  const Router = useRouter()

  return (
    <MainLayout>
      <Grid>
        <StyledProfileContainer>
          <ProfileHeader profileHeader={profileJSON?.public} verusId={id} />
          <VerusIDContext.Provider value={data}>
            <Profile />
            <VerusIdResults onClick={() => Router.push('/verusid-lookup')} />
          </VerusIDContext.Provider>
        </StyledProfileContainer>
      </Grid>
    </MainLayout>
  )
}

export default VerusIDResult

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  let verusId = ctx.query.verusID //{ verusID: 'xx@' }

  if (verusId) {
    if (verusId.slice(-1) !== '@') {
      verusId = verusId + '@'

      return {
        redirect: {
          destination: `/verusid-lookup/${verusId}`,
          permanent: true,
        },
      }
    }

    const profileData = await FetchVerusId({ id: verusId })
    if (profileData.result) {
      let data: VerusResult = {
        ...profileData,
        id: `${profileData.result.identity.name}@`,
      }

      const contentMap = profileData.result.identity.contentmap

      const profileJSON = await FetchVerusProfile(contentMap)
      if (profileJSON) {
        data = { ...data, profileJSON: profileJSON }
      }

      return {
        props: {
          data,
        },
      }
    } else {
      return {
        redirect: {
          destination: `/verusid-lookup`,
          permanent: true,
        },
      }
    }
  } else {
    return {
      redirect: {
        destination: `/verusid-lookup`,
        permanent: true,
      },
    }
  }
}
