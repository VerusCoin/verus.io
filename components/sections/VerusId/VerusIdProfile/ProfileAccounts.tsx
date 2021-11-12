import { useContext } from 'react'
import { VerusIDContext } from '@/lib/Contexts'
import { StyledContainer } from './ProfileStyles'
import AccountCard from './AccountCard'
//TODO: need to clean up code

// const Recursive = ({ list, type }: { list: any; type: string }) => {
//   return (
//     <>
//       {Object.keys(list).map((item: string, index: number) => {
//         if (item !== 'address') {
//           type = item
//         }

//         if (list[item]?.qualifiedname) {
//           return (
//             <AccountCard
//               key={`${item}_${index}`}
//               type={type}
//               account={list[item]}
//             />
//           )
//         } else {
//           return (
//             <Recursive list={list[item]} type={type} key={`${type}_${index}`} />
//           )
//         }
//       })}
//     </>
//   )
// }

const ProfileAccounts = () => {
  const context = useContext(VerusIDContext)
  const accounts = context.profileJSON.keys

  // console.log(accounts)
  //We know vrsc has address and identity while all other should only have address

  return (
    <StyledContainer>
      {Object.keys(accounts).map((account, index) => {
        const type = account.toString().split('.')[0]
        return (
          <AccountCard
            key={`${account}_${index}`}
            type={type}
            account={accounts[account]}
          />
        )
      })}
      {/* <Recursive list={accounts} type="" /> */}
    </StyledContainer>
  )
}

export default ProfileAccounts
