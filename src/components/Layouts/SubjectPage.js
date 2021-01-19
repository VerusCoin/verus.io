import cn from 'classnames'
import { Menu, FooterMenu } from '@src/components'

//This is the Subject page following the Category Index Page
//they all have the same format
const SubjectPage = (props) => {
  const { menuList, menuRef, children, classnames } = props
  return (
    <>
      <div className="container grid max-w-5xl grid-cols-1 gap-6 mt-8 mb-12 md:grid-cols-4">
        <div>
          <Menu pathList={menuList} href={menuRef} />
        </div>
        <div className="max-w-5xl p-6 md:col-span-3">{children}</div>
      </div>
      <FooterMenu hrefLocation={menuRef} pathList={menuList} />
    </>
  )
}

export default SubjectPage
