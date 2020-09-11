import Menu from '../../components/Menu';
import { technologyLinks } from '../../constants/technology';
import FooterMenu from '../../components/FooterMenu';

const VerusHash = () => {
  return (
    <>
      <div className="container grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-4">
        <div className="">
          <Menu pathList={technologyLinks} href="/technology" />
        </div>
        <div className="justify-center max-w-5xl p-6 md:col-span-3">
          <h1 className="p-0 m-0 text-4xl font-normal text-bluebutton">
            Verushash
          </h1>
          <p className="text-p font-light leading-relaxed font-p">
            VerusHash 2.2 is the mining algorithm for VerusCoin. The algorithm
            was developed to equalize mining equitability across hardware
            classes, and to create a naturally decentralized miner ecosystem.
          </p>
          <p className="text-p font-light leading-relaxed font-p">
            No specialized mining equipment is necessary to mine Verus, and it
            can even be solo-mined directly from the Verus Desktop wallet with
            just a few clicks, without any additional software requirements.
            Beginners can find an even level playing field to start earning
            VRSC.
          </p>
          <div className="grid grid-cols-1 mt-16 mb-8 md:grid-cols-2 md:gap-6">
            <div className="flex flex-row items-center flex-shrink-0">
              <img src="/images/CPU.png" alt="CPU image" width="100" />
              <p className="pl-3 font-light text-sm leading-normal font-p">
                Mining with a CPU is most profitable.
              </p>
            </div>
            <div className="flex flex-row items-center flex-shrink-0">
              <img src="/images/GPU.png" alt="GPU image" width="100" />
              <p className="pl-3 font-light text-sm leading-normal font-p">
                Mining with a GPU can be profitable.
              </p>
            </div>
            <div className="flex flex-row items-center flex-shrink-0">
              <img src="/images/FPGA.png" alt="FPGA image" width="100" />
              <p className="pl-3 font-light text-sm leading-normal font-p">
                There are no Bitstreams available to mine on FPGA's.
              </p>
            </div>
            <div className="flex flex-row items-center">
              <img src="/images/ASIC.png" alt="ASIC image" width="100" />
              <p className="pl-3 font-light text-sm leading-normal font-p">
                No ASICs are made (yet) to mine Verus.
              </p>
            </div>
          </div>
          <p className="font-light leading-normal font-p">
            For actual hashrate statistics reported by our community see Discord
            in channels: #cpu-hashrate, #gpu-hashrate, #fpga-hashrate.
          </p>
          <div className="justify-center w-full mt-16 mb-32 space-y-4">
            <button className="w-full px-12 py-5 text-xl text-white border-0 rounded-full bg-bluebutton hover:bg-bluebutton-hover">
              Start solo-mining in Verus Desktop.{' '}
              <span className="text-span-4">Easy, in just a few clicks</span>
            </button>
            <button className="w-full px-12 py-5 text-xl bg-transparent border border-solid rounded-full border-bluetrans hover:border-bluebutton text-bluebutton">
              Get mining software
            </button>
          </div>
        </div>
      </div>
      <FooterMenu hrefLocation="/technology" pathList={technologyLinks} />
    </>
  );
};

export default VerusHash;
