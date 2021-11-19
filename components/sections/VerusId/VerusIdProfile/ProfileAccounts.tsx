import { useContext } from 'react'
import { VerusIDContext } from '@/lib/Contexts'
import { StyledContainer } from './ProfileStyles'
import AccountCard from './AccountCard'
//TODO: need to clean up code

const ProfileAccounts = () => {
  const context = useContext(VerusIDContext)
  const accounts = context.profileJSON.keys

  //We know vrsc has address and identity while all other should only have address

  return (
    <StyledContainer>
      {Object.keys(accounts).map((account, index) => (
        <AccountCard
          key={`${account}_${index}`}
          type={account.toString().split('.')[0]}
          account={accounts[account]}
        />
      ))}
    </StyledContainer>
  )
}

export default ProfileAccounts
