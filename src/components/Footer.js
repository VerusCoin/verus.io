import { SocialProfileJsonLd } from 'next-seo';

const Footer = () => {
  return (
    <div className="pb-12 font-foot">
      <div className="grid justify-center grid-cols-1 gap-8 md:grid-cols-2">
        <a
          href="https://discord.gg/VRKMP2S"
          target="_blank"
          className="p-2 no-underline border border-white border-opacity-25 border-solid rounded text-theme-white sm:p-8 link-block-3"
        >
          <img
            src="/images/logos/Discord-Logo-White.png"
            alt="Discord Logo"
            className="w-8 mb-4 "
          />
          <h3 className="mt-0 mb-4 text-2xl">Discord Server</h3>
          <p className="text-sm leading-relaxed opacity-50 md:text-base text-theme-white ">
            Join our most active community with over 4.900 members for all
            questions and discussions.
          </p>
        </a>

        <a
          href="https://t.me/veruscommunity"
          target="_blank"
          className="p-2 no-underline border border-white border-opacity-25 border-solid rounded text-theme-white sm:p-8 link-block-3"
        >
          <img
            src="/images/logos/iconmonstr-telegram-1-240.png"
            alt="Telegram Logo"
            className="w-8 mb-4"
          />
          <h3 className="mt-0 mb-4 text-2xl">Telegram Community</h3>
          <p className="text-sm leading-relaxed opacity-50 md:text-base text-theme-white ">
            Jump in our community Telegram server. Ask questions and discuss
            everything related to Verus.
          </p>
        </a>
      </div>
      <div className="flex flex-col justify-between mt-24 space-y-12 sm:space-x-12 sm:flex-row sm:space-y-0 ">
        <div className="">
          <img
            src="/images/logos/veruslogowhite.png"
            width="100"
            srcSet="
              /images/logos/veruslogowhite-p-500.png  500w,
              /images/logos/veruslogowhite-p-800.png  800w,
              /images/logos/veruslogowhite-p-1080.png 1080w,
              /images/logos/veruslogowhite.png 1185w
            "
            sizes="100px"
            alt=""
          />
          <p className="mt-2 text-sm ">
            © 2020 The Verus Project.
            <br />
            All rights reserved.
          </p>

          <a
            href="https://github.com/VerusCoin/Media-Assets"
            target="_blank"
            className="block mt-2 no-underline hover:text-white text-navlink-hover"
          >
            Brand Materials
          </a>
        </div>
        <div className="space-y-4">
          <h4 className="m-0 mb-8 text-lg">Socials</h4>

          <a
            href="https://www.facebook.com/VerusCoin"
            target="_blank"
            className="block mb-4 no-underline hover:text-white text-navlink-hover"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com/veruscoin"
            target="_blank"
            className="block no-underline hover:text-white text-navlink-hover"
          >
            Twitter
          </a>
          <a
            href="https://t.me/veruscommunity"
            target="_blank"
            className="block no-underline hover:text-white text-navlink-hover"
          >
            Telegram
          </a>
          <a
            href="https://discord.gg/VRKMP2S"
            target="_blank"
            className="block no-underline hover:text-white text-navlink-hover"
          >
            Discord
          </a>
          <a
            href="https://reddit.com/r/veruscoin"
            target="_blank"
            className="block no-underline hover:text-white text-navlink-hover"
          >
            Reddit
          </a>
          <a
            href="https://medium.com/@veruscoin"
            target="_blank"
            className="block no-underline hover:text-white text-navlink-hover"
          >
            Medium
          </a>
          <a
            href="https://www.youtube.com/channel/UC_-KCHBxaDwSgNMdE3LMThg"
            target="_blank"
            className="block no-underline hover:text-white text-navlink-hover"
          >
            YouTube
          </a>
          <a
            href="https://bitcointalk.org/index.php?topic=4070404.0"
            target="_blank"
            className="block no-underline hover:text-white text-navlink-hover"
          >
            BitcoinTalk
          </a>
          <SocialProfileJsonLd
            type="Organization"
            name="Verus"
            url={process.env.NEXT_PUBLIC_SITEURL}
            sameAs={[
              'https://discord.gg/VRKMP2S',
              'https://www.facebook.com/VerusCoin',
              'https://twitter.com/veruscoin',
              'https://t.me/veruscommunity',
              'https://reddit.com/r/veruscoin',
              'https://medium.com/@veruscoin',
              'https://www.youtube.com/channel/UC_-KCHBxaDwSgNMdE3LMThg',
              'https://bitcointalk.org/index.php?topic=4070404.0',
            ]}
          />
        </div>
        <div className="space-y-4">
          <h4 className="m-0 mb-8 text-custom2">Build With Us</h4>
          <a
            href="https://discord.gg/VRKMP2S"
            target="_blank"
            className="block no-underline hover:text-white text-navlink-hover"
          >
            Discord
          </a>
          <a
            href="https://github.com/VerusCoin"
            target="_blank"
            className="block no-underline hover:text-white text-navlink-hover"
          >
            GitHub
          </a>
          {/* <a
            href="#"
            target="_blank"
            className="block no-underline hover:text-white text-navlink-hover"
          >
            Developer Documentation
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
