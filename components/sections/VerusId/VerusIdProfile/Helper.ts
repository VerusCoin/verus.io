export function capitalizeFirstLetter(string: string) {
  return string[0].toUpperCase() + string.slice(1)
}

export const ObjectFinder =
  (key: string) =>
  (obj: Record<string, unknown>): any =>
    obj[key]
