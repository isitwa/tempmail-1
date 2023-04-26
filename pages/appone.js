import EmailTemp_InnerBox from "@/components/TempMail_Innerbox/EmailTemp_InnerBox";
import EmptyMail_innerBox from "@/components/TempMail_Innerbox/EmptyMail_innerBox";
import MailList_InnerBox from "@/components/TempMail_Innerbox/MailList_InnerBox";
import OpenMail_InnerBox from "@/components/TempMail_Innerbox/OpenMail_InnerBox";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import maiIcon from "../public/images/mail-icon.jpg";
export default function appone() {
  return (
    <>
      <div className="block bg-white py-[60px]">
        <div className="block py-[60px] px-[15px] md:px-0">
          <div className="flex justify-center">
            <div className="flex flex-col gap-4 text-center w-full md:w-[700px]">
              <h2 className="text-[30px] md:text-[40px] uppercase text-gray-800 font-bold">
                YOUR TEMP MAIL ADDRESS:
              </h2>
              <p className="text-[16px] md:text-[18px] text-gray-500">
                Keep your real mailbox clean and secure. Temp Mail provides
                temporary, secure, anonymous, free, disposable email address.
              </p>
              <div className="table mx-auto rounded-2xl p-[20px] linesimg  md:w-[640px]">
                <div className="flex flex-col md:flex-row justify-between align-middle gap-4">
                  <div className="shrink-0 flex flex-col group">
                    <div className="block relative m-auto">
                      <div className="bg-gray-200 absolute p-2 rounded-lg -top-[40px] w-[230px] left-[50%] -translate-x-2/4 group-hover:block hidden">
                        <h3 className="text-[12px] text-gray-900">
                          Tap to change your email manually
                        </h3>
                        <div className=" relative w-full">
                          <div className="h-0 w-0 border-x-8 border-x-transparent border-t-[16px] border-t-gray-200 absolute -bottom-[20px]  left-[50%] -translate-x-2/4"></div>
                        </div>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-8 h-8 text-blue-100"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="grow flex flex-col">
                    <h3 className="text-blue-50 font-bold text-[22px] my-auto text-ellipsis overflow-hidden w-[320px]">
                      marucirib.qepohupa@jollyfree
                    </h3>
                  </div>
                  <div className="shrink-0">
                    <div className="flex align-middle gap-4 justify-center">
                      <div className="shrink-0">
                        <button
                          type="button"
                          className=" border-2 border-blue-100 text-blue-50 focus-within:outline-none py-2 px-5 rounded-xl"
                        >
                          <div className="flex gap-5 align-middle">
                            <span>Copy</span>
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                                />
                              </svg>
                            </span>
                          </div>
                        </button>
                      </div>
                      <div className="shrink-0">
                        <button
                          type="button"
                          className=" border-2 border-blue-100 text-blue-50 focus-within:outline-none p-2 rounded-xl"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block px-[15px] lg:px-0">
          <div className="block ">
            <div className="w-full lg:w-[1280px] mx-auto md:table">
              <EmptyMail_innerBox />
              <MailList_InnerBox />
              <OpenMail_InnerBox />
              <EmailTemp_InnerBox />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
