import { HiCheckBadge } from 'react-icons/hi2'

export function About() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-5 pt-6 lg:px-32">
      <div>
        <img src="/images/about.png" alt="About image" />
      </div>
      <div className="w-full lg:w-2/4 space-y-4">
        <h1 className="text-4xl font-semibold">About our products</h1>
        <h2 className="text-2xl font-medium pt-4">
          Experience audio redefined. Our headsets deliver quality, comfort and
          style in every note.
        </h2>
        <p className="text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
          maxime pariatur harum consectetur. Porro beatae odio itaque maxime
          nihil commodi!
        </p>
        <div className="flex gap-2 font-semibold">
          <HiCheckBadge size={25} className="text-background-color" />
          <h2>Wireless Headphones</h2>
        </div>
        <div className="flex gap-2 font-semibold">
          <HiCheckBadge size={25} className="text-background-color" />
          <h2>High Quality Sounds</h2>
        </div>
        <div className="flex gap-2 font-semibold">
          <HiCheckBadge size={25} className="text-background-color" />
          <h2>Voice Call Facility</h2>
        </div>
        <div className="flex gap-2 font-semibold">
          <HiCheckBadge size={25} className="text-background-color" />
          <h2>Nice and Soft Design</h2>
        </div>
      </div>
    </div>
  )
}
