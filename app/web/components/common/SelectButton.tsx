'use client'

import Image from 'next/image'
import { useState } from 'react'

interface SelectButtonProps {
  label: string
  list: Array<string>
  value: string | null
  hintText: string
  onChange: Function
}

export default function SelectButton({
  label,
  list,
  hintText,
  value,
  onChange,
}: SelectButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCompany, setSelectedCompany] = useState('')
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
              {value ? (
                <span className="text-black">{selectedCompany}</span>
              ) : (
                <span>{hintText}</span>
              )}

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
                {list.map((item) => (
                  <div
                    key={item}
                    className="text-black"
                    onClick={() => {
                      selectCompany(item)
                      onChange(item)
                    }}
                    style={{
                      padding: '10px',
                      cursor: 'pointer',
                      backgroundColor: value === item ? '#f0f0f0' : 'white',
                    }}
                  >
                    {item}
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
