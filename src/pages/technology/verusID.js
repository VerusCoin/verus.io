import Menu from '../../components/Menu';
import { technologyLinks } from '../../constants/technology';
import FooterMenu from '../../components/FooterMenu';

const Verusid = () => {
  return (
    <>
      <div className="container grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-4">
        <div className="">
          <Menu pathList={technologyLinks} href="/technology" />
        </div>
        <div className="max-w-5xl p-6 md:col-span-3">
          <img
            src="/images/verusidiconpic.png"
            loading="lazy"
            width="200"
            height=""
            srcSet="/images/verusidiconpic-p-500.png 500w, /images/verusidiconpic-p-800.png 800w, /images/verusidiconpic-p-1080.png 1080w, /images/verusidiconpic.png 1510w"
            sizes="200px"
            alt="verus id icon picture"
          />
          <p className="mt-8 mb-16 font-light leading-relaxed font-p">
            The first self-sovereign, decentralized identities on the blockchain
            of its kind. A VerusID is a blockchain address that can hold funds
            and stake its $VRSC. Future proof and packed with advanced
            capabilities. In this permissionless system anyone can create a
            VerusID and have complete ownership.{' '}
            <a href="#" className="font-p no-font-p text-bluebutton">
              Register VerusID with Verus Desktop (need link)
            </a>
            .
          </p>

          <button className="flex items-center flex-shrink-0 px-5 py-4 mb-16 space-x-3 bg-transparent border-solid rounded-full cursor-pointer text-p flex-rowborder border-greenbutton hover:border-greenbutton-hover text-greenbutton-hover">
            <img src="/images/playvideo.png" height="24" alt="youtube icon" />
            <p className="m-0">Watch explainer video on YouTube (need link)</p>
          </button>

          <div className="grid grid-cols-1 mt-8 mb-8 md:grid-cols-2 md:gap-6">
            <div className="flex flex-row items-center flex-shrink-0">
              <img
                src="/images/easynameIcon.png"
                alt="Friendly Name Icon"
                width="100"
              />
              <div className="ml-2">
                <h3 className="mb-0 text-base font-semibold font-p">
                  Friendly Name
                </h3>
                <p className="mt-1 text-sm font-light leading-normal font-p">
                  Always remember your crypto address.
                </p>
              </div>
            </div>

            <div className="flex flex-row items-center flex-shrink-0">
              <img src="/images/vaultIcon.png" alt="vault Icon" width="100" />
              <div className="ml-2">
                <h3 className="mb-0 text-base font-semibold font-p">
                  Verus Vault
                </h3>
                <p className="mt-1 text-sm font-light leading-normal font-p">
                  Set (time) locks for theft proof staking and workflow.
                </p>
              </div>
            </div>

            <div className="flex flex-row items-center flex-shrink-0">
              <img src="/images/revokeIcon.png" alt="Revoke Icon" width="100" />
              <div className="ml-2">
                <h3 className="mb-0 text-base font-semibold font-p">
                  Revoking
                </h3>
                <p className="mt-1 text-sm font-light leading-normal font-p">
                  Revoke spending abilities on your identity.
                </p>
              </div>
            </div>

            <div className="flex flex-row items-center flex-shrink-0">
              <img
                src="/images/recoverIcon.png"
                alt="Recover Icon"
                width="100"
              />
              <div className="ml-2">
                <h3 className="mb-0 text-base font-semibold font-p">
                  Recovering
                </h3>
                <p className="mt-1 text-sm font-light leading-normal font-p">
                  Recover funds and UTXOs to an assigned identity.
                </p>
              </div>
            </div>

            <div className="flex flex-row items-center flex-shrink-0">
              <img
                src="/images/signatureIcon.png"
                alt="Signature Icon"
                width="100"
              />
              <div className="ml-2">
                <h3 className="mb-0 text-base font-semibold font-p">
                  Signatures
                </h3>
                <p className="mt-1 text-sm font-light leading-normal font-p">
                  Create unforgeable signatures for files and messages.
                </p>
              </div>
            </div>

            <div className="flex flex-row items-center flex-shrink-0">
              <img
                src="/images/multisigIcon2.png"
                alt="Multisig Icon Icon"
                width="100"
              />
              <div className="ml-2">
                <h3 className="mb-0 text-base font-semibold font-p">
                  Multisig
                </h3>
                <p className="mt-1 text-sm font-light leading-normal font-p">
                  Multiple identities can control one identity.
                </p>
              </div>
            </div>

            <div className="flex flex-row items-center flex-shrink-0">
              <img
                src="/images/privateIcon.png"
                alt="Privacy Icon"
                width="100"
              />
              <div className="ml-2">
                <h3 className="mb-0 text-base font-semibold font-p">Privacy</h3>
                <p className="mt-1 text-sm font-light leading-normal font-p">
                  Attach a private address (Sapling).
                </p>
              </div>
            </div>

            <div className="flex flex-row items-center flex-shrink-0">
              <img
                src="/images/messageIcon.png"
                alt="Message Icon"
                width="100"
              />
              <div className="ml-2">
                <h3 className="mb-0 text-base font-semibold font-p">
                  Messaging
                </h3>
                <p className="mt-1 text-sm font-light leading-normal font-p">
                  Send and receive private messages.
                </p>
              </div>
            </div>
          </div>
          <div className="p-12 mt-16 mb-16 bg-gray-100">
            <h2 className="m-0 text-2xl font-normal ">
              Always remember your crypto address
            </h2>
            <p className="font-light leading-relaxed text-p font-p">
              Each VerusID has an easy to remember name, chosen by you. No more
              hassle with copying long complicated addresses or being scared of
              making a typing error.
            </p>

            <p className="font-light leading-relaxed text-p font-p">
              All characters from all character sets except{' '}
              <span className="px-1 py-1 text-span-code">{`\/:*?"<>|@`}</span>.
              are available to create your own VerusID, with a maximum of 64
              characters. All identities end with the{' '}
              <span className="px-1 py-1 text-span-code">@</span> sign.
            </p>
            <p className="font-light leading-relaxed text-p font-p">
              The Verus Foundation identity is{' '}
              <span className="px-1 py-1 text-span-code">
                Verus Coin Foundation@
              </span>
            </p>
          </div>
          <div className="mb-16">
            <h2 className="mt-16 text-2xl font-normal">Verus Vault</h2>
            <p className="font-light leading-relaxed text-p font-p">
              Verus Vault is a lock mechanism to create virtually theft proof
              security for your funds and workflow. When a VerusID is locked, it
              can't spend, but it can still receive, hold, and stake funds. It
              can also still be used for signing.
            </p>
            <p className="font-light leading-relaxed text-p font-p">
              A VerusID can be locked indefinitely. Or locked and will unlock
              only after: an unlock has been requested, and a predetermined
              amount of time elapses after the request. Or unlocked.
            </p>
            <p className="font-light leading-relaxed text-p font-p">
              Even when an identity is locked, its spending power can still be
              revoked, and thus recovered. More about revoking and recovering in
              the next part.
            </p>
          </div>
          <div className="mb-16">
            <h2 className="mt-16 text-2xl font-normal">
              Revoking and Recovering
            </h2>
            <p className="font-light leading-relaxed text-p font-p">
              Each VerusID can be revoked and recovered by another identity that
              you authorized. The revokeID and recoverID are specified by
              yourself.
            </p>
            <p className="font-light leading-relaxed text-p font-p">
              Verus believes that this functionality is critical for any system
              of self-sovereign identities; users need a path to recover their
              identities if their private keys are lost or stolen, otherwise
              there is just too much risk in a self-sovereign system where an
              identity can become inaccessible with a single mistake.
            </p>
            <p className="font-light leading-relaxed text-p font-p">
              It’s now possible for the first time ever that you can recover
              from private key loss or theft in a completely decentralized,
              self-sovereign way.
            </p>
          </div>
          <div className="mb-16">
            <h2 className="mt-16 text-2xl font-normal">Signatures</h2>
            <p className="font-light leading-relaxed text-p font-p">
              Verus enables free verifiable digital signatures for all through
              the VerusID protocol. Sign and verify data, files and messages
              with your own VerusID.
            </p>
            <p className="font-light leading-relaxed text-p font-p">
              A great example is the Verus Coin Foundation signing the Verus
              Desktop binaries. Users can verify if the software is legit and
              not manipulated by bad actors.
            </p>
          </div>
          <button className="px-12 py-5 bg-transparent border border-solid rounded-full text-p border-bluetrans hover:border-bluebutton text-bluebutton">
            Verify signatures here (Need link)
          </button>
          <div className="mb-16">
            <h2 className="mt-16 text-2xl font-normal">Multisig</h2>
            <p className="text-xl font-light leading-normal font-p">lipsum</p>
          </div>
        </div>
      </div>
      <FooterMenu hrefLocation="/technology" pathList={technologyLinks} />
    </>
  );
};

export default Verusid;
