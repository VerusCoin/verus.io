import { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { InputField, TextAreaField, FileInputField } from './FormFields'

import {
  Tab,
  TabItems,
  TabToggle,
  TabPanel,
  Accordion,
  AccordionContent,
  AccordionCollapse,
  AccordionToggle,
} from '@src/components'

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
        className="px-12 py-5 mt-8 text-sm bg-white border border-solid rounded-full border-bluetrans-default hover:border-bluebutton-default text-bluebutton"
      >
        Verify Another Signature
      </button>
    </div>
  )
}

const MessageContent = () => {
  const methods = useForm({ mode: 'onBlur' })
  const [verusSignature, setVerusSignature] = useState()
  const [sigResult, setSigResult] = useState()

  const onSubmit = async (values) => {
    if (values) {
      let query = {
        Message: values.Message,
        Identity: values.MessageIdentity,
        Signature: values.MessageSignature,
      }
      setVerusSignature(query)

      let url = '/api/verusSignatureMessage'
      let result = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(query),
      })
      let data = await result.json()
      if (data) {
        setSigResult(data)
      } else {
        setSigResult({
          error: -5,
          error_text: 'Currently experiencing network issues. Try again later.',
        })
      }
    }
  }

  const _handleReset = () => {
    setVerusSignature(null)
    setSigResult()
    methods.reset()
  }
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
                className="w-full px-12 py-5 text-sm bg-transparent border border-solid rounded-full border-bluetrans-default hover:border-bluebutton-default hover:bg-bluebutton-default hover:text-white text-bluebutton"
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
  )
}

const FileContent = () => {
  const methods = useForm({ mode: 'onBlur' })
  const [verusSignature, setVerusSignature] = useState()
  const [sigResult, setSigResult] = useState()

  const onSubmit = async (values) => {
    if (values) {
      let query = {
        Identity: values.Identity,
        Signature: values.Signature,
        FileName: values.FileList[0].path,
        Hash: values.FileList[0].hash,
      }
      setVerusSignature(query)

      let url = '/api/verusSignatureHash'

      let result = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(query),
      })
      let data = await result.json()
      if (data) {
        setSigResult(data)
      } else {
        setSigResult({
          error: -5,
          error_text: 'Currently experiencing network issues. Try again later.',
        })
      }
    }
  }

  const _handleReset = () => {
    setVerusSignature(null)
    setSigResult()
    methods.reset()
  }
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
                className="w-full px-12 py-5 text-sm bg-transparent border border-solid rounded-full border-bluetrans-default hover:border-bluebutton-default hover:bg-bluebutton-default hover:text-white text-bluebutton"
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
  )
}

const HashContent = () => {
  const methods = useForm({ mode: 'onBlur' })

  const [verusSignature, setVerusSignature] = useState(null)
  const [sigResult, setSigResult] = useState()

  const onSubmit = async (values) => {
    if (values) {
      let query = {
        Hash: values.Hash,
        Identity: values.HashIdentity,
        Signature: values.HashSignature,
      }
      setVerusSignature(query)

      let url = '/api/verusSignatureHash'
      let result = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(query),
      })
      let data = await result.json()

      if (data) {
        setSigResult(data)
      } else {
        setSigResult({
          error: -5,
          error_text: 'Currently experiencing network issues. Try again later.',
        })
      }
    }
  }

  const _handleReset = () => {
    setVerusSignature(null)
    setSigResult()
    methods.reset()
  }
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
                className="w-full px-12 py-5 text-sm bg-transparent border border-solid rounded-full border-bluetrans-default hover:border-bluebutton-default hover:bg-bluebutton-default hover:text-white text-bluebutton"
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
  )
}

const SigTab = () => {
  const [activeEventKey, setActiveEventKey] = useState(0)
  const [viewTab, setViewTab] = useState(0)
  return (
    <>
      <Tab activeEventKey={activeEventKey} onToggle={setActiveEventKey}>
        <TabItems classnames="space-x-4">
          <TabToggle eventKey={0}>Message/Text</TabToggle>
          <TabToggle eventKey={1}>File</TabToggle>
          <TabToggle eventKey={2}>Hash</TabToggle>
        </TabItems>
        <TabPanel eventKey={0}>
          <MessageContent />
        </TabPanel>
        <TabPanel eventKey={1}>
          <FileContent />
        </TabPanel>
        <TabPanel eventKey={2}>
          <HashContent />
        </TabPanel>
      </Tab>
      <Accordion>
        <AccordionContent>
          <AccordionToggle eventKey={0}>Message/Text</AccordionToggle>
          <AccordionCollapse eventKey={0}>
            <MessageContent />
          </AccordionCollapse>
        </AccordionContent>
        <AccordionContent>
          <AccordionToggle eventKey={1}>File</AccordionToggle>
          <AccordionCollapse eventKey={1}>
            <FileContent />
          </AccordionCollapse>
        </AccordionContent>
        <AccordionContent>
          <AccordionToggle eventKey={2}>Hash</AccordionToggle>
          <AccordionCollapse eventKey={2}>
            <HashContent />
          </AccordionCollapse>
        </AccordionContent>
      </Accordion>
    </>
  )
}

export default SigTab
