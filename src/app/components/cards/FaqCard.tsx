'use client'

import { Collapse } from 'react-collapse'
import { FaMinus, FaPlus } from 'react-icons/fa'

interface FaqCardProps {
  title: string
  description: string
  opened: boolean
  toggle: () => void
}

export function FaqCard({ title, description, opened, toggle }: FaqCardProps) {
  return (
    <div className="pt-[4px] mt-2">
      <div
        className="bg-slate-100 py-4 px-5 lg:px-6 flex justify-between items-center cursor-pointer rounded-t-xl"
        onClick={toggle}
      >
        <p className="text-xl font-semibold">{title}</p>
        <div className="text-lg">
          {opened ? <FaMinus size={20} /> : <FaPlus size={20} />}
        </div>
      </div>

      <Collapse isOpened={opened}>
        <div className="bg-slate-100 rounded-b-xl px-6 py-2 border-t border-white">
          {description}
        </div>
      </Collapse>
    </div>
  )
}
