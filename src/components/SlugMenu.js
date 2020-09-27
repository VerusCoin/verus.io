import Link from 'next/link';

const SlugMenu = ({ pathList, href }) => {
  return (
    <div className="grid grid-cols-1 gap-3 mb-20 sm:grid-cols-2">
      {pathList.map((path) => {
        if (path.path) {
          return (
            <Link
              href={`${href}/${path.path}`}
              as={`${href}/${path.path}`}
              key={path.id}
            >
              <div className="px-3 py-4 bg-transparent border border-solid rounded-lg cursor-pointer lg:px-8 lg:py-6 border-bluetrans hover:border-bluebutton hover:bg-menu-active text-bluebutton">
                <h2 className="p-0 m-0 text-xl font-normal ">{path.name}</h2>
                <p className="p-0 m-0 mt-2 text-base leading-normal text-black lg:text-md font-p">
                  {path.description}
                </p>
              </div>
            </Link>
          );
        }

        if (path.href) {
          return (
            <a
              className="no-underline"
              href={path.href}
              key={path.id}
              target="_blank"
            >
              <div className="px-3 py-4 bg-transparent border border-solid rounded-lg cursor-pointer lg:px-8 lg:py-6 border-bluetrans hover:border-bluebutton hover:bg-menu-active text-bluebutton">
                <h2 className="p-0 m-0 text-xl font-normal ">{path.name}</h2>
                <p className="p-0 m-0 mt-2 text-base leading-normal text-black lg:text-md font-p">
                  {path.description}
                </p>
              </div>
            </a>
          );
        }

        if (path.slug) {
          return (
            <Link
              href={`${href}/[slug]`}
              as={`${href}/${path.slug}`}
              key={path.id}
            >
              <div className="px-3 py-4 bg-transparent border border-solid rounded-lg cursor-pointer lg:px-8 lg:py-6 border-bluetrans hover:border-bluebutton hover:bg-menu-active text-bluebutton">
                <h2 className="p-0 m-0 text-xl font-normal ">{path.name}</h2>
                <p className="p-0 m-0 mt-2 text-base leading-normal text-black lg:text-md font-p">
                  {path.description}
                </p>
              </div>
            </Link>
          );
        }
      })}
    </div>
  );
};

export default SlugMenu;
