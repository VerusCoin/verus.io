import Link from 'next/link';
import Menu from '../../components/Menu';
import SlugMenu from '../../components/SlugMenu';
import { technologyLinks } from '../../constants/technology';
import { NextSeo } from 'next-seo';

const TechnologyOverview = () => {
  const nextRoute = technologyLinks[0];

  return (
    <>
      <NextSeo
        title="Techonolgy"
        description="We are an open-source platform available to anyone. We supply tools
        for individuals and organizations to build equitable frameworks for
        social and economic change."
        additionalMetaTags={[
          {
            name: 'keywords',
            content:
              'verus, pbaas, public blockchains as a service, proof of power, proof-of-power, cryptocurrency, Open Source, Privacy, VerusID, ERC-20, decentralized finance, verus signatures',
          },
        ]}
      />
      <div className="container grid max-w-5xl grid-cols-1 gap-6 mt-8 md:grid-cols-4">
        <div>
          <Menu pathList={technologyLinks} href="/technology" />
        </div>
        <div className="p-6 md:col-span-3">
          <h1 className="p-0 mt-0 text-2xl font-normal md:text-4xl ">
            Technology Deep Dive: inside Verus.
          </h1>
          <p className="my-8 leading-relaxed">
            We are an open-source platform available to anyone. We supply tools
            for individuals and organizations to build equitable frameworks for
            social and economic change.
          </p>
          <p className="my-8 leading-relaxed">
            Verus release was pre-announced on Bitcointalk with zero premine,
            and team members mined and staked along with everyone else to
            generate coins. In addition to coins mined by individual team
            members for their own benefit, the Verus developers intend to donate
            most of their mined and staked earnings to a community Verus
            foundation along with other donating community members who will join
            us, in order to support the ongoing growth and project development
            by core developers and the community for years to come.
          </p>
          <div className="grid grid-cols-1 p-8 my-16 bg-center bg-cover rounded md:grid-cols-2 md:gap-6 bg-features-bg">
            <div className="flex flex-row items-center flex-shrink-0">
              <img
                src="/images/icons/community.png"
                alt="community image"
                width="100"
              />
              <p className="pl-3 text-sm leading-normal text-theme-feature font-p">
                Community driven project in the true spirit of Bitcoin.
              </p>
            </div>

            <div className="flex flex-row items-center flex-shrink-0">
              <img
                src="/images/icons/noICO.png"
                alt="no ico image"
                width="100"
              />
              <p className="pl-3 text-sm leading-normal text-theme-feature font-p">
                No ICO was held.
              </p>
            </div>
            <div className="flex flex-row items-center flex-shrink-0">
              <img
                src="/images/icons/noPREmine.png"
                alt="no premine image"
                width="100"
              />
              <p className="pl-3 text-sm leading-normal text-theme-feature font-p">
                No coins were pre-mined.
              </p>
            </div>
            <div className="flex flex-row items-center flex-shrink-0">
              <img
                src="/images/icons/noDEV.png"
                alt="no dev image"
                width="100"
              />
              <p className="pl-3 text-sm leading-normal text-theme-feature font-p">
                No founder or developer fees.
              </p>
            </div>
          </div>

          <h2 className="mt-16 mb-4 text-2xl font-normal">
            Technology Deep Dive
          </h2>
          <SlugMenu pathList={technologyLinks} href="/technology" />

          <h5 className="mt-8 mb-4 text-2xl font-normal">Resources</h5>
          <ul className="flex flex-col p-0 m-0 mb-24 space-y-2">
            <li className="inline-flex">
              <img src="/images/icons/keyboard_arrow_right-24px.svg" alt="" />
              <a
                className="no-underline text-bluebutton"
                href="/docs/VerusVision.pdf"
                target="_blank"
              >
                Verus Vision Paper
              </a>
            </li>
            <li className="inline-flex">
              <img
                className="items-centedr "
                src="/images/icons/keyboard_arrow_right-24px.svg"
                alt=""
              />
              <a
                className="no-underline text-bluebutton"
                href="/docs/VerusPoP.pdf"
                target="_blank"
              >
                Verus Proof of Power Paper
              </a>
            </li>
            <li className="inline-flex">
              <img src="/images/icons/keyboard_arrow_right-24px.svg" alt="" />
              <a
                className="no-underline text-bluebutton"
                href="/docs/VerusPhaseI.pdf"
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
