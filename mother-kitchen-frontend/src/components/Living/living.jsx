import 'es6-promise/auto'
import { useRef, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import emailjs from '@emailjs/browser'
import LastSection from '../LastSection'
import BorderDiv from '../custom/BorderDiv'
import logo from '../../assets/logo_text.png'
import magzine from '../../assets/living/magzine.png'

const Living = () => {
  const [file, setFile] = useState(null)
  const [photoBase64, setPhotoBase64] = useState('')
  const [isSending, setIsSending] = useState(false)
  const formRef = useRef()

  // Convert file to base64 string
  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = (error) => reject(error)
    })
  }

  // Handle file drop
  const onDrop = async (acceptedFiles) => {
    const selectedFile = acceptedFiles[0]
    setFile(
      Object.assign(selectedFile, {
        preview: URL.createObjectURL(selectedFile),
      }),
    )
    try {
      const base64 = await fileToBase64(selectedFile)
      setPhotoBase64(base64)
    } catch (error) {
      console.error('Error converting file:', error)
    }
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSending(true)
    emailjs
      .sendForm(
        import.meta.env.VITE_DAKSH_SERVICE_ID,
        import.meta.env.VITE_DAKSH_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_DAKSH_USER_ID,
      )
      .then(
        (result) => {
          console.log('Email sent:', result.text)
          alert('Message sent successfully!')
        },
        (error) => {
          console.error('Email error:', error.text)
          alert('An error occurred, please try again.')
        },
      )
      .finally(() => setIsSending(false))
  }

  return (
    <div className="p-4 sm:m-6 md:m-8 lg:m-10 xl:m-12">
      <BorderDiv className="flex flex-col items-center justify-center bg-[#FFB3AE] p-6">
        <img src={logo} alt="logo" className="md:h-auto md:w-1/6" />
        <h2 className="black-shadow white-stroke text-center font-gluten text-3xl font-bold text-white md:my-4 md:text-9xl">
          Coming Soon
        </h2>
        <img src={magzine} alt="living image" className="md:px-40" />
        <p className="text-center font-lexend font-semibold md:px-20" style={{ lineHeight: '18px' }}>
          MK Living: Your guide to designing a life you don’t need a vacation from. Bite-sized tips, actionable
          insights, and fresh perspectives to help you live fully, work smart, and find joy in every moment.
        </p>
      </BorderDiv>

      {/* Headings */}
      <h2 className="mt-10 text-center font-gluten text-2xl font-bold md:text-3xl" style={{ color: '#5B3202' }}>
        Got a golden secret?
      </h2>
      <h2 className="text-center font-gluten text-2xl font-bold text-white md:text-3xl">
        Share your recipes, gardening tips, or lifestyle
      </h2>
      <h2 className="text-center font-gluten text-2xl font-bold text-white md:text-3xl">
        hacks and inspire others to shine!
      </h2>

      {/* Form Section */}
      <BorderDiv className="mt-10 flex flex-col items-center justify-around gap-4 bg-[#FEF5CE] p-6 md:flex-row">
        {/* File Drop Zone */}
        <div
          className={`relative flex items-center justify-center gap-5 overflow-hidden rounded-2xl border-2 border-dashed border-white bg-[#9761208C] text-center ${
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
              <button
                type="button"
                className="mt-4 border-4 border-black bg-[#8E1736] px-4 py-2 font-gluten text-white"
              >
                BROWSE
              </button>
            </div>
          ) : (
            <img
              src={file.preview}
              alt={file.name}
              className="absolute inset-0 h-full w-full object-cover"
              style={{ borderRadius: 'inherit' }}
            />
          )}
        </div>

        {/* Contact Form */}
        <form ref={formRef} onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-3">
          <input
            type="text"
            name="from_name"
            className="w-full rounded-xl border-2 border-black bg-[#976120] p-2 py-3 text-sm font-semibold text-white outline-none placeholder:text-white"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="from_email"
            className="w-full rounded-xl border-2 border-b-4 border-r-4 border-black bg-[#976120] p-2 py-3 text-[10px] font-semibold text-white outline-none placeholder:text-white md:text-sm"
            placeholder="Your Email"
            required
          />
          <input
            type="text"
            name="from_number"
            className="w-full rounded-xl border-2 border-b-4 border-r-4 border-black bg-[#976120] p-2 py-3 text-[10px] font-semibold text-white outline-none placeholder:text-white md:text-sm"
            placeholder="Your Number"
          />
          <textarea
            name="message"
            cols="50"
            rows="8"
            className="mt-5 w-full resize-none rounded-xl border-2 border-b-4 border-r-4 border-black bg-[#976120] p-2 text-[10px] font-semibold text-white outline-none placeholder:text-white md:text-sm"
            placeholder="Write your message..."
            required
          ></textarea>
          <input type="hidden" name="photo" value={photoBase64 || ''} />
          <div className="flex justify-end  md:justify-start">
            <button
              type="submit"
              disabled={isSending}
              className="inline-flex items-center justify-center rounded-full border-b-4 border-black bg-[#C40D4F] px-8 py-2 font-semibold text-white"
              style={{ width: '25%' }}
            >
              {isSending ? (
                <svg
                  className="h-5 w-5 animate-spin text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                'Send'
              )}
            </button>
          </div>
        </form>
      </BorderDiv>

      <LastSection elements={['Comic', 'Brands', 'Contact']} />
    </div>
  )
}

export default Living
