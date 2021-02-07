import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { NextSeo } from 'next-seo'

const VerusIdLookup = () => {
  const { register, handleSubmit, errors } = useForm()
  const [verusID, setVerusID] = useState({})

  const onSubmit = async (query) => {
    if (query) {
      let url = `/api/verusIDcheck?id=${query.verusID}`
      let result = await fetch(url)
      let data = await result.json()
      if (data.result) {
        setVerusID(data)
      } else {
        setVerusID({ error: data.error.message })
      }
    }
  }

  const _handleReset = () => {
    setVerusID({})
  }

  return (
    <>
      <NextSeo
        title="VerusID Lookup"
        description="Search for identities registered on the Verus blockchain."
        additionalMetaTags={[
          {
            name: 'keywords',
            content: 'Verus, VerusID, VerusID Lookup',
          },
        ]}
      />
      <div className="container max-w-5xl md:mb-32 section-2">
        <div className="grid justify-center grid-cols-2 mt-16 sm:grid-cols-4">
          <div className="justify-center col-span-2 text-center sm:col-start-2">
            <img
              src="/images/icons/VerusID_Search_Icon.svg"
              className="w-56 m-auto"
              alt="VerusID Search Icon"
            />
          </div>
        </div>
        {!verusID.result && (
          <div className="grid grid-cols-2 p-6 text-center sm:grid-cols-4">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col col-span-2 space-y-8 text-center md:space-y-0 md:items-baseline sm:col-start-2 md:flex-row"
            >
              <div className="flex-grow">
                <input
                  name="verusID"
                  className="w-full px-6 py-5 rounded-full text-field text-bluebutton-default focus:outline-none focus:bg-bluetrans-alter "
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
                  className="w-full px-10 py-5 text-white border-none rounded-full bg-bluebutton-default hover:bg-bluebutton-hover focus:outline-none "
                />
                <span></span>
              </div>
            </form>
          </div>
        )}

        {verusID.error && (
          <div className="relative px-4 py-3 text-red-700 bg-red-100 border border-red-400 rounded">
            Error in obtaining VerusID. <pre>{verusID.error}</pre>
          </div>
        )}
        {verusID.result && (
          <div className="grid grid-cols-1 p-6 mb-16 text-xs text-center md:text-base md:grid-cols-3 lg:grid-cols-5 sm:text-base">
            <div className="text-center break-all md:col-span-3 lg:col-start-2">
              <h3 className="py-6 font-normal rounded-full bg-bluetrans-alter font-3xl">
                {verusID.result.identity.name}
              </h3>
              <div className="space-y-2 text-sm font-p">
                <div className="flex flex-wrap justify-between p-6 py-4 mt-8 mb-8 bg-gray-105">
                  <div className="text-left">Identity Address</div>
                  <div className="text-right sm:text-base">
                    {verusID.result.identity.identityaddress}
                  </div>
                </div>
                <div className="flex flex-wrap justify-between p-6 py-4 border-0 border-t-2 border-b-2 border-solid border-gray-305">
                  <div className="text-left">Revocation Authority</div>
                  {verusID.result.identity.revocationauthority ===
                  verusID.result.identity.identityaddress ? (
                    <div className="text-right">Self</div>
                  ) : (
                    <div className="text-right">
                      {verusID.result.identity.revocationauthority}
                    </div>
                  )}
                </div>
                <div className="flex flex-wrap justify-between p-6 py-2">
                  <div className="text-left">Recovery Authority</div>
                  {verusID.result.identity.recoveryauthority ===
                  verusID.result.identity.identityaddress ? (
                    <div className="text-right">Self</div>
                  ) : (
                    <div className="text-right">
                      {verusID.result.identity.recoveryauthority}
                    </div>
                  )}
                </div>
                <div className="flex flex-wrap justify-between p-6 py-4 border-0 border-t-2 border-b-2 border-solid border-gray-305">
                  <div className="text-left">Private Address</div>
                  <div className="text-right ">
                    {verusID.result.identity.privateaddress}
                  </div>
                </div>
                <div className="flex flex-wrap justify-between p-6 py-2">
                  <div className="text-left">Primary Address(es)</div>
                  {verusID.result.identity.primaryaddresses.map((address) => {
                    return (
                      <div key={address} className="text-right">
                        {address}
                      </div>
                    )
                  })}
                </div>
              </div>
              <button
                onClick={() => _handleReset()}
                className="px-12 py-5 mt-8 text-sm bg-transparent border-solid rounded-full border-bluetrans-default hover:border-bluebutton-default text-bluebutton-default"
              >
                Lookup Another VerusID
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default VerusIdLookup
