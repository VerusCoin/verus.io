import cn from 'classnames'
import { Menu, FooterMenu } from '@src/components'

//This is the Subject page following the Category Index Page
//they all have the same format
const SubjectPage = (props) => {
  const { menuList, menuRef, children, classnames, classnames2, clean } = props
  return (
    <>
      <div
        className={cn(
          'container grid max-w-5xl grid-cols-1 gap-6 mt-8 md:grid-cols-4',
          classnames
        )}
      >
        <div>
          <Menu pathList={menuList} href={menuRef} />
        </div>
        <div
          className={cn(classnames2, { 'max-w-5xl p-6 md:col-span-3': !clean })}
        >
          {children}
        </div>
      </div>
      <FooterMenu hrefLocation={menuRef} pathList={menuList} />
    </>
  )
}

export default SubjectPage
