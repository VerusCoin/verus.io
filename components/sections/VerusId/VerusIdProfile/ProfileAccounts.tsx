import { useContext } from 'react'
import { DefaultHeader } from '@/components/elements'
import { VerusIDContext } from '@/lib/Contexts'
import { StyledContainer, StyledLabel } from './ProfileStyles'
import AccountCard from './AccountCard'
//TODO: need to clean up code

const Recursive = ({ list, type }: { list: any; type: string }) => {
  return (
    <>
      {Object.keys(list).map((item: string, index: number) => {
        if (item !== 'address') {
          type = item
        }

        if (list[item]?.qualifiedname) {
          return (
            <AccountCard
              key={`${item}_${index}`}
              type={type}
              account={list[item]}
            />
          )
        } else {
          return (
            <Recursive list={list[item]} type={type} key={`${type}_${index}`} />
          )
        }
      })}
    </>
  )
}

const ProfileAccounts = () => {
  const context = useContext(VerusIDContext)
  const accounts = context.profileJSON.keys

  //We know vrsc has address and identity while all other should only have address

  return (
    <StyledContainer>
      <StyledLabel>
        <DefaultHeader as="h5" align="left">
          Blockchain Accounts
        </DefaultHeader>
      </StyledLabel>
      <Recursive list={accounts} type="" />
      {/* {Object.keys(accounts).map((account, index) => (
          <AccountCard
            key={index}
            verusUser={user}
            type={account}
            account={accounts[account]}
          />
        ))} */}
    </StyledContainer>
  )
}

export default ProfileAccounts
