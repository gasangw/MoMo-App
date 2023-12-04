import { RadioGroup } from '@headlessui/react'
import { useState } from 'react'
import CheckIcon from '../../assets/CheckIcon'
import Button from '../../component/Button'
import Input from '../../component/Input'
import StyleWrapper from '../../component/StyleWrapper'
import { ListOfPlatforms } from '../../utils/ListOfPlatforms'

export default function DisplayListOfPlatforms() {
  const [selected, setSelected] = useState()
  return (
    <StyleWrapper className='text-blue-900'>
      <div className='w-full'>
        <div className='mx-auto w-full'>
          <RadioGroup value={selected} onChange={setSelected}>
            <RadioGroup.Label className='sr-only'>Server size</RadioGroup.Label>
            <div className='space-y-2'>
              {ListOfPlatforms.map(({ name }) => (
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
      <div className='py-4'>
        <h4>If you selected WEBSITE, kindly share the Link</h4>
        <Input type='url' text='link for your website' className='shadow-md' />
      </div>
      <div className='py-4'>
        <h4>If you selected APP, kindly share the Name</h4>
        <Input type='text' text='name of your application' className='shadow-md' />
      </div>
      <Button
        text='Next'
        className='mx-auto my-5 cursor-pointer bg-yellow-500 font-Assistant text-xl text-blue-900 hover:text-gray-100'
      />
    </StyleWrapper>
  )
}
