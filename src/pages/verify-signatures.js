import Link from 'next/link';
import SigTabWindow from '../components/sigTab';
import { NextSeo } from 'next-seo';

const VerifySignatures = () => {
  return (
    <>
      <NextSeo
        title="Verify Verus Signatures"
        description="Verify signatures from messages, files or hashes with our easy to use tool."
        additionalMetaTags={[
          {
            name: 'keywords',
            content:
              'Verus, Signatures, Verus Signatures, Verify Hash, Verify Message',
          },
        ]}
      />
      <div className="container max-w-5xl mt-8 md:mb-32">
        <div className="max-w-4xl mb-12 md:mb-32">
          <div>
            <h1 className="p-0 m-0 text-2xl font-normal md:text-4xl ">
              Verify Verus signatures.
            </h1>
            <p className="my-8">
              Verify signatures from messages, files or hashes with our easy to
              use tool.
            </p>
          </div>
          <div className="mb-12">
            <SigTabWindow />
          </div>

          <div>
            <h3 className="text-2xl font-normal">
              Want to sign files, messages or hashes?
            </h3>
            <p className="my-8">
              <Link href="/wallet">
                <span className="underline text-bluebutton">
                  Download Verus Desktop
                </span>
              </Link>
              , register your VerusID and start signing!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifySignatures;
