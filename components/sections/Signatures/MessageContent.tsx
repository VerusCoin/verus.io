import { useState } from 'react'
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'
import useTranslation from 'next-translate/useTranslation'
import { TextArea, Input, Form } from '@/components/elements/FormFields'
import { StyledFormArea } from './FormArea.style'
import VerifyResult from './VerifyResult'

interface IMessageContent {
  message: string
  verusId: string
  signature: string
}

const MessageContent = () => {
  const { t } = useTranslation('signatures')
  const methods = useForm<IMessageContent>({ mode: 'onBlur' })
  const [verusSignature, setVerusSignature] = useState<Record<
    string,
    string
  > | null>(null)
  const [sigResult, setSigResult] = useState<any>()

  const onSubmit: SubmitHandler<IMessageContent> = async (values) => {
    if (values) {
      const query = {
        Message: values?.message,
        Identity: values?.verusId,
        Signature: values?.signature,
      }
      setVerusSignature(query)

      const url = '/api/verusSignatureMessage'
      const result = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(query),
      })
      const data = await result.json()

      if (data.valid) {
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
              <TextArea
                name="message"
                label={t('tab.message.input')}
                validate={{ required: t('tab.message.validate') }}
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
          title="Message/Text:"
        >
          {verusSignature.Message}
        </VerifyResult>
      )}
    </>
  )
}

export default MessageContent
