import { useState } from 'react';
import { useForm } from 'react-hook-form';

const datafetch = {
  name: 'Verus Coin Foundation@',
  address: 'i5v3h9FWVdRFbNHU7DfcpGykQjRaHtMqu7',
  revocation: 'i5v3h9FWVdRFbNHU7DfcpGykQjRaHtMqu7 Verus Coin Foundation@',
  recovery: 'i5v3h9FWVdRFbNHU7DfcpGykQjRaHtMqu7 Verus Coin Foundation@',
  private:
    'zs1dycegwse0x67qvy2fksukcng3ekkgvly2qwjckj8fxraam33xu2y5jyh3yva0e4ywec9quedcud',
  primary: 'REpxm9bCLMiHRNVPA9unPBWixie7uHFA5C',
};

const VerusIdLookup = () => {
  const { register, handleSubmit, errors } = useForm();
  const [formSubmit, setFormSubmit] = useState(false);
  const [verusID, setVerusID] = useState({});

  const onSubmit = (data) => {
    if (data) {
      setFormSubmit(true);
      setVerusID(datafetch);
    }
  };

  const _handleReset = () => {
    setFormSubmit(false);
    setVerusID({});
  };

  return (
    <div className="section-2">
      <div className="grid justify-center grid-cols-2 mt-16 sm:grid-cols-4">
        <div className="col-span-2 text-center sm:col-start-2">
          <img
            src="/images/verusidlookup.png"
            width="250"
            srcSet="/images/verusidlookup-p-500.png 500w, /images/verusidlookup-p-800.png 800w, /images/verusidlookup.png 1078w"
            sizes="250px"
            alt=""
          />
        </div>
      </div>
      {!verusID.name && (
        <div className="grid grid-cols-2 p-6 text-center sm:grid-cols-4">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col col-span-2 text-center md:items-baseline sm:col-start-2 md:flex-row"
          >
            <div className="flex-grow">
              <input
                name="verusID"
                className="w-full px-6 py-5 rounded-full text-field text-bluebutton focus:outline-none focus:bg-bluetrans-alter "
                type="text"
                placeholder="Enter VerusID"
                ref={register({ required: true })}
              />

              {errors.verusID && <span>Please enter a VerusID</span>}
            </div>
            <div className="md:-ml-32 ">
              <input
                type="submit"
                value="Lookup"
                className="w-full px-10 py-5 text-white border-none rounded-full bg-bluebutton hover:bg-bluebutton-hover focus:outline-none "
              />
              <span></span>
            </div>
          </form>
        </div>
      )}
      {verusID.name && (
        <div className="grid grid-cols-1 p-6 mb-16 text-xs text-center md:text-base md:grid-cols-3 lg:grid-cols-5 sm:text-base">
          <div className="text-center break-all md:col-span-3 lg:col-start-2">
            <h3 className="py-6 font-normal rounded-full bg-bluetrans-alter font-3xl">
              {datafetch.name}
            </h3>
            <div className="space-y-2 text-sm font-light font-p">
              <div className="flex flex-wrap justify-between p-6 py-4 mt-8 mb-8 bg-gray-105">
                <div className="text-left">Identity Address</div>
                <div className="text-right sm:text-base">
                  {datafetch.address}
                </div>
              </div>
              <div className="flex flex-wrap justify-between p-6 py-4 border-0 border-t-2 border-b-2 border-solid border-gray-305">
                <div className="text-left">Revocation Authority</div>
                <div className="text-right">{datafetch.revocation}</div>
              </div>
              <div className="flex flex-wrap justify-between p-6 py-2">
                <div className="text-left">Recovery Authority</div>
                <div className="text-right">{datafetch.recovery}</div>
              </div>
              <div className="flex flex-wrap justify-between p-6 py-4 border-0 border-t-2 border-b-2 border-solid border-gray-305">
                <div className="text-left">Private Address</div>
                <div className="text-right ">{datafetch.private}</div>
              </div>
              <div className="flex flex-wrap justify-between p-6 py-2">
                <div className="text-left">Primary Address</div>
                <div className="text-right">{datafetch.primary}</div>
              </div>
            </div>
            <button
              onClick={() => _handleReset()}
              className="px-12 py-5 mt-8 text-sm bg-transparent border-solid rounded-full border-bluetrans-defualt hover:border-bluebutton text-bluebutton"
            >
              Lookup Another VerusID
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VerusIdLookup;
