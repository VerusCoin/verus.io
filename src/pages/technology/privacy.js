import Menu from '../../components/Menu';
import { technologyLinks } from '../../constants/technology';
import FooterMenu from '../../components/FooterMenu';
import { NextSeo } from 'next-seo';

const Privacy = () => {
  return (
    <>
      <NextSeo
        title="Privacy"
        description="We believe it is possible to: 1) respect your privacy, 2)
        give you control over your data, and 3) enable you to speak your
        mind with the anonymous authority of an authorized voter or member
        of a community, in a way that can directly be heard and affect
        actual change."
        additionalMetaTags={[
          {
            name: 'keywords',
            content:
              'verus, pbaas, public blockchains as a service, proof of power, proof-of-power, cryptocurrency, Open Source, Privacy, VerusID, ERC-20, decentralized finance, verus signatures',
          },
        ]}
      />
      <div className="container grid max-w-5xl grid-cols-1 gap-6 mt-8 mb-12 md:grid-cols-4">
        <div>
          <Menu pathList={technologyLinks} href="/technology" />
        </div>
        <div className="max-w-5xl p-6 md:col-span-3">
          <h1 className="p-0 m-0 text-2xl font-normal md:text-4xl">Privacy</h1>
          <p className="my-8">
            Information vies for our attention in today’s digital world, trying
            to convince us of what product to use or which politician to
            believe. We are watched and measured as we react to that
            information, in order to convince us what to buy or to believe. This
            is an active process that exploits our lack of online privacy –
            combined with weaknesses in human psychology – in order to make
            profit; extracting value from, even affecting our behavior, learning
            about and influencing each of us individually to open our wallets or
            add our voices to another’s agenda.
          </p>
          <p className="my-8">
            No single person can digest and fully understand – let alone verify
            – a fraction of the information thrust at us in daily life. We are
            told to give up on the notion of privacy and to trust networks of
            companies with our most private data, our identity, our credit
            histories, our location, our habits. We are also told that our
            voices are lost in the digital sea of information. Yet how is this
            the same sea through which we are laser-targeted based on
            correlating our behaviors to learn so much about us, individually?
            What if these technologies could be turned towards the benefit of
            society, first – and then allowed to support businesses, in that
            context?
          </p>
          <p className="my-8">
            We believe it is possible to support businesses and governments
            requirements with digital systems that: 1) respect your privacy, 2)
            give you control over your data, and 3) enable you to speak your
            mind with the anonymous authority of an authorized voter or member
            of a community, in a way that can directly be heard and affect
            actual change.
          </p>
          <p className="my-8">
            With Verus, anyone can leverage zero-knowledge succinct
            non-interactive arguments of knowledge – or zk-SNARKs – the most
            reliable and tested iteration of proven, zero-knowledge privacy
            technology available today.
          </p>
        </div>
      </div>
      <FooterMenu hrefLocation="/technology" pathList={technologyLinks} />
    </>
  );
};

export default Privacy;
