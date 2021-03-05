//not sure if required but just in case
// import {forwardRef} from 'react'
// const IndexPage = forwardRef((props, ref)=>{

// })
import Link from 'next/link'
import { Menu, SlugMenu } from '@src/components'

//This is the Catgory index page they all have the same format
const IndexPage = (props) => {
  const { menuList, menuRef, children, nextRoutePath, nextRouteName } = props
  return (
    <>
      <div className="container grid max-w-5xl grid-cols-1 gap-6 mt-8 md:grid-cols-4">
        <div>
          <Menu pathList={menuList} href={menuRef} />
        </div>
        <div className="p-6 md:col-span-3">{children}</div>
      </div>

      <div className="flex flex-row items-center justify-end p-2 md:hidden">
        <Link href={nextRoutePath}>
          <a className="flex flex-row items-center py-2 text-sm no-underline md:text-baseLink text-navlink-default hover:text-navlink-hover active:bg-blue-200 active:text-bluebutton-default">
            {nextRouteName}&nbsp;{' '}
            <svg
              width="8"
              height="18"
              viewBox="0 0 6 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.4 8.56L4.67 5M1.4 1.23L4.66 4.7"
                stroke="#999"
                strokeLinecap="square"
              ></path>
            </svg>{' '}
          </a>
        </Link>
      </div>
    </>
  )
}

export default IndexPage
