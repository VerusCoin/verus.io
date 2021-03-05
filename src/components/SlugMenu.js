import React from 'react'
import Link from 'next/link'

const SlugContent = React.forwardRef((props, ref) => {
  const { onClick, href, path } = props
  // const { name, description, icon, colorControls } = props
  return (
    <div
      href={href}
      onClick={onClick}
      ref={ref}
      className="p-6 bg-transparent border border-solid rounded-lg cursor-pointer lg:px-8 lg:py-6 border-bluetrans-default hover:border-bluebutton-default hover:bg-menu-active text-bluebutton-default"
    >
      <h2 className="p-0 m-0 text-xl font-normal ">{path.name}</h2>
      <p className="p-0 m-0 mt-2 text-base leading-normal font-p">
        {path.description}
      </p>
    </div>
  )
})

export const SlugMenu = ({ pathList, href }) => {
  return (
    <div className="grid grid-cols-1 gap-3 mb-16 sm:grid-cols-2">
      {pathList.map((path) => {
        if (path.path || path.slug) {
          //need to create a dynamic href link

          return (
            <Link
              href={
                href
                  ? `${href}/${path.path || path.slug}`
                  : `/${path.path || path.slug}`
              }
              key={path.id}
              passHref
            >
              <SlugContent path={path} />
            </Link>
          )
        } else {
          return (
            <a
              className="no-underline"
              href={path.href}
              key={path.id}
              target="_blank"
              passHref
            >
              <SlugContent path={path} />

              {/* <div className="p-6 bg-transparent border border-solid rounded-lg cursor-pointer lg:px-8 lg:py-6 border-bluetrans-default hover:border-bluebutton-default hover:bg-menu-active text-bluebutton-default">
                <h2 className="p-0 m-0 text-xl font-normal ">{path.name}</h2>
                <p className="p-0 m-0 mt-2 text-base leading-normal font-p">
                  {path.description}
                </p>
              </div> */}
            </a>
          )
        }
      })}
    </div>
  )
}

export const DocSlugMenu = ({ pathList, href }) => {
  return (
    <div className="grid grid-cols-1 gap-4 p-4 mb-16 sm:gap-16 sm:grid-cols-2">
      {pathList.map((path) => {
        return (
          <div
            className="p-6 bg-transparent border border-solid rounded-lg lg:px-8 lg:py-6 border-bluetrans-default "
            key={path.id}
          >
            <h2 className="p-0 m-0 text-xl font-normal ">{path.name}</h2>
            <p className="p-0 m-0 mt-2 text-base leading-normal font-p">
              {path.description}
            </p>
            <p className="p-0 m-0 mt-4 text-sm font-semibold leading-normal">
              {path.pages} pages
            </p>
            <a download href={path.url} className="text-base underline font-p">
              Download
            </a>
          </div>
        )
      })}
    </div>
  )
}
