import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone'

const FileDropZone = () => {
  const [file, setFile] = useState(null)

  const onDrop = (acceptedFiles) => {
    const selectedFile = acceptedFiles[0]
    console.log(selectedFile) // Debugging
    setFile(
      Object.assign(selectedFile, {
        preview: URL.createObjectURL(selectedFile),
      }),
    )
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  })

  return (
    <div
      className={`relative flex items-center justify-center  gap-5 overflow-hidden rounded-2xl border-2 border-dashed border-white bg-[#9761208C] text-center ${
        isDragActive ? 'bg-[#976120] bg-opacity-50' : ''
      }`}
      {...getRootProps()}
      style={{
        width: '100%',
        maxWidth: '350px',
        height: 'auto',
        minHeight: '450px',
      }}
    >
      <input {...getInputProps()} />
      {!file ? (
        <div>
          <p className="font-lexend font-medium text-white">Drag and Drop File</p>
          <p className="font-lexend font-medium text-white">or</p>
          <button className="mt-4 border-4 border-black bg-[#8E1736] px-4 py-2 font-gluten text-white">BROWSE</button>
        </div>
      ) : (
        <img
          src={file.preview}
          alt={file.name}
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            borderRadius: 'inherit',
          }}
        />
      )}
    </div>
  )
}

export default FileDropZone
