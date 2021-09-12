import { useState, useEffect, useCallback } from 'react'
import { useFormContext } from 'react-hook-form'
import { useDropzone } from 'react-dropzone'
import CryptoJS from 'crypto-js'
import {
  StyledInput,
  StyledFileInputBox,
  StyledErrorMessage,
} from './Field.style'

import getErrors from './Hooks'

const FileInputField = (props: any) => {
  const { name, validate, input, processing } = props
  const [isProcessing, setIsProcessing] = useState(false)
  const {
    register,
    unregister,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext()
  const errorMessage = getErrors(errors, name)?.message

  const files = watch(name)

  const onDrop = useCallback(
    (droppedFiles) => {
      droppedFiles.forEach(async (file: any) => {
        setIsProcessing(true)
        const reader = new FileReader()
        // reader.onabort = () => console.log('reader aborted')
        // reader.onerror = () => console.log('reader error')
        reader.onloadend = () => {
          if (reader.result) {
            const createHash = CryptoJS.SHA256(
              CryptoJS.enc.Latin1.parse(reader.result.toString())
            )

            const hash = createHash.toString(CryptoJS.enc.Hex)
            file.hash = hash
          }
          setIsProcessing(false)
        }
        reader.readAsBinaryString(file)
      })
      setValue(name, droppedFiles)
    },
    [setValue, name]
  )
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: props.accept,
  })
  useEffect(() => {
    register(name, validate)
    return () => {
      unregister(name, validate)
    }
  }, [register, unregister, name])
  return (
    <>
      <div {...getRootProps()}>
        <StyledInput
          {...props}
          errorMessage={errorMessage}
          id={name}
          {...getInputProps()}
        />
        <StyledFileInputBox
          isDragActive={isDragActive}
          errorMessage={errorMessage}
        >
          <p> {isProcessing ? processing : input}</p>
          {errorMessage && (
            <StyledErrorMessage>{errorMessage}</StyledErrorMessage>
          )}
          {!!files?.length &&
            files.map((file: Record<string, string>, index: number) => {
              return (
                <div key={index}>
                  <p>{file.name}</p>
                  <p>{file.hash}</p>
                </div>
              )
            })}
        </StyledFileInputBox>
      </div>
    </>
  )
}

export default FileInputField
