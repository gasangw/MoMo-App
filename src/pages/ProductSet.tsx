import { RadioGroup } from '@headlessui/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import CheckIcon from '../assets/CheckIcon'
import Button from '../component/Button'
import StyleWrapper from '../component/StyleWrapper'
import { ProductSetDetails } from '../utils/ProductSetDetails'

export default function ProductSet() {
  const [selected, setSelected] = useState(ProductSetDetails)

  return (
    <StyleWrapper className='pt-8 text-blue-900'>
      <h2 className='py-4 font-Poppins text-3xl font-bold'>Choose Product Set</h2>
      <p className='text-base italic'>
        By selecting a product , I have read and agreed to its Terms and Conditions
      </p>
      <div className='w-full py-8'>
        <div className='mx-auto w-full'>
          <RadioGroup value={selected} onChange={setSelected}>
            <RadioGroup.Label className='sr-only'>Server size</RadioGroup.Label>
            <div className='space-y-2'>
              {ProductSetDetails.map(({ name, detailsTitle, link }) => (
                <RadioGroup.Option
                  key={name}
                  value={name}
                  className={({ active, checked }) =>
                    `${active ? 'ring-2 ring-white/60 ring-offset-2 ring-offset-sky-600' : ''}
                   ${checked ? 'bg-blue-900 text-white' : 'bg-white'}
                     relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                  }
                >
                  {({ checked }) => (
                    <>
                      <div className='flex w-full items-center justify-between'>
                        <div className='flex items-center'>
                          <div className='py-2 text-base'>
                            <RadioGroup.Label
                              as='p'
                              className={`font-medium  ${checked ? 'text-white' : 'text-blue-900'}`}
                            >
                              {name}
                            </RadioGroup.Label>
                            <RadioGroup.Description
                              as='span'
                              className={`inline text-sm text-yellow-500 underline ${
                                checked ? 'text-sky-100' : 'text-blue-900'
                              }`}
                            >
                              <Link to={link}>{detailsTitle}</Link>
                            </RadioGroup.Description>
                          </div>
                        </div>
                        {checked && (
                          <div className='shrink-0 text-white'>
                            <CheckIcon className='h-8 w-8' />
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
        </div>
      </div>
      <Button
        text='Next'
        className='mx-auto my-5 cursor-pointer bg-yellow-500 font-Assistant text-xl text-blue-900 hover:text-gray-100'
      />
    </StyleWrapper>
  )
}
