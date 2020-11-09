import { NextSeo } from 'next-seo';

const PrivacyPolicy = () => {
  return (
    <>
      <NextSeo title="Privacy Policy" description="VerusCoin Privacy Policy" />
      <div className="container max-w-5xl p-6 mt-8 mb-12">
        <h1 className="p-0 m-0 text-4xl font-normal">PrivacyPolicy</h1>
        <h3 className="mt-16 text-2xl font-normal">General</h3>
        <p className="my-8">
          Check the website sourcecode and your browsers dev tools, we do not
          track, and we mean it.
        </p>
        <p className="my-8">
          Any content created in our logfiles, refer to Logs (below), will never
          be shared with any third party for whatever reason{' '}
        </p>
        <h3 className="mt-16 text-2xl font-normal">Logs</h3>
        <p className="my-8">
          We only kept logfiles for maintenance and debugging purposes, which
          are wiped after 14 days
        </p>
        <h3 className="mt-16 text-xl font-normal">Forms</h3>
        <p className="my-8">
          The URL gots into the logfile, refer to "Logs", when completing your
          one api call, the response does not get logged.
        </p>
      </div>
    </>
  );
};

export default PrivacyPolicy;
