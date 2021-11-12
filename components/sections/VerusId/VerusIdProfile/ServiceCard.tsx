import { useContext } from 'react'
import * as FontAwesome from 'react-icons/fa'
import useSWR from 'swr'
import { AccountObjects } from '@/lib/VerusIdProfile/ProfileTypes'
import {
  StyledServiceCard,
  // TooltipBox,
  // TooltipBoxContainer,
} from './ProfileStyles'
import { ObjectFinder, capitalizeFirstLetter } from './Helper'
import { VerusIDContext } from '@/lib/Contexts'

const fetcher = async (url: string) =>
  await fetch(url).then((res) => res.json())
// TODO: work on nesting for servicecard

const ServiceCard = ({
  type,
  serviceAccount,
}: {
  type: string
  serviceAccount: AccountObjects
}) => {
  //TODO: bring in user using useContext
  let Icon: any
  let StatusIcon = FontAwesome['FaCog']
  if (type === 'website') {
    Icon = FontAwesome['FaGlobeAmericas']
  } else {
    Icon = ObjectFinder(`Fa${capitalizeFirstLetter(type)}`)(FontAwesome)
  }

  const context = useContext(VerusIDContext)
  const verusUser = context.id

  const { data } = useSWR(
    `/api/verificationCheck?query=${JSON.stringify({
      user: verusUser,
      ...serviceAccount,
    })}`,
    fetcher
  )
  if (data) {
    // console.log('data', data)
    switch (data?.valid) {
      case 'true':
        StatusIcon = FontAwesome['FaUserCheck']
        break
      case 'false':
        StatusIcon = FontAwesome['FaExclamationTriangle']
        break
      default:
        StatusIcon = FontAwesome['FaCog']
    }
    // console.log(StatusIcon)
  }

  return (
    <StyledServiceCard status={data?.valid}>
      <Icon size="1.5em" className="logo" />
      {serviceAccount.accountname ||
        serviceAccount.accountid ||
        serviceAccount.name}
      <StatusIcon className="status" />
      {/* <TooltipBoxContainer>
        <TooltipBox classname="tooltip">test</TooltipBox>
      </TooltipBoxContainer> */}
    </StyledServiceCard>
  )
}

export default ServiceCard

//conduct a nested service check
// if (serviceAccount?.qualifiedname) {
//   // some pre-declared fontAwesome
//   if (type === 'website') {
//     Icon = FontAwesome['FaGlobeAmericas']
//   }
//   return (
//     <StyledServiceCard>
//       <Icon size="1.5em" className="logo" />
//       {serviceAccount.accountname ||
//         serviceAccount.accountid ||
//         serviceAccount.name}
//     </StyledServiceCard>
//   )
// } else {
//   return (
//     <>
//       {Object.keys(serviceAccount).map((element, index) => {
//         const newObject:AccountObjects = serviceAccount[element]
//         return (
//           <ServiceCard
//             verusUser={verusUser}
//             type={element}
//             serviceAccount={newObject}
//             key={element + index}
//           />
//         )
//       })}
//     </>
//   )
// return (
//   <>
//     {Object.keys(serviceAccount).map((element, index) => {
//       return (
//         <>
//           {element}
//           {/* <ServiceCard
//             verusUser={verusUser}
//             type={element}
//             serviceAccount={serviceAccount[element]}
//             key={element + index}
//           /> */}
//           <pre key={index}>
//             {JSON.stringify(serviceAccount[element], null, 2)}
//           </pre>
//         </>
//       )
//     })}

//     {/* <pre>{JSON.stringify(serviceAccount, null, 2)}</pre> */}
//   </>
// )

// console.log('type', capitalizeFirstLetter(type))

// const Icon = ObjectFinder(`Fa${capitalizeFirstLetter(type)}`)(FontAwesome)
// let StatusIcon = ObjectFinder('FaCog')(FontAwesome)
// const { data } = useSWR(
//   `/api/verificationCheck?query=${JSON.stringify({
//     user: verusUser,
//     ...account,
//   })}`,
//   fetcher
// )
// if (data) {
//   if (data?.valid === 'valid') {
//     StatusIcon = ObjectFinder('FaUserCheck')(FontAwesome)
//   } else if (data?.valid === 'invalid') {
//     StatusIcon = ObjectFinder('FaExclamationTriangle')(FontAwesome)
//   }
// }

// const handleAccount = () => {
//   alert('test')
// }

// return (
// <StyledServiceCard status={data?.valid} onClick={() => handleAccount()}>
//   <Icon size="1.5em" className="logo" />
//   <p>{account.accountname || account.accountid}</p>
//   <StatusIcon className="status" />
// </StyledServiceCard>
// )
// return <StyledServiceCard>Test</StyledServiceCard>
