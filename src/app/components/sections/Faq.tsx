'use client'

import { useState } from 'react'

import { faqContent } from '@/utils/constants'

import { FaqCard } from '..'

export function Faq() {
  const [openedItem, setOpenedItem] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    if (openedItem === index) {
      return setOpenedItem(null)
    }
    setOpenedItem(index)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center responsive">
      <h1 className="text-4xl font-semibold mt-24 md:mt-0">Faq</h1>
      <h3 className="text-xl font-medium mt-4">What people asks from us</h3>
      <div className="flex flex-col md:flex-row items-center justify-center md:mt-10">
        <div className="w-full sm:w-3/4">
          <img src="/images/faq.png" alt="Faq image" />
        </div>
        <article className="w-full grid place-items-center">
          <div className="max-w-[800px] -mt-10 lg:px-[40px]">
            {faqContent.map((question, index) => (
              <FaqCard
                key={index}
                title={question.title}
                description={question.description}
                opened={openedItem === index}
                toggle={() => toggleItem(index)}
              />
            ))}
          </div>
        </article>
      </div>
    </div>
  )
}
