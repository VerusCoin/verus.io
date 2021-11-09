import { DefaultText, DefaultLink } from '@/components/elements'

const ArweaveComponents = () => {
  return {
    h1: (props: any) => (
      <DefaultText fontSz="md" customMargin="10px 0" fam="geoHead" {...props} />
    ),
    h2: (props: any) => (
      <DefaultText fontSz="sm" customMargin="8px 0" fam="geoHead" {...props} />
    ),
    p: (props: any) => (
      <DefaultText fontSz="xs" mdx={true} customMargin="5px 0" {...props} />
    ),
    a: (props: any) => <DefaultLink external {...props} />,
  }
}

export default ArweaveComponents
