import { useState } from 'react';
import {
  useForm,
  Controller,
  useFormContext,
  FormProvider,
} from 'react-hook-form';
import { InputField, TextAreaField, FileInputField } from './FormFields';

const VerifyResult = ({
  sigResult,
  verusSignature,
  children,
  resetCall,
  title,
  fileName,
}) => {
  return (
    <div className="flex flex-col flex-wrap p-4 mt-6 mb-16 break-all rounded bg-gray-105">
      <p className="text-xl">
        Verification Results:{' '}
        {sigResult !== undefined ? (
          sigResult.valid === 'true' ? (
            <span className="text-green-700">Is Valid</span>
          ) : !sigResult.error ? (
            <span className="text-red-700">
              Is not valid or incorrect information
            </span>
          ) : (
            <span className="text-red-700">{sigResult.error_text}</span>
          )
        ) : (
          'Processing...'
        )}
      </p>
      {fileName && (
        <>
          <p className="w-full mb-2 font-semibold">File:</p>
          <p className="w-full m-0 break-all">{fileName}</p>
        </>
      )}
      <p className="w-full mb-2 font-semibold">{title}</p>
      <p className="w-full m-0 break-all">{children}</p>
      <p className="w-full mb-2 font-semibold">VerusID / i-address:</p>
      <p className="w-full m-0 break-all">{verusSignature.Identity}</p>
      <p className="w-full mb-2 font-semibold">Signature:</p>
      <p className="w-full m-0 break-all">{verusSignature.Signature}</p>
      <button
        onClick={resetCall}
        className="px-12 py-5 mt-8 text-sm bg-white border border-solid rounded-full border-bluetrans hover:border-bluebutton text-bluebutton"
      >
        Verify Another Signature
      </button>
    </div>
  );
};

const MessageContent = () => {
  const methods = useForm({ mode: 'onBlur' });
  const [verusSignature, setVerusSignature] = useState();
  const [sigResult, setSigResult] = useState();

  const onSubmit = async (values) => {
    if (values) {
      let query = {
        Message: values.Message,
        Identity: values.MessageIdentity,
        Signature: values.MessageSignature,
      };
      setVerusSignature(query);

      let url = '/api/verusSignatureMessage';
      let result = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(query),
      });
      let data = await result.json();
      if (data) {
        setSigResult(data);
      } else {
        setSigResult({
          error: -5,
          error_text: 'Currently experiencing network issues. Try again later.',
        });
      }
    }
  };

  const _handleReset = () => {
    setVerusSignature(null);
    setSigResult();
    methods.reset();
  };
  return (
    <>
      {!verusSignature && (
        <div className="mt-6 mb-16m">
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(onSubmit)}
              className="flex flex-col space-y-8"
            >
              <TextAreaField
                name="Message"
                label="Message / text"
                validate={{ required: 'message or text is required' }}
              />
              <InputField
                name="MessageIdentity"
                label="VerusID / i-address"
                validate={{ required: 'VerusID or i-address is required.' }}
              />
              <InputField
                name="MessageSignature"
                label="Signature"
                validate={{ required: 'Verus Signature is required.' }}
              />

              <button
                className="w-full px-12 py-5 text-sm bg-transparent border border-solid rounded-full border-bluetrans hover:border-bluebutton hover:bg-bluebutton hover:text-white text-bluebutton"
                type="submit"
              >
                Submit
              </button>
            </form>
          </FormProvider>
        </div>
      )}
      {verusSignature && (
        <VerifyResult
          sigResult={sigResult}
          verusSignature={verusSignature}
          resetCall={_handleReset}
          title="Message/Text:"
        >
          {verusSignature.Message}
        </VerifyResult>
      )}
    </>
  );
};

const FileContent = () => {
  const methods = useForm({ mode: 'onBlur' });
  const [verusSignature, setVerusSignature] = useState();
  const [sigResult, setSigResult] = useState();

  const onSubmit = async (values) => {
    if (values) {
      let query = {
        Identity: values.Identity,
        Signature: values.Signature,
        FileName: values.FileList[0].path,
        Hash: values.FileList[0].hash,
      };
      setVerusSignature(query);

      let url = '/api/verusSignatureHash';

      let result = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(query),
      });
      let data = await result.json();
      if (data) {
        setSigResult(data);
      } else {
        setSigResult({
          error: -5,
          error_text: 'Currently experiencing network issues. Try again later.',
        });
      }
    }
  };

  const _handleReset = () => {
    setVerusSignature(null);
    setSigResult();
    methods.reset();
  };
  return (
    <>
      {!verusSignature && (
        <div className="mt-6 mb-16">
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(onSubmit)}
              className="flex flex-col space-y-8"
            >
              <div className="mb-4">
                <FileInputField
                  name="FileList"
                  validate={{ required: 'File is required' }}
                />
              </div>
              <InputField
                name="Identity"
                label="VerusID / i-address"
                validate={{ required: 'VerusID or i-address is required.' }}
              />
              <InputField
                name="Signature"
                label="Signature"
                validate={{ required: 'Verus Signature is required.' }}
              />

              <button
                className="w-full px-12 py-5 text-sm bg-transparent border border-solid rounded-full border-bluetrans hover:border-bluebutton hover:bg-bluebutton hover:text-white text-bluebutton"
                type="submit"
              >
                Submit
              </button>
            </form>
          </FormProvider>
        </div>
      )}
      {verusSignature && (
        <VerifyResult
          sigResult={sigResult}
          verusSignature={verusSignature}
          resetCall={_handleReset}
          title="Hash:"
          fileName={verusSignature.FileName}
        >
          {verusSignature.Hash}
        </VerifyResult>
      )}
    </>
  );
};

const HashContent = () => {
  const methods = useForm({ mode: 'onBlur' });

  const [verusSignature, setVerusSignature] = useState(null);
  const [sigResult, setSigResult] = useState();

  const onSubmit = async (values) => {
    if (values) {
      let query = {
        Hash: values.Hash,
        Identity: values.HashIdentity,
        Signature: values.HashSignature,
      };
      setVerusSignature(query);

      let url = '/api/verusSignatureHash';
      let result = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(query),
      });
      let data = await result.json();

      if (data) {
        setSigResult(data);
      } else {
        setSigResult({
          error: -5,
          error_text: 'Currently experiencing network issues. Try again later.',
        });
      }
    }
  };

  const _handleReset = () => {
    setVerusSignature(null);
    setSigResult();
    methods.reset();
  };
  return (
    <>
      {!verusSignature && (
        <div className="mt-6 mb-16">
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(onSubmit)}
              className="flex flex-col space-y-8"
            >
              <InputField
                name="Hash"
                label="Hash"
                validate={{ required: 'Hash is required.' }}
              />

              <InputField
                name="HashIdentity"
                label="VerusID / i-address"
                validate={{ required: 'VerusID or i-address is required.' }}
              />
              <InputField
                name="HashSignature"
                label="Signature"
                validate={{ required: 'Verus Signature is required.' }}
              />

              <button
                className="w-full px-12 py-5 text-sm bg-transparent border border-solid rounded-full border-bluetrans hover:border-bluebutton hover:bg-bluebutton hover:text-white text-bluebutton"
                type="submit"
              >
                Submit
              </button>
            </form>
          </FormProvider>
        </div>
      )}
      {verusSignature && (
        <VerifyResult
          sigResult={sigResult}
          verusSignature={verusSignature}
          resetCall={_handleReset}
          title="Hash:"
        >
          {verusSignature.Hash}
        </VerifyResult>
      )}
    </>
  );
};

const SigTabWindow = () => {
  const [viewTab, setViewTab] = useState(0);
  return (
    <>
      <div className="flex-col justify-center hidden space-x-4 md:flex sm:flex-row">
        <a
          onClick={() => setViewTab(0)}
          className={
            'px-5 text-center text-lg p-1 border-2 border-solid border-t-0 border-r-0 border-l-0 ' +
            (viewTab === 0
              ? 'text-tablink-active border-tablink-active'
              : 'text-tablink border-tablink')
          }
        >
          Message/Text
        </a>
        <a
          onClick={() => setViewTab(1)}
          className={
            'px-5 text-center text-lg p-1 flex-no-wrap border-2 border-solid border-t-0 border-r-0 border-l-0  ' +
            (viewTab === 1
              ? 'text-tablink-active  border-tablink-active'
              : 'text-tablink border-tablink')
          }
        >
          File
        </a>
        <a
          onClick={() => setViewTab(2)}
          className={
            'px-5 text-center cursor-pointer text-lg p-1 border-2 border-solid border-t-0 border-r-0 border-l-0 ' +
            (viewTab === 2
              ? 'text-tablink-active  border-tablink-active'
              : 'text-tablink border-tablink')
          }
        >
          Hash
        </a>
      </div>
      <div className="hidden md:block tab-content ">
        <div>
          {viewTab === 0 && <MessageContent />}
          {viewTab === 1 && <FileContent />}
          {viewTab === 2 && <HashContent />}
        </div>
      </div>
      <div className="md:hidden tab-content">
        <div className="w-full my-2 overflow-hidden tab b">
          <input
            className="absolute opacity-0"
            id="tab-single-one"
            type="radio"
            name="tabs2"
          />
          <label
            className="block p-5 leading-normal border-2 border-t-0 border-b-0 border-r-0 border-solid cursor-pointer border-tablink"
            htmlFor="tab-single-one"
          >
            Message/Text
          </label>
          <div className="overflow-hidden leading-normal tab-content-accordion">
            <MessageContent />
          </div>
        </div>
        <div className="w-full my-2 overflow-hidden tab b">
          <input
            className="absolute opacity-0"
            id="tab-single-two"
            type="radio"
            name="tabs2"
          />
          <label
            className="block p-5 leading-normal border-2 border-t-0 border-b-0 border-r-0 border-solid cursor-pointer border-tablink"
            htmlFor="tab-single-two"
          >
            File
          </label>
          <div className="overflow-hidden leading-normal tab-content-accordion">
            <FileContent />
          </div>
        </div>
        <div className="w-full my-2 overflow-hidden tab b">
          <input
            className="absolute opacity-0"
            id="tab-single-three"
            type="radio"
            name="tabs2"
          />
          <label
            className="block p-5 leading-normal border-2 border-t-0 border-b-0 border-r-0 border-solid cursor-pointer border-tablink"
            htmlFor="tab-single-three"
          >
            Hash
          </label>
          <div className="overflow-hidden leading-normal tab-content-accordion">
            <HashContent />
          </div>
        </div>
      </div>
    </>
  );
};

export default SigTabWindow;
