// TODO: need to see if can be converted to Typescript
const GetAccounts = (accountsList) => {
  const accounts = { online: {}, crypto: { addresses: {}, identities: {} } }
  for (const [key, value] of Object.entries(accountsList)) {
    let str = key
    str = value.qualifiedname
    if (str) {
      if (str.includes('accounts')) {
        const accountStr = str.split('.')[3]
        accounts.online[accountStr] = { ...value }
      }
      if (str.includes('keys')) {
        const keyStr = str.split('.')[2]
        const keySubStr = str.split('.')[3]

        if (keySubStr === 'address') {
          accounts.crypto.addresses[keyStr] = { ...value }
        } else {
          accounts.crypto.identities[keyStr] = { ...value }
        }
      }
    }
  }
  return accounts
}

export default GetAccounts
