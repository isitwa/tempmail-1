import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../public/images/logo.jpg";

export default function codepage() {
  return (
    <>
      <div className="flex justify-center md:h-screen">
        <div className="flex flex-col">
          <div className="m-auto flex col w-full md:w-[90%] lg:w-[1080px] shadow-lg rounded-md overflow-hidden">
            <div className="flex flex-col md:flex-row items-stretch w-full">
              <div className="w-full md:w-[50%] bg-slate-100  px-[30px] py-[60px]">
                <div className="flex flex-col gap-4">
                  <div>
                    <Link href="" className="w-[200px] inline-block">
                      <Image
                        src={logo}
                        alt="logo"
                        className="w-full object-cover"
                      />
                    </Link>
                  </div>
                  <h3 className="text-gray-900 font-semibold text-[26px] leading-12">
                    Target Multiple Niche Professionals & Get Hyper-Focused
                    Results!
                  </h3>
                  <p className="text-gray-400 text-[16px]">
                    Simplicity is essential; a user will not use any software if
                    over-complicated. I find this to be incredibly simple to
                    user straight to the point, and able to focus on fine-tuning
                    your search. As a marketing agency, this allows us to target
                    specific segments and locations, export this data, and then
                    utilize my messaging systems to monitor and automate the
                    process.
                  </p>
                  <div className="flex gap-2 flex-col">
                    <h4 className="text-gray-900">Brandon M.</h4>
                    <p className="text-gray-400 text-[16px]">
                      Creative Strategist
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-[50%] bg-white px-[30px] py-[60px]">
                <div className="flex flex-col gap-4">
                  <h3 className="text-gray-900 font-semibold text-[30px] leading-12">
                    AppSumo x useArtemis
                  </h3>
                  <p className="text-gray-400 text-[18px]">
                    If you purchased a lifetime licence on AppSumo, then you are
                    in the right place. Just fill in the form below with your
                    purchase code.
                  </p>
                  <form action="">
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="" className="text-gray-600 text-[18px]">
                          Purchase code
                        </label>
                        <input
                          type="text"
                          placeholder="Purchase code"
                          className="border border-gray-200 p-4 rounded-md"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="" className="text-gray-600 text-[18px]">
                          Email
                        </label>
                        <input
                          type="text"
                          placeholder="Email"
                          className="border border-gray-200 p-4 rounded-md"
                        />
                      </div>
                      <div className="flex gap-3 items-center">
                        <input type="checkbox" name="" id="" />
                        <p className="text-[14px] text-gray-400">
                          I have read and agree to the{" "}
                        </p>
                        <Link href="#" className="text-[14px] text-blue-500">
                          Terms & Conditions
                        </Link>
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="text-[16px] text-white bg-blue-700 hover:bg-blue-800 py-[13px] rounded-md w-full text-center"
                        >
                          Claim my account
                        </button>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="border-b border-gray-200 grow"></div>
                        <p className="text-gray-900 text-[16px] font-medium shrink">
                          or
                        </p>
                        <div className="border-b border-gray-200 grow"></div>
                      </div>
                      <div className="flex justify-center">
                        <div className="flex items-center gap-2">
                          <p className="text-gray-700 text-[16px]">
                            Already have an account?
                          </p>
                          <Link href="#" className="text-blue-700  text-[16px]">
                            Sign In
                          </Link>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
