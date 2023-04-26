import App_Five_Footer from "@/components/App_Five_Components/App_Five_Footer";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../public/images/fake-mail.png";
import mail from "../public/images/mail-inbox.png";
import person from "../public/images/person.jpg";
import ads1 from "../public/images/ads1.jpg";
import { BsDownload, BsCode, BsPrinter } from "react-icons/bs";
import { AiFillFastForward, AiOutlineDelete } from "react-icons/ai";
import { SlEyeglass } from "react-icons/sl";
export default function MailFive_Mail() {
  return (
    <>
      <div className="flex flex-col h-screen ">
        <div className="flex justify-center py-[40px] h-100">
          <div className="w-full md:w-[995px] px-[15px]">
            <div className="d-block mb-2">
              <Image src={ads1} alt="image" className="w-full" />
            </div>

            <header className="flex items-center justify-between bg-white dark:bg-zinc-600 px-4 py-2">
              <Link
                href="AppFive"
                className="flex items-center gap-2 text-black dark:text-white text-[16px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M20.25 12a.75.75 0 01-.75.75H6.31l5.47 5.47a.75.75 0 11-1.06 1.06l-6.75-6.75a.75.75 0 010-1.06l6.75-6.75a.75.75 0 111.06 1.06l-5.47 5.47H19.5a.75.75 0 01.75.75z"
                    clipRule="evenodd"
                  />
                </svg>

                <span>Back</span>
              </Link>
              <div className="flex items-center gap-4">
                <Link
                  href="#"
                  className="text-black dark:text-white text-[16px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.875 1.5C6.839 1.5 6 2.34 6 3.375v2.99c-.426.053-.851.11-1.274.174-1.454.218-2.476 1.483-2.476 2.917v6.294a3 3 0 003 3h.27l-.155 1.705A1.875 1.875 0 007.232 22.5h9.536a1.875 1.875 0 001.867-2.045l-.155-1.705h.27a3 3 0 003-3V9.456c0-1.434-1.022-2.7-2.476-2.917A48.716 48.716 0 0018 6.366V3.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM16.5 6.205v-2.83A.375.375 0 0016.125 3h-8.25a.375.375 0 00-.375.375v2.83a49.353 49.353 0 019 0zm-.217 8.265c.178.018.317.16.333.337l.526 5.784a.375.375 0 01-.374.409H7.232a.375.375 0 01-.374-.409l.526-5.784a.373.373 0 01.333-.337 41.741 41.741 0 018.566 0zm.967-3.97a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H18a.75.75 0 01-.75-.75V10.5zM15 9.75a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V10.5a.75.75 0 00-.75-.75H15z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className=" inline-block w-[90px]">
                  <Image src={logo} alt="logo" />
                </Link>
              </div>
            </header>
            <div className="block bg-white dark:bg-zinc-700 py-[20px] md:px-[100px]">
              <div className="flex flex-col gap-2 mb-9">
                <div className="flex">
                  <Link
                    href=""
                    className="flex gap-2 items-center text-[14px] text-gray-800 border border-gray-300 rounded-md py-[6px] px-[15px] "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 dark:text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>

                    <span className="dark:text-white">Close this message </span>
                  </Link>
                </div>
                <div className="flex justify-between">
                  <Link
                    href=""
                    className="text-gray-600 text-[14px] font-light hover:text-gray-600 dark:hover:text-gray-300 dark:text-white "
                  >
                    To: zjewiirencwio@coool.cm
                  </Link>
                  <Link
                    href=""
                    className="text-gray-600 text-[14px] font-light hover:text-gray-600 dark:text-white dark:hover:text-gray-300"
                  >
                    a few seconds ago
                  </Link>
                </div>
                <Link
                  href=""
                  className="text-gray-600 text-[14px] font-light hover:text-gray-600 dark:text-white dark:hover:text-gray-300"
                >
                  From: User name admin@gmail.com
                </Link>

                <div className="flex flex-col gap-3">
                  <h3 className="text-gray-900 text-[18px] dark:text-white">
                    Hello
                  </h3>
                  <div className="flex justify-center items-center gap-3">
                    <div className="border-b border-gray-600 w-[10%] h-[2px]"></div>
                    <div className="flex justify-center text-center  gap-3 my-4">
                      <div className="flex gap-3 relative z-[10]  px-4">
                        <button className="text-[13px]">
                          <div className="flex gap-3 items-center">
                            <BsDownload />
                            <span className="whitespace-nowrap">
                              Download message
                            </span>
                          </div>
                        </button>
                        <button className="text-[13px]">
                          <div className="flex gap-3 items-center">
                            <BsCode />
                            <span className="whitespace-nowrap">
                              Show original
                            </span>
                          </div>
                        </button>
                        <button className="text-[13px]">
                          <div className="flex gap-3 items-center">
                            <BsPrinter />
                            <span className="whitespace-nowrap">Print</span>
                          </div>
                        </button>
                        <button className="text-[13px]">
                          <div className="flex gap-3 items-center">
                            <AiOutlineDelete />
                            <span className="whitespace-nowrap">Delete</span>
                          </div>
                        </button>
                        <button className="text-[13px]">
                          <div className="flex gap-3 items-center">
                            <SlEyeglass />
                            <span className="whitespace-nowrap">
                              Mark as unread
                            </span>
                          </div>
                        </button>
                      </div>
                    </div>
                    <div className="border-b border-gray-600 w-[10%] h-[2px]"></div>
                  </div>

                  <p className="text-gray-700 text-[14px] font-light text-ellipsis overflow-hidden dark:text-white">
                    hi
                    <br />
                    Ea qui pariatur sint dolore occaecat aliqua nisi sunt nulla.
                    Minim nulla culpa amet qui eu cillum. Dolor consectetur in
                    anim proident aliquip excepteur anim aliqua aliquip ea
                    cillum cupidatat ea.
                  </p>
                  <p className="text-gray-700 text-[14px] font-light text-ellipsis overflow-hidden dark:text-white">
                    Disposable temporary email protects your real email address
                    from spam, advertising mailings, malwares. It's anonymous
                    and free. This email has a limited lifetime period: if this
                    email will not receive messages due to some time — it will
                    be removed. Sometimes disposable email is also called
                    "throwaway email", "10 minute mail", "tempmail", "trash
                    mail" and "fake mail". Temporary email can be used for
                    different websites (e.g. social networks), download files
                    from file hostings, use it each time you want to stash your
                    real email and paste temporary email instead. For example,
                    public Wi-Fi spots, blogs and forums require users to
                    complete registration until they can fully use their
                    website.
                  </p>
                  <p className="text-gray-700 text-[14px] font-light text-ellipsis overflow-hidden dark:text-white">
                    Disposable temporary email protects your real email address
                    from spam, advertising mailings, malwares. It's anonymous
                    and free. This email has a limited lifetime period: if this
                    email will not receive messages due to some time — it will
                    be removed. Sometimes disposable email is also called
                    "throwaway email", "10 minute mail", "tempmail", "trash
                    mail" and "fake mail". Temporary email can be used for
                    different websites (e.g. social networks), download files
                    from file hostings, use it each time you want to stash your
                    real email and paste temporary email instead. For example,
                    public Wi-Fi spots, blogs and forums require users to
                    complete registration until they can fully use their
                    website.
                  </p>
                  <p className="text-gray-700 text-[14px] font-light text-ellipsis overflow-hidden dark:text-white">
                    Disposable temporary email protects your real email address
                    from spam, advertising mailings, malwares. It's anonymous
                    and free. This email has a limited lifetime period: if this
                    email will not receive messages due to some time — it will
                    be removed. Sometimes disposable email is also called
                    "throwaway email", "10 minute mail", "tempmail", "trash
                    mail" and "fake mail". Temporary email can be used for
                    different websites (e.g. social networks), download files
                    from file hostings, use it each time you want to stash your
                    real email and paste temporary email instead. For example,
                    public Wi-Fi spots, blogs and forums require users to
                    complete registration until they can fully use their
                    website.
                  </p>
                </div>
              </div>
              <div className="grid xl:grid-cols-2  2xl:grid-cols-2 gap-4 mt-8">
                <div className="flex flex-col border border-gray-200 rounded-md p-5 gap-1 group hover:drop-shadow-3xl ease-in bg-white">
                  <div className="flex gap-2">
                    <h3 className="text-[14px] text-slate-800">JAN 05</h3>
                    <span>.</span>
                    <Link href="#" className="text-blue-500 text-[14px]">
                      FITBIT
                    </Link>
                  </div>
                  <div className="flex justify-between gap-4">
                    <div>
                      <Link
                        href="#"
                        className="text-[14px] md:text-[16px] text-slate-800 group-hover:underline underline-offset-1"
                      >
                        Consequat consequat sit ut ea minim elit incididunt
                        irure
                      </Link>
                    </div>
                    <div>
                      <Link
                        href="#"
                        className="block h-[80px] w-[120px] overflow-hidden rounded-md"
                      >
                        <Image
                          src={person}
                          alt="image"
                          width={100}
                          height={100}
                          className="w-full h-full object-cover hover:scale-[1.1] ease-in"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className="flex flex-col border border-gray-200 rounded-md p-5 gap-1 group hover:drop-shadow-3xl ease-in bg-white">
                  <div className="flex gap-2">
                    <h3 className="text-[14px] text-slate-800">JAN 17</h3>
                    <span>.</span>
                    <Link href="#" className="text-blue-500 text-[14px]">
                      AIi
                    </Link>
                  </div>
                  <div className="flex justify-between gap-4">
                    <div>
                      <Link
                        href="#"
                        className="text-[14px] md:text-[16px] text-slate-800 group-hover:underline underline-offset-1"
                      >
                        Consequat consequat sit ut ea minim elit incididunt
                        irure
                      </Link>
                    </div>
                    <div>
                      <Link
                        href="#"
                        className="block h-[80px] w-[120px] overflow-hidden rounded-md"
                      >
                        <Image
                          src={person}
                          alt="image"
                          width={100}
                          height={100}
                          className="w-full h-full object-cover hover:scale-[1.1] ease-in"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className="flex flex-col border border-gray-200 rounded-md p-5 gap-1 group hover:drop-shadow-3xl ease-in bg-white">
                  <div className="flex gap-2">
                    <h3 className="text-[14px] text-slate-800">JAN 17</h3>
                    <span>.</span>
                    <Link href="#" className="text-blue-500 text-[14px]">
                      AIi
                    </Link>
                  </div>
                  <div className="flex justify-between gap-4">
                    <div>
                      <Link
                        href="#"
                        className="text-[14px] md:text-[16px] text-slate-800 group-hover:underline underline-offset-1"
                      >
                        Consequat consequat sit ut ea minim elit incididunt
                        irure
                      </Link>
                    </div>
                    <div>
                      <Link
                        href="#"
                        className="block h-[80px] w-[120px] overflow-hidden rounded-md"
                      >
                        <Image
                          src={person}
                          alt="image"
                          width={100}
                          height={100}
                          className="w-full h-full object-cover hover:scale-[1.1] ease-in"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className="flex flex-col border border-gray-200 rounded-md p-5 gap-1 group hover:drop-shadow-3xl ease-in bg-white">
                  <div className="flex gap-2">
                    <h3 className="text-[14px] text-slate-800">JAN 05</h3>
                    <span>.</span>
                    <Link href="#" className="text-blue-500 text-[14px]">
                      FITBIT
                    </Link>
                  </div>
                  <div className="flex justify-between gap-4">
                    <div>
                      <Link
                        href="#"
                        className="text-[14px] md:text-[16px] text-slate-800 group-hover:underline underline-offset-1"
                      >
                        Consequat consequat sit ut ea minim elit incididunt
                        irure
                      </Link>
                    </div>
                    <div>
                      <Link
                        href="#"
                        className="block h-[80px] w-[120px] overflow-hidden rounded-md"
                      >
                        <Image
                          src={person}
                          alt="image"
                          width={100}
                          height={100}
                          className="w-full h-full object-cover hover:scale-[1.1] ease-in"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className="flex flex-col border border-gray-200 rounded-md p-5 gap-1 group hover:drop-shadow-3xl ease-in bg-white">
                  <div className="flex gap-2">
                    <h3 className="text-[14px] text-slate-800">JAN 17</h3>
                    <span>.</span>
                    <Link href="#" className="text-blue-500 text-[14px]">
                      AIi
                    </Link>
                  </div>
                  <div className="flex justify-between gap-4">
                    <div>
                      <Link
                        href="#"
                        className="text-[14px] md:text-[16px] text-slate-800 group-hover:underline underline-offset-1"
                      >
                        Consequat consequat sit ut ea minim elit incididunt
                        irure
                      </Link>
                    </div>
                    <div>
                      <Link
                        href="#"
                        className="block h-[80px] w-[120px] overflow-hidden rounded-md"
                      >
                        <Image
                          src={person}
                          alt="image"
                          width={100}
                          height={100}
                          className="w-full h-full object-cover hover:scale-[1.1] ease-in"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className="flex flex-col border border-gray-200 rounded-md p-5 gap-1 group hover:drop-shadow-3xl ease-in bg-white">
                  <div className="flex gap-2">
                    <h3 className="text-[14px] text-slate-800">JAN 17</h3>
                    <span>.</span>
                    <Link href="#" className="text-blue-500 text-[14px]">
                      AIi
                    </Link>
                  </div>
                  <div className="flex justify-between gap-4">
                    <div>
                      <Link
                        href="#"
                        className="text-[14px] md:text-[16px] text-slate-800 group-hover:underline underline-offset-1"
                      >
                        Consequat consequat sit ut ea minim elit incididunt
                        irure
                      </Link>
                    </div>
                    <div>
                      <Link
                        href="#"
                        className="block h-[80px] w-[120px] overflow-hidden rounded-md"
                      >
                        <Image
                          src={person}
                          alt="image"
                          width={100}
                          height={100}
                          className="w-full h-full object-cover hover:scale-[1.1] ease-in"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className="flex flex-col border border-gray-200 rounded-md p-5 gap-1 group hover:drop-shadow-3xl ease-in bg-white">
                  <div className="flex gap-2">
                    <h3 className="text-[14px] text-slate-800">JAN 05</h3>
                    <span>.</span>
                    <Link href="#" className="text-blue-500 text-[14px]">
                      FITBIT
                    </Link>
                  </div>
                  <div className="flex justify-between gap-4">
                    <div>
                      <Link
                        href="#"
                        className="text-[14px] md:text-[16px] text-slate-800 group-hover:underline underline-offset-1"
                      >
                        Consequat consequat sit ut ea minim elit incididunt
                        irure
                      </Link>
                    </div>
                    <div>
                      <Link
                        href="#"
                        className="block h-[80px] w-[120px] overflow-hidden rounded-md"
                      >
                        <Image
                          src={person}
                          alt="image"
                          width={100}
                          height={100}
                          className="w-full h-full object-cover hover:scale-[1.1] ease-in"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className="flex flex-col border border-gray-200 rounded-md p-5 gap-1 group hover:drop-shadow-3xl ease-in bg-white">
                  <div className="flex gap-2">
                    <h3 className="text-[14px] text-slate-800">JAN 17</h3>
                    <span>.</span>
                    <Link href="#" className="text-blue-500 text-[14px]">
                      AIi
                    </Link>
                  </div>
                  <div className="flex justify-between gap-4">
                    <div>
                      <Link
                        href="#"
                        className="text-[14px] md:text-[16px] text-slate-800 group-hover:underline underline-offset-1"
                      >
                        Consequat consequat sit ut ea minim elit incididunt
                        irure
                      </Link>
                    </div>
                    <div>
                      <Link
                        href="#"
                        className="block h-[80px] w-[120px] overflow-hidden rounded-md"
                      >
                        <Image
                          src={person}
                          alt="image"
                          width={100}
                          height={100}
                          className="w-full h-full object-cover hover:scale-[1.1] ease-in"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className="flex flex-col border border-gray-200 rounded-md p-5 gap-1 group hover:drop-shadow-3xl ease-in bg-white">
                  <div className="flex gap-2">
                    <h3 className="text-[14px] text-slate-800">JAN 17</h3>
                    <span>.</span>
                    <Link href="#" className="text-blue-500 text-[14px]">
                      AIi
                    </Link>
                  </div>
                  <div className="flex justify-between gap-4">
                    <div>
                      <Link
                        href="#"
                        className="text-[14px] md:text-[16px] text-slate-800 group-hover:underline underline-offset-1"
                      >
                        Consequat consequat sit ut ea minim elit incididunt
                        irure
                      </Link>
                    </div>
                    <div>
                      <Link
                        href="#"
                        className="block h-[80px] w-[120px] overflow-hidden rounded-md"
                      >
                        <Image
                          src={person}
                          alt="image"
                          width={100}
                          height={100}
                          className="w-full h-full object-cover hover:scale-[1.1] ease-in"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                {/*  */}
              </div>
            </div>
            <div className="d-block mt-2">
              <Image src={ads1} alt="image" className="w-full" />
            </div>
          </div>
        </div>
        <App_Five_Footer />
      </div>
    </>
  );
}
