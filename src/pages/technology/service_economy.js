import Menu from '../../components/Menu';
import { technologyLinks } from '../../constants/technology';
import FooterMenu from '../../components/FooterMenu';

const ServiceEconomy = () => {
  return (
    <>
      <div className="container grid max-w-5xl grid-cols-1 gap-6 mt-8 mb-12 md:grid-cols-4">
        <div className="">
          <Menu pathList={technologyLinks} href="/technology" />
        </div>
        <div className="max-w-5xl p-6 md:col-span-3">
          <h1 className="p-0 m-0 text-4xl font-normal">
            Service Economy: Enable all to participate and benefit
          </h1>
          <p className="my-8">
            We enable all people to participate in and benefit from a blockchain
            service economy. Verus is an open, borderless and decentralised
            blockchain project, it is important to create value for the people
            who maintain the network; the miners and stakers.
          </p>
          <p className="my-8">
            No value whatsoever goes to the Verus Coin Foundation, either
            through founder fees or developer fees. All fees are 100% recycled
            through mining and staking to create the groundwork for a thriving
            economy.
          </p>
          <p className="my-8">
            The miners and stakers are competing to win the next block to
            collect its block reward. In the Verus ecosystem not only block
            rewards are added to the winning block, but also VerusID
            registration fees, conversion fees and transaction fees. These fees
            can outperform traditional block rewards. There is a lot to gain by
            putting computers to work with mining, or coins through staking
          </p>
          <p className="my-8">
            Furthermore, when PBaaS is enabled, miners within the ecosystem can
            mine up to 22 chains simultaneously. And stake an unlimited amount
            of chains.
          </p>
          <p className="my-8">
            All in all, this makes being part of the Verus service economy a
            profitable undertaking.
          </p>
        </div>
      </div>
      <FooterMenu hrefLocation="/technology" pathList={technologyLinks} />
    </>
  );
};

export default ServiceEconomy;
