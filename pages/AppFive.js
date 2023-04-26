import App_Five_Footer from "@/components/App_Five_Components/App_Five_Footer";
import App_Five_MailList from "@/components/App_Five_Components/App_Five_MailList";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../public/images/fake-mail.png";
import person from "../public/images/person.jpg";
import ads1 from "../public/images/ads1.jpg";

export default function AppFive() {
  return (
    <>
      <div className="flex flex-col h-screen bg-white dark:bg-zinc-800">
        <div className="flex justify-center py-[40px] h-100 bg-white dark:bg-zinc-800">
          <div className="w-full md:w-[995px] px-[15px]">
            <header className="flex flex-col md:flex-row justify-between gap-[15px] bg-thor-700 p-4">
              <div className="w-[130px] md:w-[300px]">
                <div className=" inline-block h-full md:h-[40px]">
                  <Image
                    src={logo}
                    alt="logo"
                    className="h-full"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
              <div className="grow">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center">
                    <h3 className="bg-white text-black text-[16px] border border-zinc-500 py-2 px-4 grow">
                      valente.theon@foundroo.com
                    </h3>
                    <button className="bg-blue-400 hover:bg-blue-400/75 text-white text-[16px] py-[9px] w-[100px] text-center">
                      Copy
                    </button>
                  </div>
                </div>
              </div>

              {/* <div className="">
                <h3 className="text-[14px] md:text-[18px] lg:text-[30px] text-black dark:text-white font-semibold">
                  Temp Mail Address Protects Your Privacy
                </h3>
              </div> */}
            </header>
            <section className="flex flex-col md:flex-row md:items-center gap-[15px] justify-between mb-5 bg-thor-700">
              <div className="flex gap-1">
                <Link
                  href="#"
                  className="w-full py-[10px] px-[8px] text-[16px] text-gray-800  text-center hover:text-gray-800"
                >
                  Home
                </Link>
                <Link
                  href="#"
                  className="w-full py-[10px] px-[8px] text-[16px] text-gray-800  text-center hover:text-gray-800"
                >
                  About
                </Link>
                <Link
                  href="#"
                  className="w-full py-[10px] px-[8px] text-[16px] text-gray-800 text-center hover:text-gray-800"
                >
                  Contact
                </Link>
                <Link
                  href="#"
                  className="w-full py-[10px] px-[8px] text-[16px] text-gray-800  text-center hover:text-gray-800"
                >
                  Login
                </Link>
                <Link
                  href="#"
                  className="w-full py-[10px] px-[8px] text-[16px] text-gray-800  text-center hover:text-gray-800"
                >
                  Premium
                </Link>
              </div>
              <div className="flex gap-2 flex-wrap justify-end px-4">
                <button className="text-[14px] text-gray-800 font-medium">
                  Delete
                </button>
                <button className="text-[14px] text-gray-800 font-medium">
                  Edit
                </button>
                <button className="text-[14px] text-gray-800 font-medium">
                  Refresh
                </button>
                <div className="flex gap-2 items-center">
                  <p className="text-[14px] text-gray-800">
                    Randomly generated password:{" "}
                    <span className="text-gray-700 font-semibold">
                      nsmqh2S@
                    </span>
                  </p>
                  <button className="text-[16px] text-gray-900 font-medium">
                    Copy
                  </button>
                </div>
              </div>
              {/* <div className="flex flex-wrap gap-2">
                <Link
                  href="#"
                  className="text-gray-900  dark:text-white text-[14px] hover:text-blue-400"
                >
                  +10 min
                </Link>
                |
                <Link
                  href="#"
                  className="text-gray-900 dark:text-white  text-[14px] hover:text-blue-400"
                >
                  1 day
                </Link>
                |
                <Link
                  href="#"
                  className="text-gray-900 dark:text-white  text-[14px] hover:text-blue-400"
                >
                  3 days
                </Link>
                |
                <Link
                  href="#"
                  className="text-gray-900 dark:text-white  text-[14px] hover:text-blue-400"
                >
                  5 days
                </Link>
                |
                <Link
                  href="#"
                  className="text-gray-900 dark:text-white  text-[14px] hover:text-blue-400"
                >
                  1 week
                </Link>
                |
                <Link
                  href="#"
                  className="text-gray-900 dark:text-white  text-[14px] hover:text-blue-400"
                >
                  2 weeks
                </Link>
              </div> */}
            </section>
            {/* <section className="flex flex-col lg:flex-row justify-between bg-thor-700 py-5 px-3 my-4 gap-4"></section> */}
            <section className="flex flex-col md:flex-row gap-[15px]">
              <div className="sm:w-[120] xl:w-[300px]">
                <Image
                  src={ads1}
                  alt="image"
                  className="w-full hidden xl:block"
                  width={100}
                  height={100}
                />
                <Image
                  src={ads1}
                  alt="image"
                  className="w-full xl:hidden md:block hidden"
                  width={100}
                  height={100}
                />
                <Image
                  src={ads1}
                  alt="image"
                  className="w-full block md:hidden"
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-1 grow">
                <div className="grow bg-white  p-2 border border-gray-200">
                  <div className="grid grid-cols-12 border-b border-gray-300">
                    <div className="col-span-3">
                      <h3 className="text-[16px] text-black font-semibold pb-1">
                        From
                      </h3>
                    </div>
                    <div className="col-span-5">
                      {/* <h3 className="text-[16px] text-black font-semibold pb-1">
                        Subject
                      </h3> */}
                    </div>
                    <div className="col-span-4">
                      <h3 className="text-[16px] text-black font-semibold pb-1 text-right">
                        Time
                      </h3>
                    </div>
                  </div>

                  <App_Five_MailList />
                </div>
              </div>
            </section>
            <section className="block mt-2">
              <div className="grid md:grid-cols-12 gap-[10px]">
                <div className="col-span-8">
                  <Image src={ads1} alt="image" className="w-full" />
                </div>
                <div className="col-span-4">
                  <Image src={ads1} alt="image" className="w-full" />
                </div>
              </div>
              <div className="grid grid-cols-12 gap-5 md:gap-10 mb-10 py-10">
                <div className="col-span-12">
                  <h4 className="text-center text-[22px] font-medium text-gray-500 dark:text-white">
                    How to use temporary email?
                  </h4>
                </div>
                <div className="col-span-12 md:col-span-4">
                  <div className="flex flex-col text-center gap-4">
                    <div>
                      <h2 className="bg-gray-300 text-gray-700 text-[18px] place-items-center grid w-[55px] h-[55px] rounded-full mx-auto">
                        1
                      </h2>
                    </div>
                    <div>
                      <p className="text-gray-500 dark:text-white">
                        Copy email address from the top left corner{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-4">
                  <div className="flex flex-col text-center gap-4">
                    <div>
                      <h2 className="bg-gray-300 text-gray-700 text-[18px] place-items-center grid w-[55px] h-[55px] rounded-full mx-auto">
                        2
                      </h2>
                    </div>
                    <div>
                      <p className="text-gray-500 dark:text-white">
                        Use this to sign up on websites, social media, etc
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-4">
                  <div className="flex flex-col text-center gap-4">
                    <div>
                      <h2 className="bg-gray-300 text-gray-700 text-[18px] place-items-center grid w-[55px] h-[55px] rounded-full mx-auto">
                        3
                      </h2>
                    </div>
                    <div>
                      <p className="text-gray-500 dark:text-white">
                        Read incoming emails on this page in the left side
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-12">
                  <div className="flex flex-col">
                    <h4 className="text-center text-[22px] font-medium text-gray-500 dark:text-white mb-5">
                      What is disposable temporary email?
                    </h4>
                    <p className="text-gray-500 dark:text-white text-[16px] text-center">
                      <a href="" target="_blank">
                        Disposable temporary email
                      </a>{" "}
                      protects your real email address from spam, advertising
                      mailings, malwares. It's anonymous and free. This email
                      has a limited lifetime period: if this email will not
                      receive messages due to some time — it will be removed.
                      Sometimes disposable email is also called "
                      <strong>throwaway email</strong>", "
                      <strong>10 minute mail</strong>", "
                      <strong>tempmail</strong>
                      ", "<strong>trash mail</strong>" and "
                      <strong>fake mail</strong>". Temporary email can be used
                      for different websites (e.g. social networks), download
                      files from file hostings, use it each time you want to
                      stash your real email and paste temporary email instead.
                      For example, public Wi-Fi spots, blogs and forums require
                      users to complete registration until they can fully use
                      their website.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-2  2xl:grid-cols-2 gap-4 mt-8">
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
            </section>
          </div>
        </div>
        <App_Five_Footer />
      </div>
    </>
  );
}
