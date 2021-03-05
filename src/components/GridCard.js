import Link from 'next/link'
const style =
  'px-12 py-5 mt-3 text-sm bg-transparent border border-solid rounded-full border-bluetrans-default hover:border-bluebutton-default text-bluebutton'

export const GridCard = ({
  imgSrc,
  imgAlt,
  title,
  description,
  btnTxt,
  btnUrl,
  isExternal,
}) => {
  return (
    <div className="flex flex-col justify-center p-6 text-center">
      <img src={`images/icons/${imgSrc}`} alt={imgAlt} className="h-20" />
      <h2 className="mt-8 text-2xl font-normal">{title}</h2>
      <p className="my-3">{description}</p>
      <div>
        {isExternal ? (
          <a href={btnUrl} target="_blank" className="no-underline">
            <button className={style}>{btnTxt}</button>
          </a>
        ) : (
          <Link href={btnUrl}>
            <button className={style}>{btnTxt}</button>
          </Link>
        )}
      </div>
    </div>
  )
}

export default GridCard
