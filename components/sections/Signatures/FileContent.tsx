import { useState } from 'react'
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'
import useTranslation from 'next-translate/useTranslation'
import { Form, Input, FileField } from '@/components/elements/FormFields'
import { StyledFormArea } from './FormArea.style'
import VerifyResult from './VerifyResult'

interface IFileContent {
  verusId: string
  signature: string
  fileName: any
}

const FileContent = () => {
  const { t } = useTranslation('signatures')
  const methods = useForm<IFileContent>({ mode: 'onBlur' })
  const [verusSignature, setVerusSignature] = useState<any>()
  const [sigResult, setSigResult] = useState<any>()

  const onSubmit: SubmitHandler<IFileContent> = async (values) => {
    if (values) {
      const query = {
        Identity: values?.verusId,
        Signature: values?.signature,
        FileName: values?.fileName[0].path,
        Hash: values?.fileName[0].hash,
      }
      setVerusSignature(query)

      const url = '/api/verusSignatureHash'

      const result = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(query),
      })
      const data = await result.json()
      if (data) {
        setSigResult(data)
      } else {
        setSigResult({
          error: -5,
          error_text: t('tab.error'),
        })
      }
    }
  }

  const _handleReset = () => {
    setVerusSignature(null)
    setSigResult(null)
    methods.reset()
  }
  return (
    <>
      {!verusSignature && (
        <StyledFormArea>
          <FormProvider {...methods}>
            <Form SubmitHandler={methods.handleSubmit(onSubmit)}>
              <FileField
                name="fileName"
                input={t('tab.file.input')}
                processing={t('tab.file.processing')}
                validate={{ required: t('tab.file.validate') }}
              />

              <Input
                name="verusId"
                label={t('formField.verusID.input')}
                validate={{ required: t('formField.verusID.validate') }}
              />
              <Input
                name="signature"
                label={t('formField.signature.input')}
                validate={{ required: t('formField.signature.validate') }}
              />
            </Form>
          </FormProvider>
        </StyledFormArea>
      )}
      {verusSignature && (
        <VerifyResult
          sigResult={sigResult}
          verusSignature={verusSignature}
          resetCall={_handleReset}
          title="Hash:"
          fileName={verusSignature?.FileName}
        >
          {verusSignature?.Hash}
        </VerifyResult>
      )}
    </>
  )
}

export default FileContent
