import { useState, useEffect, useCallback } from 'react'
import { useFormContext } from 'react-hook-form'
import { useDropzone } from 'react-dropzone'
import CryptoJS from 'crypto-js'

const get = (errors, name) => {
  const result = name.split('.').reduce((prev, cur) => prev?.[cur], errors)
  return result
}

export const InputField = (props) => {
  const { name, label, validate } = props
  const { errors, register } = useFormContext()
  const errorMessage = get(errors, name)?.message
  const ref = register(validate)
  return (
    <div className="justify-center p-2 py-3 border border-gray-300 border-solid rounded-md shadow">
      <label
        className={`block ${
          errorMessage ? 'text-red-600' : 'text-gray-700'
        } text-sm px-2 mb-2 ml-2 bg-white font-p `}
        style={{ marginTop: '-1.45rem', width: 'fit-content' }}
        htmlFor={name}
      >
        {label}
      </label>
      <input
        {...props}
        className={` appearance-none border border-transparent rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${
          errorMessage
            ? 'border-red-600 focus:shadow-red bg-red-200'
            : 'focus:ring'
        }`}
        id={name}
        ref={ref}
      />
      {errorMessage && (
        <p className="mt-2 text-xs italic font-medium text-red-600">
          {errorMessage}
        </p>
      )}
    </div>
  )
}

export const TextAreaField = (props) => {
  const { name, label, validate } = props
  const { errors, register } = useFormContext()
  const errorMessage = get(errors, name)?.message
  const ref = register(validate)
  return (
    <div className="justify-center p-2 py-3 border border-gray-300 border-solid rounded-md shadow">
      <label
        className={`block ${
          errorMessage ? 'text-red-600' : 'text-gray-700'
        } text-sm px-2 mb-2 ml-2 bg-white font-p capitalize`}
        style={{ marginTop: '-1.45rem', width: 'fit-content' }}
        htmlFor={name}
      >
        {label}
      </label>
      <textarea
        {...props}
        className={` w-full max-w-full px-2 text-base text-gray-800 border-none outline-none ${
          errorMessage
            ? 'border-red-600 focus:shadow-red bg-red-200'
            : 'focus:ring'
        }`}
        id={name}
        ref={ref}
      />
      {errorMessage && (
        <p className="mt-2 text-xs italic font-medium text-red-600">
          {errorMessage}
        </p>
      )}
    </div>
  )
}

export const FileInputField = (props) => {
  const { name, validate } = props
  const [isProcessing, setIsProcessing] = useState(false)
  const { register, unregister, setValue, watch, errors } = useFormContext()
  const errorMessage = get(errors, name)?.message

  const files = watch(name)

  const onDrop = useCallback(
    (droppedFiles) => {
      droppedFiles.forEach(async (file) => {
        setIsProcessing(true)
        const reader = new FileReader()
        reader.onabort = () => console.log('reader aborted')
        reader.onerror = () => console.log('reader error')
        reader.onloadend = (evt) => {
          const createHash = CryptoJS.SHA256(
            CryptoJS.enc.Latin1.parse(reader.result)
          )
          const hash = createHash.toString(CryptoJS.enc.Hex)
          file.hash = hash

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
        <input
          {...props}
          className={`w-full px-3 py-2 leading-tight ${
            errorMessage ? 'text-red-600' : 'text-gray-700'
          } border rounded shadow appearance-none focus:outline-none focus:ring`}
          id={name}
          {...getInputProps()}
        />
        <div
          className={
            'w-full p-2 border rounded flex flex-col justify-center items-center border-dashed border-gray-900 ' +
            (isDragActive
              ? 'bg-gray-400'
              : errorMessage
              ? 'border-red-600 focus:shadow-red bg-red-200'
              : 'bg-gray-200')
          }
          style={{ minHeight: '125px' }}
        >
          <p
            className={`my-2 text-center  ${
              errorMessage ? 'text-red-600' : 'text-gray-700'
            }`}
          >
            {isProcessing
              ? 'Please wait obtaining hash of file...'
              : 'Click to select or Drop the files here ...'}
          </p>
          {errorMessage && (
            <p className="mt-2 text-xs italic font-medium text-red-600">
              {errorMessage}
            </p>
          )}
          {/* Optionally you may display a preview of the file(s) */}
          {!!files?.length && (
            <div className="flex flex-col justify-center">
              {files.map((file, hash) => {
                return (
                  <div key={file.name}>
                    <p className="m-0 font-p">{file.name}</p>
                    <p className="m-0 font-p">{file.hash}</p>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </>
  )
}
