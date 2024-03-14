import { useContext } from 'react'
import { VerusIDContext } from '@/lib/Contexts'
import ServiceCard from './ServiceCard'
import { StyledContainer } from './ProfileStyles'

// We know there are accounts and website.
// Need to create a loop service just in case.

// const Recursive = ({ list }: { list: any }) => {
//   return (
//     <>
//       {Object.keys(list).map((item: string, index: number) => {
//         if (list[item]?.qualifiedname) {
//           return (
//             <ServiceCard
//               key={`${item}_${index}`}
//               type={item}
//               serviceAccount={list[item]}
//             />
//           )
//         } else return <Recursive list={list[item]} key={`${item}_${index}`} />
//       })}
//     </>
//   )
// }

const ProfileServices = () => {
  const context = useContext(VerusIDContext)
  const services = context.profileJSON.services
  // const webServices = context.profileJSON?.services.website
  // const accountServices = context.profileJSON?.services.accounts
  // const verusId = context.id
  //FIXME: REDIT
  return (
    <StyledContainer>
      {Object.keys(services).map((item, index) => (
        <ServiceCard
          type={item}
          key={`${item}_${index}`}
          serviceAccount={services[item]}
        />
      ))}
    </StyledContainer>
  )
}

export default ProfileServices
