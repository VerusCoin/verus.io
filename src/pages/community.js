import {
  ContributorsList,
  AdditionalContributionList,
} from '../constants/contributors';
import Contributors from '../components/Contributors';
import { NextSeo } from 'next-seo';

const Community = () => {
  return (
    <>
      <NextSeo
        title="Community"
        description="We intend for Verus to become a worldwide, inclusive community effort, which welcomes and rewards those who contribute."
        additionalMetaTags={[
          {
            name: 'keywords',
            content:
              'Verus, Community, Verus Community,community effort, monetarily incentivize, contribute to verus',
          },
        ]}
      />
      <div className="container flex flex-col items-center justify-center mt-8 ">
        <div className="max-w-4xl p-6 mb-12 md:mb-32">
          <div className="mb-16">
            <h1 className="mb-12 text-2xl font-normal md:text-4xl">
              We intend for Verus to become a worldwide, inclusive community
              effort, which welcomes and rewards those who contribute.
            </h1>
            <p className="my-8 ">
              With Verus, we introduce digital tools to enable us all to build a
              better world together. We will monetarily incentivize – with our
              technologies – behavior that strengthens communities and
              institutions. This is the thing that’s missing in the online world
              today: Fiscal incentive for communal behavior built into the very
              fabric of its function.
            </p>
            <p className="my-8">
              We will maintain our development as an open source project and
              contribute back to the broader open source community, as we
              leverage the contributions of others that have made it possible
              for us to begin realizing our vision as a community.
            </p>
          </div>
          <div className="mb-16">
            <h2 className="text-2xl font-normal">
              Want to contribute to Verus in any shape or form? We can't wait to
              have you! Get started here:
            </h2>
            <p className="p-0 mt-6">
              Talk to our community of developers and enthusiasts on{' '}
              <a
                className="external"
                href="https://discord.gg/VRKMP2S"
                target="_blank"
              >
                <span className="underline">Discord</span>
              </a>
            </p>
            <p className="mt-2 ">
              Check out our{' '}
              <a
                className="external"
                href="https://github.com/VerusCoin"
                target="_blank"
              >
                <span className="underline">GitHub</span>
              </a>
            </p>
          </div>
          <div className="mb-16">
            <h2 className="text-2xl">Contributors:</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              {ContributorsList.map((person) => {
                return <Contributors person={person} />;
              })}
            </div>
          </div>
          <div className="mb-16">
            <h3 className="mb-8 text-3xl font-normal ">
              Additional community contributors by Discord name, in no
              particular order:
            </h3>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
              {AdditionalContributionList.map((person, index) => {
                return (
                  <p className="p-0 m-0 text-xl text-bluebutton" key={index}>
                    {person.name}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Community;
