import { ElementType } from 'react'

interface FeatureCardProps {
  icon: ElementType
  title: string
}

export function FeatureCard({ icon: Icon, title }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-5 w-full lg:w-1/4 border-2 border-bright-color bg-[#F0F0F6} cursor-pointer rounded-xl gap-2 hover:shadow-[0_3px_10px_rgb(0,0,0,0.5)]">
      <Icon size={65} className="text-background-color" />
      <h3 className="font-semibold text-xl">{title}</h3>
      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, tenetur.
        Nobis inventore quo vero. Excepturi dignissimos nam perspiciatis
        debitis.
      </p>
    </div>
  )
}
