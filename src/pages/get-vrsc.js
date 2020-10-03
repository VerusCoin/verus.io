import Exchange from '../components/Exchange';
import { ExchangeLinks } from '../constants/exchange';

const GetVRSC = () => {
  return (
    <div className="container flex flex-col items-center justify-center mt-8 ">
      <div className="max-w-3xl mb-12 md:mb-32">
        <h1>Get VRSC on exchanges, earn it, or start mining and staking.</h1>
        <p className="font-p">
          We simply list the exchanges that are known to us that trade VRSC.
          Perform sufficient due-diligence on the exchange.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {ExchangeLinks.map((exchange) => {
            return <Exchange key={exchange.title} exchange={exchange} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default GetVRSC;
