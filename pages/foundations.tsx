import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { FoundationsProps } from '@/types/foundations'
import { MainLayout } from '@/components/layouts'
const Foundations = ({
  data,
}: FoundationsProps): InferGetStaticPropsType<typeof getStaticProps> => {
  return <MainLayout>Enter{data}</MainLayout>
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      data: null,
    },
  }
}

export default Foundations
