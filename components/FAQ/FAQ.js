import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import React from 'react'
import { useTitle } from '../Helper/Helper'

export default function FAQ({detault,que,ans}) {

  // useTitle({que},{ans})
  return (
    <Disclosure id={`${que}`} as="div" className="mt-2" defaultOpen={detault} >
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full justify-between rounded-lg py-2 text-left text-lg font-medium text-[#7979fc] hover:bg-[#cfcffc] px-2 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
            <span>
              {que}
            </span>
            <ChevronUpIcon
              className={`${open ? 'rotate-180 transform' : ''
                } h-5 w-5 text-purple-500`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="pt-4 pb-2 text-base text-gray-700">
                {ans}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
