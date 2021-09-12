import { useState } from 'react'
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'
import useTranslation from 'next-translate/useTranslation'
import { Input, Form } from '@/components/elements/FormFields'
import { StyledFormArea } from './FormArea.style'
import VerifyResult from './VerifyResult'

interface IHashContent {
  hash: string
  verusId: string
  signature: string
}

const HashContent = () => {
  const { t } = useTranslation('signatures')
  const methods = useForm<IHashContent>({ mode: 'onBlur' })

  const [verusSignature, setVerusSignature] = useState<Record<
    string,
    string
  > | null>(null)
  const [sigResult, setSigResult] = useState<any>(null)

  const onSubmit: SubmitHandler<IHashContent> = async (values) => {
    if (values) {
      const query = {
        Hash: values?.hash,
        Identity: values?.verusId,
        Signature: values?.signature,
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
              <Input
                name="hash"
                label={t('tab.hash.input')}
                validate={{ required: t('tab.hash.validate') }}
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
        >
          {verusSignature?.Hash}
        </VerifyResult>
      )}
    </>
  )
}

export default HashContent
