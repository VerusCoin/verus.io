import Link from 'next/link';
import Menu from '../../components/Menu';
import SlugMenu from '../../components/SlugMenu';
import { technologyLinks } from '../../constants/technology';

const TechnologyOverview = () => {
  const nextRoute = technologyLinks[0];

  return (
    <>
      <div className="container grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-4">
        <div className="">
          <Menu pathList={technologyLinks} href="/technology" />
        </div>
        <div className="p-6 md:col-span-3">
          <h1 className="p-0 m-0 text-4xl font-normal text-bluebutton">
            Introduction to Verus
          </h1>
          <p className="font-light leading-relaxed text-p font-p">
            Verus is an open-source platform available to anyone. Verus supplies
            tools for individuals and organizations to build equitable
            frameworks for social and economic change.
          </p>
          <div className="grid grid-cols-1 mt-8 mb-8 md:grid-cols-2 md:gap-6">
            <div className="flex flex-row items-center flex-shrink-0">
              <img
                src="/images/community.png"
                alt="community image"
                width="100"
              />
              <p className="pl-3 text-sm font-light leading-normal font-p">
                Community driven project in the true spirit of Bitcoin.
              </p>
            </div>

            <div className="flex flex-row items-center flex-shrink-0">
              <img src="/images/noICO.png" alt="no ico image" width="100" />
              <p className="pl-3 text-sm font-light leading-normal font-p">
                No ICO was held.
              </p>
            </div>
            <div className="flex flex-row items-center flex-shrink-0">
              <img
                src="/images/noPREmine.png"
                alt="no premine image"
                width="100"
              />
              <p className="pl-3 text-sm font-light leading-normal font-p">
                No coins were pre-mined.
              </p>
            </div>
            <div className="flex flex-row items-center flex-shrink-0">
              <img src="/images/noDEV.png" alt="no dev image" width="100" />
              <p className="pl-3 text-sm font-light leading-normal font-p">
                No founder or developer fees.
              </p>
            </div>
          </div>

          <h2 className="mt-16 text-2xl font-normal">Technology Deep Dive</h2>
          <SlugMenu pathList={technologyLinks} href="/technology" />

          <h5 className="mt-12 mb-4 text-2xl font-normal">Resources</h5>
          <ul className="flex flex-col p-0 m-0 mb-24 space-y-2">
            <li className="inline-flex">
              <img src="/images/keyboard_arrow_right-24px.svg" alt="" />
              <a
                className="no-underline text-bluebutton"
                href="#"
                target="_blank"
              >
                Verus Vision Paper
              </a>
            </li>
            <li className="inline-flex">
              <img
                className="items-centedr "
                src="/images/keyboard_arrow_right-24px.svg"
                alt=""
              />
              <a
                className="no-underline text-bluebutton"
                href="#"
                target="_blank"
              >
                Verus Proof of Power Paper
              </a>
            </li>
            <li className="inline-flex">
              <img src="/images/keyboard_arrow_right-24px.svg" alt="" />
              <a
                className="no-underline text-bluebutton"
                href="#"
                target="_blank"
              >
                Verus Phase One Paper
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-row items-center justify-end p-2 md:hidden">
        <Link href={`/technology/${nextRoute.path}`}>
          <a className="items-center py-2 text-sm no-underline md:text-baseLink text-navlink hover:text-navlink-hover ">
            {nextRoute.name}&nbsp;{' '}
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
  );
};

export default TechnologyOverview;
