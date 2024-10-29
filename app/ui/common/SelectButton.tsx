'use client'

import Image from 'next/image'
import { useState } from 'react'

interface SelectButtonProps {
  label: string
}

export default function SelectButton({ label }: SelectButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCompany, setSelectedCompany] = useState('카드사 선택')

  const cardCompanies = ['카드사 A', '카드사 B', '카드사 C', '카드사 D']

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const selectCompany = (company: string) => {
    setSelectedCompany(company)
    setIsOpen(false)
  }

  return (
    <div className="w-full  flex-col justify-start items-start gap-2 inline-flex">
      <div className="w-full" style={{ marginBottom: '20px' }}>
        <label className="text-black text-sm  font-['Spoqa Han Sans Neo'] ">
          {label}
        </label>
        <div className="flex-col justify-start items-start gap-2 flex w-full">
          <div className="relative w-full">
            <div
              onClick={toggleDropdown}
              className="py-2 w-full text-stone-300 text-base cursor-pointer flex justify-between  border-b border-black"
            >
              <span>{selectedCompany}</span>
              <Image
                src={'/images/arrow_drop_down.svg'}
                alt="dropdown"
                width={20}
                height={20}
                className={isOpen ? 'rotate90' : ''}
              />
            </div>
            {isOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  width: '100%',
                  border: '1px solid gray',
                  backgroundColor: 'white',
                  zIndex: 1000,
                }}
              >
                {cardCompanies.map((company) => (
                  <div
                    key={company}
                    onClick={() => selectCompany(company)}
                    style={{
                      padding: '10px',
                      cursor: 'pointer',
                      backgroundColor:
                        selectedCompany === company ? '#f0f0f0' : 'white',
                    }}
                  >
                    {company}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
