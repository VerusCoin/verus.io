export function mapNumberToMonths(input) {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  return months[input]
}

export function formatDateFromString(input) {
  const date = new Date(input)
  const addPadding = (value) => (value > 9 ? value : `0${value}`)
  return `${mapNumberToMonths(date.getMonth())} ${addPadding(
    date.getDate()
  )}, ${date.getFullYear()}`
}

export function formatDateTimeFromString(input) {
  const date = new Date(input)
  const addPadding = (value) => (value > 9 ? value : `0${value}`)
  //2018-02-28 12:34:56
  return `${date.getFullYear()}-${addPadding(date.getMonth() + 1)}-${addPadding(
    date.getDate()
  )} ${addPadding(date.getHours())}:${addPadding(
    date.getMinutes()
  )}:${addPadding(date.getSeconds())}`
}

export function date_diff_indays(input) {
  let dt1 = new Date(input)
  let dt2 = new Date()
  // return Math.floor(
  //   (Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
  //     Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) /
  //     (1000 * 60 * 60 * 24)
  // );
  return Math.floor((dt2 - dt1) / (1000 * 60 * 60 * 24))
  // return Math.floor(
  //   (Date.UTC(dt2.getFullYear, dt2.getMonth, dt2.getDate) - dt1) /
  //     (1000 * 60 * 60 * 24)
  // );
}
