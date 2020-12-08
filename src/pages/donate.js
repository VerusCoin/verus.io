import { NextSeo } from 'next-seo';

const DonationCard = ({ title, address }) => {
  return (
    <div
      className="p-6 bg-transparent border border-solid rounded-lg lg:px-8 lg:py-6 border-bluetrans "
      style={{ width: 'fit-content' }}
    >
      <h3 className="p-0 m-0 text-xl font-normal ">{title}</h3>
      <p className="p-4 text-md bg-gray-305" style={{ width: 'fit-content' }}>
        {address}
      </p>
    </div>
  );
};

const DonatePage = () => {
  return (
    <>
      <NextSeo
        title="Documents"
        description="Verus Documents and DonatePage."
        additionalMetaTags={[
          {
            name: 'keywords',
            content:
              'verus, ERC-20, VRSC, earn, mining, staking, pools, network economy, secure, mining pools',
          },
        ]}
      />
      <div className="container max-w-4xl p-6 mt-8">
        <h1 className="p-0 m-0 mb-4 text-2xl font-normal md:text-4xl">
          Support our vision and donate!
        </h1>
        <p className="my-8">
          Donate to the Verus Coin Foundation to help accomplish our vision. We
          greatly appreciate all donations, small or large. Thank you!
        </p>
        <h2 className="mt-8 mb-4 text-2xl font-normal">Addresses</h2>
        <div className="mb-16 space-y-8">
          <DonationCard
            title="VerusCoin (VRSC) & Komodo (KMD)"
            address="RVjvbZuqSGLGDm1B9BFkbHWySPKEx4tfjQ"
          />
          <DonationCard
            title="Bitcoin (BTC)"
            address="1FoRNRPTuXHseNPRc54yLwyeVrVGJgH5eo"
          />
          <DonationCard
            title="Ethereum (ETH)"
            address="0x06E2F78E650C88c6D89440E778004037FEAbefC5"
          />
        </div>
      </div>
    </>
  );
};

export default DonatePage;
