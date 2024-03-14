export const getErrors = (errors: any, name: any) => {
  const result = name
    .split('.')
    .reduce((prev: Record<string, unknown>, cur: string) => prev?.[cur], errors)
  return result
}

export default getErrors
