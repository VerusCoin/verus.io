import { useState } from 'react';
import { NextSeo } from 'next-seo';

const CustomAccordion = (props) => {
  const {
    id,
    tabName,
    label,
    children,
    radioTab,
    handleTabChange,
    handleTabCheck,
  } = props;
  return (
    <div className="w-full my-2 overflow-hidden tab b">
      <input
        className="absolute opacity-0"
        id={`${tabName}-${id}`}
        type="radio"
        name={tabName}
        value={`${tabName}-${id}`}
        checked={radioTab === `${tabName}-${id}`}
        onChange={() => {
          handleTabChange(`${tabName}-${id}`);
        }}
      />
      <label
        className="block py-4 text-xl leading-relaxed border-2 border-t-0 border-l-0 border-r-0 border-gray-200 border-solid cursor-pointer"
        htmlFor={`${tabName}-${id}`}
        onClick={() => {
          handleTabCheck(`${tabName}-${id}`);
        }}
      >
        {label}
      </label>
      <div className="overflow-hidden leading-relaxed tab-content-accordion">
        {children}
      </div>
    </div>
  );
};

const FAQ = () => {
  const [radioTab, setRadioTab] = useState(null);

  const handleTabCheck = (tab) => {
    let element = document.getElementById(tab);

    let isOpen = element.checked;
    if (isOpen) {
      element.checked = !isOpen;
    }
    setRadioTab(tab);
  };
  const handleTabChange = (tab) => {
    setRadioTab(null);
  };
  return (
    <>
      <NextSeo
        title="FAQ"
        description="A complied list of frequenty asked questions."
        additionalMetaTags={[
          {
            name: 'keywords',
            content:
              'VRSC, Verus, Exchanges, Verus Mining, Verus Staking, Earn Verus, Earn VRSC, get VRSC, VRSC Exchanges',
          },
        ]}
      />
      <div className="container flex flex-col items-center justify-center mt-8 ">
        <div className="w-full max-w-4xl mb-12 md:mb-32">
          <h1 className="p-0 m-0 text-2xl font-normal md:text-4xl md:leading-relaxed">
            Frequently Asked Questions
          </h1>
          <div className="tab-content">
            {/* 1 */}
            <CustomAccordion
              id="1"
              tabName="faqTab"
              label="Was there an ICO for Verus?"
              radioTab={radioTab}
              handleTabChange={handleTabChange}
              handleTabCheck={handleTabCheck}
            >
              <p className="px-6 pt-8 pb-4 leading-relaxed max-w-3xl">No. Verus is fairly launced, with equal opportunity for everyone to earn coins through mining and staking.
              Also, Verus had no premine, and has no developer fees.</p>
            </CustomAccordion>
            {/* 2 */}
            <CustomAccordion
              id="2"
              tabName="faqTab"
              label="Where can I find a roadmap?"
              radioTab={radioTab}
              handleTabChange={handleTabChange}
              handleTabCheck={handleTabCheck}
            >
              <p className="px-6 pt-8 pb-4 leading-relaxed max-w-3xl">
                Verus has no roadmaps or deadlines. We are a community project
                without central entity or commercial interests.
              </p>
            </CustomAccordion>
            {/* 3 */}
            <CustomAccordion
              id="3"
              tabName="faqTab"
              label="Can I mine Verus?"
              radioTab={radioTab}
              handleTabChange={handleTabChange}
              handleTabCheck={handleTabCheck}
            >
              <p className="px-6 pt-8 pb-4 leading-relaxed max-w-3xl">Yes. Anyone can start mining Verus with a CPU and GPU. <a
                  className="underline text-bluebutton"
                  href="/mining-and-staking/"
                >
                  Learn more
                </a> </p>
            </CustomAccordion>
            {/* 4 */}
            <CustomAccordion
              id="4"
              tabName="faqTab"
              label="Can I stake Verus?"
              radioTab={radioTab}
              handleTabChange={handleTabChange}
              handleTabCheck={handleTabCheck}
            >
              <p className="px-6 pt-8 pb-4 leading-relaxed max-w-3xl">Yes. Anyone can start staking Verus without any minimum requirements. <a
                  className="underline text-bluebutton"
                  href="/mining-and-staking/"
                >
                  Learn more
                </a> </p>
            </CustomAccordion>
            {/* 5 */}
            <CustomAccordion
              id="5"
              tabName="faqTab"
              label="What is the maximum supply of Verus?"
              radioTab={radioTab}
              handleTabChange={handleTabChange}
              handleTabCheck={handleTabCheck}
            >
              <p className="px-6 pt-8 pb-4">83,540,184 VRSC</p>
            </CustomAccordion>
            {/* 6 */}
            <CustomAccordion
              id="6"
              tabName="faqTab"
              label="Why is Verus different from other blockchain protocols?"
              radioTab={radioTab}
              handleTabChange={handleTabChange}
              handleTabCheck={handleTabCheck}
            >
              <p className="px-6 pt-8 pb-4 max-w-3xl leading-relaxed">
                Verus has a number of capabilities that make it unique across
                all other blockchain protocols.
              </p>
              <ol className="px-6 space-y-4 text-gray-700 list-inside list-alpha font-p leading-relaxed max-w-3xl">
                <li>
                  Verus is the first and only blockchain network to offer 100%
                  self-sovereign, friendly name, revocable, recoverable,
                  transferable, and multisig identities. IDs can be used to
                  receive funds, prove your identity cryptographically,
                  digitally sign messages, content, and files of any type, and
                  in case you lose your identity keys, you can actually revoke
                  and recover your identity without losing funds. Identities are
                  also transferable to others along with all of their funds, so
                  they can be used by businesses and organizations as well.
                </li>
                <li>
                  Verus supports zero knowledge privacy, with a technology known
                  as zkSNARKs, first made popular by Zcash, and greatly
                  simplified for user by supporting private transactions and
                  private, encrypted messaging, using friendly name identities.
                  Verus is the only protocol that offers zero knowledge privacy
                  with friendly, easy to use names.
                </li>
                <li>
                  Verus combines mining AND staking in its consensus algorithms
                  and can still be mined by PCs almost as well as an FPGA, due
                  to the unique VerusHash, quantum resistant hash algorithm.
                  This is all combined in a 51% hash attack resistant protocol
                  called Proof of Power. To mount a 51% attack on Verus, an
                  attacker must secure a total of 51% of all validation power,
                  including mining hash and staking power combined.
                </li>
                <li>
                  The upcoming Verus release, which has been running smoothly on
                  the Verus testnet for months, includes an advanced,
                  network-wide DeFi protocol and the ability to "timelock" an
                  ID, enabling its owner to use funds for staking, while
                  preventing virtually all forms of funds or identity theft.
                </li>
              </ol>
            </CustomAccordion>
            {/* 7 */}
            <CustomAccordion
              id="7"
              tabName="faqTab"
              label="Why do I want a VerusID?"
              radioTab={radioTab}
              handleTabChange={handleTabChange}
              handleTabCheck={handleTabCheck}
            >
              <p className="px-6 pt-8 pb-4 leading-relaxed max-w-3xl">
                VerusIDs are owned permanently and can be transferred, just like
                cryptocurrency. There are no annual fees, and the fees required
                to purchase a VerusID go to miners, stakers, and referrers only.
                A VerusID can immediately be used as a friendly name crypto
                address that is controlled by one or more crypto addresses,
                meaning it can even be multisig, and they offer the unique
                ability of being revocable and recoverable. That means that if
                you lose the keys to the controlling addresses of a VerusID, you
                do not have to lose the ID or the funds under its control.
                VerusIDs even provide a permanently owned digital signature,
                which can be used to securely sign messages, files, and any
                other content, and is managed and changed as needed by the
                owner, no one else. VerusIDs can be created using any character
                set worldwide and can be easily validated worldwide as well.
                Finally, VerusIDs form the foundation for DeFi currency
                definition, application data types in the soon to be released
                Verus Data Exchange Format (VDXF), and content for user profiles
                and the decentralized web.
              </p>
            </CustomAccordion>
            {/* 8 */}
            <CustomAccordion
              id="8"
              tabName="faqTab"
              label="Is Verus a privacy coin?"
              radioTab={radioTab}
              handleTabChange={handleTabChange}
              handleTabCheck={handleTabCheck}
            >
              <p className="px-6 pt-8 pb-4 leading-relaxed max-w-3xl">
                Verus supports fully private, zero knowledge transactions
                that use zk- SNARK technologies.
              </p>
            </CustomAccordion>
            {/* 9 */}
            <CustomAccordion
              id="9"
              tabName="faqTab"
              label="How does the Verus DeFi work?"
              radioTab={radioTab}
              handleTabChange={handleTabChange}
              handleTabCheck={handleTabCheck}
            >
              <p className="px-6 pt-8 pb-4 leading-relaxed max-w-3xl">text</p>
            </CustomAccordion>
            {/* 10 */}
            <CustomAccordion
              id="10"
              tabName="faqTab"
              label=" What is impermanent loss?"
              radioTab={radioTab}
              handleTabChange={handleTabChange}
              handleTabCheck={handleTabCheck}
            >
              <p className="px-6 pt-8 pb-4 leading-relaxed max-w-3xl">Impermanent loss is nothing more than the difference between constant-mix vs buy-and-hold strategy.
              An example: when you hold a currency that is 50/50% backed by VRSC and BTC, you might suffer an opportunity loss when compared
              to holding VRSC and BTC directly. The upside is you will have less risk. </p>
            </CustomAccordion>
            {/* 11 */}
            <CustomAccordion
              id="11"
              tabName="faqTab"
              label="What languages can people code in when writing applications for
              Verus - can people port whole projects over from ETH, and other
              protocols - how does that actually work?"
              radioTab={radioTab}
              handleTabChange={handleTabChange}
              handleTabCheck={handleTabCheck}
            >
              <p className="px-6 pt-8 pb-4 leading-relaxed max-w-3xl">
                The Verus community believes that its time for a new paradigm in
                decentralized applications, one focused on data and
                interoperability, much like the open Web, not any specific
                language or execution environment, such as the Ethereum VM.
                Right now, arguably the most popular application to use
                blockchain and cryptocurrency today, Brave, is written in C,
                C++, and Javascript, with Ethereum providing basic
                cryptocurrency functionality only that is used by the rest of
                the system. Verus DeFi and the Ethereum bridge, which will soon
                be on mainnet, provides core cryptocurrency functionality
                without any programming at all, identity, and DeFi capabilities
                that can be used across many decentralized or centralized
                applications written in just about any language. Once the Verus
                / Ethereum bridge, which we are working towards releasing within
                the next month, is available on mainnet, even applications that
                want to leverage some capability in the Solidity VM, which we
                believe will be largely unnecessary, can do so if they choose.
                In lieu of a specific programming language, the Verus Project
                offers core identity, cryptographic, and currency related
                capabilities and the VDXF, or Verus Data Exchange Format, a
                model for all applications to define data structures and data
                interchange rules, which can be used either by any language
                either through on-chain transactions or offchain to provide data
                interoperability between decentralized and centralized
                applications. Any language will be possible to integrate with
                the Verus blockchain and other applications, using the VDXF.
                Specifications and applications that leverage the VDXF are in
                development in the community and will be broadly available when
                Verus DeFi and the Ethereum bridge are released to mainnet.
              </p>
            </CustomAccordion>
            {/* 12 */}
            <CustomAccordion
              id="12"
              tabName="faqTab"
              label="How will the feature to create corresponding ERC20 tokens work? If
              there is already an ERC20 token with that name, how will this be
              resolved between the Verus ID & ETH contract? Can existing ERC20
              tokens reserve their code as a Verus ID & link to a token/currency with
              the corresponding name on Verus?"
              radioTab={radioTab}
              handleTabChange={handleTabChange}
              handleTabCheck={handleTabCheck}
            >
              <p className="px-6 pt-8 pb-4 leading-relaxed max-w-3xl">text</p>
            </CustomAccordion>
            {/* 13 */}
            <CustomAccordion
              id="13"
              tabName="faqTab"
              label="Where can I learn more about developing on Verus?"
              radioTab={radioTab}
              handleTabChange={handleTabChange}
              handleTabCheck={handleTabCheck}
            >
              <p className="px-6 pt-8 pb-4 leading-relaxed max-w-3xl">text</p>
            </CustomAccordion>
            {/* 14 */}
            <CustomAccordion
              id="14"
              tabName="faqTab"
              label="What is the plan for global
              adoption?"
              radioTab={radioTab}
              handleTabChange={handleTabChange}
              handleTabCheck={handleTabCheck}
            >
              <p className="px-6 pt-8 pb-4 leading-relaxed max-w-3xl">text</p>
            </CustomAccordion>
            {/* 15 */}
            <CustomAccordion
              id="15"
              tabName="faqTab"
              label="When is Verus finished?"
              radioTab={radioTab}
              handleTabChange={handleTabChange}
              handleTabCheck={handleTabCheck}
            >
              <p className="px-6 pt-8 pb-4">text</p>
            </CustomAccordion>
            {/* 16 */}
            <CustomAccordion
              id="16"
              tabName="faqTab"
              label="What motivated the Verus focus on equity, truth & privacy?"
              radioTab={radioTab}
              handleTabChange={handleTabChange}
              handleTabCheck={handleTabCheck}
            >
              <p className="px-6 pt-8 pb-4 leading-relaxed max-w-3xl">
                When the Verus Founders, a number of people, including myself,
                who felt that crypto projects were becoming too focused on
                getting rich quickly and had lost the vision of improving
                society through decentralized technologies, connected with
                Komodo and its lead developer, jl777, we decided to collaborate
                from various parts of the world to leverage Bitcoin, Zcash, and
                KMD open source technologies as a foundation to create the next
                generation in blockchain evolution. The idea was to create a
                fully decentralized project with no centralized controlling
                entity that would succeed based on an organically growing
                community of contributors, where each contributor might benefit
                more as a small part of a larger worldwide phenomenon than a
                centralized owner of something as small as a single business or
                organization. The result was the Verus Project, a fully open,
                decentralized community effort with no ICO, no premine, no
                development fee, and no rent-seeking at all, funded by
                donations, offering a platform for people, businesses,
                organizations, and governments, open to all as a core platform
                to improve and build upon together, with a philosophy where each
                community member or organization can be part of a much larger,
                worldwide, rent free, decentralized system, much more like the
                Internet of blockchain than a corporation on its own, improved
                and built through cooperation and collaboration, not centralized
                control.
              </p>
            </CustomAccordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;

// template for FAQ
{
  /* 
<CustomAccordion
  id="#"
  tabName="faqTab"
  label="question?"
  radioTab={radioTab}
  handleTabChange={handleTabChange}
  handleTabCheck={handleTabCheck}
>
  <p className="px-6 pt-8 pb-4">
    text
  </p>
</CustomAccordion> 
*/
}
