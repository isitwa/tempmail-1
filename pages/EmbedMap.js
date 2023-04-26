import React from "react";
import { Switch } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import mapIcon from "../public/images/icons/google-maps.png";
import Image from "next/image";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function EmbedMap() {
  const [enabled, setEnabled] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="block bg-gray-100 py-10 lg:h-screen">
        <div className=" mx-auto w-full lg:w-9/12  px-5">
          <div className="lg:flex gap-10 items-stretch">
            <div className="w-full lg:w-[350px] shrink-0">
              <div className="bg-white p-4 shadow-sm">
                <div className="flex items-center gap-4 mt-2">
                  <div className="shrink-0">
                    <Image
                      src={mapIcon}
                      alt="Picture of the author"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="grow">
                    <h6 className="text-[20px] text-black font-light">
                      Embed Google Map
                    </h6>
                  </div>
                </div>
                <div className="border-b border-gray-200 my-5"></div>
                <div className="block">
                  <form action="">
                    <div className="flex flex-col gap-3">
                      <label htmlFor="" className="text-[16px] text-black">
                        Type Your Address
                      </label>
                      <div className="flex items-center border-gray-200 border rounded-md px-2 py-1">
                        <div className="shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-4 h-4 text-black"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                            />
                          </svg>
                        </div>
                        <div className="grow">
                          <input
                            type="text"
                            placeholder="University of Oxford"
                            className="bg-white text-black text-[14px] py-1 px-2 focus-visible:outline-none"
                          />
                        </div>
                      </div>
                      <label htmlFor="" className="text-[16px] text-black">
                        Map Type
                      </label>
                      <select
                        id="location"
                        name="location"
                        className="block w-full rounded-md  py-2 pl-3 pr-10 text-base sm:text-sm bg-white text-black border-gray-200 border"
                      >
                        <option selected>Roadmap</option>
                        <option>Satellite</option>
                        <option>Satellite with street names</option>
                        <option>Terrain</option>
                      </select>
                      <label htmlFor="" className="text-[16px] text-black">
                        Zoom Distance
                      </label>
                      <div className="block">
                        <input
                          id="medium-range"
                          type="range"
                          value="50"
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                        />
                      </div>
                      <div className="flex gap-10">
                        <div className="w-6/12">
                          <label htmlFor="" className="text-[16px] text-black">
                            Width
                          </label>
                          <div className="block mt-2">
                            <div className="flex gap-3 flex-col">
                              <input
                                id="medium-range"
                                type="range"
                                value="50"
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                              />
                              <div className="flex border-gray-200 border rounded-md items-stretch mt-3 overflow-hidden">
                                <div className="grow">
                                  <input
                                    type="text"
                                    className="text-[14px] text-black bg-white p-2 focus-visible:outline-none w-[100px]"
                                  />
                                </div>
                                <div className="shrink-0 bg-gray-200">
                                  <h6 className="text-[14px] text-gray-600 py-2 px-3">
                                    px
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-6/12">
                          <label htmlFor="" className="text-[16px] text-black">
                            Height
                          </label>
                          <div className="block mt-2">
                            <div className="flex gap-3 flex-col">
                              <input
                                id="medium-range"
                                type="range"
                                value="50"
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                              />
                              <div className="flex border-gray-200 border rounded-md items-stretch mt-3 overflow-hidden">
                                <div className="grow">
                                  <input
                                    type="text"
                                    className="text-[14px] text-black bg-white p-2 focus-visible:outline-none w-[100px]"
                                  />
                                </div>
                                <div className="shrink-0 bg-gray-200">
                                  <h6 className="text-[14px] text-gray-600  py-2 px-3">
                                    px
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <Switch
                          checked={enabled}
                          onChange={setEnabled}
                          className={classNames(
                            enabled ? "bg-black" : "bg-gray-200",
                            "relative inline-flex h-4 w-9 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none"
                          )}
                        >
                          <span className="sr-only">Use setting</span>
                          <span
                            aria-hidden="true"
                            className={classNames(
                              enabled ? "translate-x-5" : "translate-x-0",
                              "pointer-events-none inline-block h-3 w-3 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                            )}
                          />
                        </Switch>
                        <h5 className="text-black text-[16px]">
                          Make Map Responsive
                        </h5>
                      </div>
                      <button
                        type="button"
                        onClick={() => setOpen(true)}
                        className="text-[18px] w-full py-3 bg-green-600 text-white rounded-md font-semibold"
                      >
                        Generate Code
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="grow mt-3 lg:mt-0">
              <div className="bg-white p-4 shadow-sm h-500 lg:h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27007.952575154763!2d76.1888768!3d32.2043904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1672068946830!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  style={{ border: "0" }}
                  className="w-full h-400 lg:h-full"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* pop up box code*/}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 md:w-[800px]">
                  <div className="flex items-center p-4 border-b border-gray-200">
                    <div className="grow">
                      <h4 className="text-[22px] text-black font-medium">
                        Map Code
                      </h4>
                    </div>
                    <div className="shrink-0">
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className=" focus-visible:outline-none"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6 text-black"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="block p-4">
                    <p className="text-[14px] text-black mb-4 text-center ">
                      Copy and paste the below code within the{" "}
                      <span className="text-red-600">{"<body>"}</span> of the
                      web page where you would like to embed google map.
                    </p>
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="3"
                      className="bg-gray-100 p-2 focus-visible:outline-none w-full text-[13px] text-black"
                      placeholder="Code Here"
                    ></textarea>
                  </div>
                  <div className="block p-4 border-t border-gray-200">
                    <div className="flex">
                      <div className="flex gap-3 ml-auto">
                        <button
                          type="button"
                          className=" rounded-md  px-4 py-2 text-base font-medium  focus-visible:outline-none bg-green-600 text-white"
                        >
                          Copy code to clipboard
                        </button>
                        <button
                          type="button"
                          className="rounded-md  px-4 py-2 text-base font-medium  focus-visible:outline-none bg-gray-400 text-white"
                          onClick={() => setOpen(false)}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}

export default EmbedMap;
