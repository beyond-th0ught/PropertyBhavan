import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import { useEffect } from 'react'
import { checkoutHandler } from '../Helper/Helper'

const close = <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M6.4 19 5 17.6l5.6-5.6L5 6.4 6.4 5l5.6 5.6L17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6Z" /></svg>

export default function MembershipModal({ type, openMemberModal, setOpenMemberModal, amount }) {
    // const [isOpen, setIsOpen] = useState(openMemberModal)
    function closeModal() {
        // console.log('hi')
        // setIsOpen(false)
        setOpenMemberModal(false)
    }

    return (
        <Transition appear show={openMemberModal} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-sm transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <div className='flex justify-between items-center'>
                                    <Dialog.Title
                                        as="h2"
                                        className="text-xl mb-1 font-medium leading-6 text-gray-900"
                                    >
                                        Buy a plan
                                    </Dialog.Title>
                                    <div onClick={closeModal}>
                                        {close}
                                    </div>
                                </div>
                                <p className='text-sm' >You need to buy a plan to {type === 'owner' ? 'post property' : 'view contact'}</p>
                                <div className="my-3">
                                    <h2 class="text-2xl font-semibold text-deep_purple_500 dark:text-deep_purple_500 sm:text-3xl">₹ {type === 'owner' ? '499' : '299'}<span class="text-base font-medium">/{type === 'owner' ? '90' : '180'} days</span></h2>
                                    {type === 'owner' ?
                                        <>
                                            <div className="flex items-center my-1 justify-between text-gray-800 ">
                                                <p className="text-base font-medium">Number of Listings: 2</p>

                                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-deep_purple_500 sm:h-7 sm:w-7" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                                </svg>
                                            </div>
                                            <div className="flex items-center my-1 justify-between text-gray-800 ">
                                                <p className="text-base font-medium">Privacy of your phone number</p>

                                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-deep_purple_500 sm:h-7 sm:w-7" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                                </svg>
                                            </div>
                                            <div className="flex items-center my-1 justify-between text-gray-800 ">
                                                <p className="text-base font-medium">Verified tag on both the property</p>

                                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-deep_purple_500 sm:h-7 sm:w-7" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                                </svg>
                                            </div>
                                            <div className="flex items-center my-1 justify-between text-gray-800 ">
                                                <p className="text-base font-medium">Property promotion on site for 25 Days</p>

                                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-deep_purple_500 sm:h-7 sm:w-7" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                                </svg>
                                            </div>
                                        </>
                                        :
                                        <>
                                            <div className="flex items-center my-1 justify-between text-gray-800 ">
                                                <p className="text-base font-medium">Get contact details of 5 Owners</p>

                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-deep_purple_500 sm:h-7 sm:w-7" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                                </svg>
                                            </div>

                                            <div className="flex items-center justify-between text-gray-800 ">
                                                <p className="text-base font-medium">Privacy of your contact information</p>

                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-deep_purple_500 sm:h-7 sm:w-7" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                                </svg>
                                            </div>
                                        </>}
                                </div>
                                <div className='flex justify-between'>

                                    <button onClick={closeModal} class="px-8 mt-4 py-2 tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-400 rounded-md hover:bg-gray-300 focus:outline-none focus:bg-gray-300 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                                        Close
                                    </button>
                                    <button onClick={() => checkoutHandler(amount)} class="px-8 mt-4 py-2 tracking-wide text-white capitalize transition-colors duration-300 transform bg-deep_purple_500 rounded-md hover:bg-deep_purple_400 focus:outline-none focus:bg-deep_purple_400 focus:ring focus:ring-deep_purple_A100 focus:ring-opacity-80">
                                        Buy Plan
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}
