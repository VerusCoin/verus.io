import { NextSeo } from 'next-seo';

const PrivacyPolicy = () => {
  return (
    <>
      <NextSeo title="Privacy Policy" description="VerusCoin Privacy Policy" />
      <div className="container max-w-5xl p-6 mt-8 mb-12">
        <h1 className="p-0 m-0 text-2xl font-normal md:text-4xl">
          PrivacyPolicy
        </h1>
        <h3 className="mt-16 text-2xl font-normal">General</h3>
        <p className="my-8">
          We don't track you. We mean it. We're big advocates for maximizing
          privacy and freedom.
        </p>
        <p className="my-8">
          This site doesn't set any cookies and uses no analytics or tracking
          tools. Feel free to check the source.
        </p>
        <h3 className="mt-16 text-2xl font-normal">Logs</h3>
        <p className="my-8">
          Request information such as IP addresses and user agents may be stored
          in server log files for up to 14 days on encrypted volumes for
          maintenance and diagnostic purposes, and are not shared with
          third-parties.
        </p>
        <h3 className="mt-16 text-xl font-normal">Forms</h3>
        <p className="my-8">
          Data submitted using forms, such as the Verus ID lookup or signature
          verification are only ever used to complete your request. The URL of
          the request is logged (refer to "Logs"); the response is not logged.
        </p>
        <h3 className="mt-16 text-xl font-normal">Contact</h3>
        <p className="my-8">
          If you have any questions or concerns about this policy please contact
          us on our{' '}
          <a
            href="https://discord.gg/VRKMP2S"
            target="_blank"
            className="underline external"
          >
            official Discord
          </a>{' '}
          server.
        </p>
      </div>
    </>
  );
};

export default PrivacyPolicy;
