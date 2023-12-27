import { Button } from '..'

export function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center responsive bg-contact-image bg-no-repeat bg-cover opacity-80">
      <h1 className="text-4xl font-semibold mt-24 md:mt-0 text-white">
        Contact us
      </h1>
      <form className="text-white mt-10 w-full">
        <div className="flex flex-col md:flex-row gap-8 lg:justify-between">
          <div className="w-full">
            <input
              id="firstName"
              type="text"
              placeholder="First name"
              className="bg-transparent border-2 border-white rounded-md outline-none w-full px-4 py-1"
            />
          </div>
          <div className="w-full">
            <input
              id="lastName"
              type="text"
              placeholder="Last name"
              className="bg-transparent border-2 border-white rounded-md outline-none w-full px-4 py-1"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8 lg:justify-between mt-8 lg:mt-4">
          <div className="w-full">
            <input
              id="email"
              type="text"
              placeholder="E-mail"
              className="bg-transparent border-2 border-white rounded-md outline-none w-full px-4 py-1"
            />
          </div>
          <div className="w-full">
            <input
              id="phoneNumber"
              type="text"
              placeholder="Phone number"
              className="bg-transparent border-2 border-white rounded-md outline-none w-full px-4 py-1"
            />
          </div>
        </div>
        <div className="mt-4">
          <textarea
            id="message"
            cols={50}
            rows={5}
            placeholder="Enter your message here"
            className="bg-transparent border-2 border-white rounded-md outline-none w-full px-4 py-1"
          ></textarea>
        </div>
        <div className="flex flex-row justify-center mt-4">
          <Button label="Send message" />
        </div>
      </form>
    </div>
  )
}
