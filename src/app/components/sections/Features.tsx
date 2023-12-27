import { FaDropbox, FaUsers, FaXbox } from 'react-icons/fa'
import { LuBoxes } from 'react-icons/lu'

import { FeatureCard } from '..'

export function Features() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center responsive">
      <h1 className="text-4xl font-semibold mt-24 md:mt-0">Product features</h1>
      <p className="mt-2 text-center lg:text-start">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat cum
        rerum animi ab sequi! Provident.
      </p>
      <div className="flex flex-col md:flex-row gap-4 mt-12">
        <FeatureCard icon={FaUsers} title="User Friendly" />
        <FeatureCard icon={FaDropbox} title="Latest Technology" />
        <FeatureCard icon={FaXbox} title="High Quality" />
        <FeatureCard icon={LuBoxes} title="Awesome Design" />
      </div>
    </div>
  )
}
