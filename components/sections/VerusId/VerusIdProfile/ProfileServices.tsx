import { useContext } from 'react'
import { DefaultHeader } from '@/components/elements'
import { VerusIDContext } from '@/lib/Contexts'
import ServiceCard from './ServiceCard'
import { StyledContainer, StyledLabel } from './ProfileStyles'
import { FaCog, FaUserCheck, FaExclamationTriangle } from 'react-icons/fa'
// We know there are accounts and website.
// Need to create a loop service just in case.

const Recursive = ({ list }: { list: any }) => {
  return (
    <>
      {Object.keys(list).map((item: string, index: number) => {
        if (list[item]?.qualifiedname) {
          return (
            <ServiceCard
              key={`${item}_${index}`}
              type={item}
              serviceAccount={list[item]}
            />
          )
        } else return <Recursive list={list[item]} key={`${item}_${index}`} />
      })}
    </>
  )
}

const ProfileServices = () => {
  const context = useContext(VerusIDContext)
  const services = context.profileJSON.services
  // const webServices = context.profileJSON?.services.website
  // const accountServices = context.profileJSON?.services.accounts
  // const verusId = context.id

  return (
    <StyledContainer>
      <StyledLabel>
        <DefaultHeader as="h5" align="left">
          Accounts & Services:{' '}
        </DefaultHeader>
        <span>
          <FaCog className="initial" />
          Validating <FaUserCheck className="good" />
          Valid <FaExclamationTriangle className="invalid" />
          Invalid <FaCog className="invalid" />
          Error Validating
        </span>
      </StyledLabel>
      {services && <Recursive list={services} />}

      {/* {accountServices &&
          Object.keys(accountServices).map((account, index) => (
            <ServiceCard
              key={index}
              verusUser={verusId}
              type={account}
              serviceAccount={accountServices[account]}
            />
          ))}
        {webServices && (
          <ServiceCard
            verusUser={verusId}
            type="website"
            serviceAccount={webServices}
          />
        )} */}
    </StyledContainer>
  )
}

export default ProfileServices
