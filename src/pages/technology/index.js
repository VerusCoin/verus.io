import Link from 'next/link';
import Menu from '../../components/Menu';
import SlugMenu from '../../components/SlugMenu';
import { technologyLinks } from '../../constants/technology';

const TechnologyOverview = () => {
  const nextRoute = technologyLinks[0];

  return (
    <>
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-12 ">
        <div className="md:col-start-2 md:col-span-3 lg:col-span-2 lg:col-start-3">
          <Menu pathList={technologyLinks} href="/technology" />
        </div>
        <div className="p-6 sm:col-span-2 md:col-span-8 lg:col-span-7">
          <h1 className="p-0 m-0 text-4xl font-normal text-bluebutton">
            Introduction to Verus
          </h1>
          <p className="font-light font-p">
            Verus is an open-source platform available to anyone. Verus supplies
            tools for individuals and organizations to build equitable
            frameworks for social and economic change.
          </p>
          <p className="font-light font-p">
            Combining scalability, security, privacy, self-sovereign identities
            and decentralized finance, Verus is at the forefront of blockchain
            innovation. Bringing it all together in a user centric experience
            for everyone interacting with the system.
          </p>
          <h2 className="mt-16 text-2xl font-normal">Technology Deep Dive</h2>
          <SlugMenu pathList={technologyLinks} href="/technology" />
          <h5 className="mb-0 text-2xl font-normal">
            Fair Launch &amp; Community Driven
          </h5>
          <p className="font-light font-p">
            No ICO, no pre-mine, no founder or developer fees. Verus is a
            community driven project in the true spirit of Bitcoin.{' '}
          </p>
          <p className="font-light font-p">
            From the very first beginnings of the VerusCoin blockchain anyone
            had a fair opportunity to start mining and then staking the coin. An
            announcement was made 15 minutes prior to the launch of the
            blockchain.{' '}
            <a
              className="no-underline text-bluebutton"
              href="https://bitcointalk.org/index.php?topic=4070404.0"
              target="_blank"
            >
              Read here.
            </a>
          </p>
          <h5 className="mb-0 text-2xl font-normal">
            Video Introduction to Verus
          </h5>
          <div className="embed-responsive aspect-ratio-16/9">
            <iframe
              className="embed-responsive-item"
              src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FRBj5hrQa4As%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DRBj5hrQa4As&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FRBj5hrQa4As%2Fhqdefault.jpg&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=youtube"
              scrolling="no"
              title="YouTube embed"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen={true}
            />
          </div>
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
        <Link href="/technology/[slug]" as={`/technology/${nextRoute.slug}`}>
          <a className="items-center py-2 text-sm no-underline md:text-baseLink text-navlink hover:text-navlink-hover ">
            {nextRoute.slug}&nbsp;{' '}
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
