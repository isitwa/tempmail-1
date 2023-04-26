import Image from "next/image";
import React from "react";
import Link from "next/link";
import image1 from "../public/images/g1.webp";
import image2 from "../public/images/icons/card.svg";
import star from "../public/images/icons/star.svg";
import image3 from "../public/images/icons/check.svg";
import google from "../public/images/icons/Google.svg";
import micro from "../public/images/icons/Microsoft.svg";
import logo1 from "../public/images/textlogo1.svg";
import logo2 from "../public/images/textlogo2.svg";
import logo3 from "../public/images/textlogo3.svg";
import logo4 from "../public/images/textlogo4.svg";
import logo5 from "../public/images/textlogo5.svg";
import icon11 from "../public/images/icon11.png";
import icon22 from "../public/images/icon22.png";
import icon33 from "../public/images/icon33.png";
import pink from "../public/images/pink.svg";
import blue from "../public/images/blue.svg";
import bug1 from "../public/images/bg1.svg";
import bug2 from "../public/images/bg2.svg";
import bug3 from "../public/images/bg3.svg";
import BigStar from "../public/images/halfstar.png";
import sar from "../public/images/ser.svg";
import top from "../public/images/top.svg";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { HiOutlineUserAdd } from "react-icons/hi";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { CgMenuGridO } from "react-icons/cg";
import { BiBuilding } from "react-icons/bi";
import { BsArrowDownCircle, BsArrowRightCircle } from "react-icons/bs";
import { TbUserSearch } from "react-icons/tb";
import { IoSearch } from "react-icons/io5";

import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";
import Footer_Home from "../components/home_components/Footer_Home";
import Header_Home from "../components/home_components/Header_Home";

import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Home({ isActive }) {
  var settings = {
    dots: true,
    infinite: true,
    // centerMode: true,
    speed: 500,
    infinite: false,
    arrows: true,
    centerPadding: "0px",
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "00px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "0px",
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <Header_Home />
      <section className="block py-[80px] bg-white">
        <div className="w-full lg:w-[1440px] mx-auto px-[15px]">
          <div className="flex flex-col lg:flex-row  items-center md:gap-[25px] md:justify-between">
            <div className="flex flex-col gap-[15px] w-full lg:w-[50%] md:pr-[10%]">
              <h1 className="text-[34px] md:text-[64px] text-black font-bold leading-[34px]  md:leading-[84px]">
                Reach every
                <br /> buyer on Earth
              </h1>
              <p className="text-[18px] md:text-[20px] text-gray-900 font-medium">
                Search, engage and convert over 250 million contacts at over 60
                million companies with Apollo’s sales intelligence and
                engagement platform.
              </p>
              <div className="flex items-stretch border border-yellow-400 rounded-md overflow-hidden">
                <div className="grow">
                  <input
                    type="text"
                    placeholder="Enter your work email"
                    className="w-full text-black text-[16px] py-[15px] px-[20px] font-medium"
                  />
                </div>
                <div className="shrink-0">
                  <button
                    type="submit"
                    className="flex gap-2 items-center bg-yellow-400 text-black text-[16px] h-full px-[20px] font-medium"
                  >
                    <span>Sign up for free</span>{" "}
                    <BsArrowRight className="text-[20px]" />
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="flex gap-2 items-center">
                  <span className="w-[16px]">
                    <Image
                      src={image2}
                      alt="image"
                      className="w-full h-full object-cover"
                    />
                  </span>
                  <p className="text-[13px] text-black font-semibold">
                    No credit card required{" "}
                  </p>
                  <span className="border-r border-gray-600 h-[15px]"></span>
                  <div className="flex gap-[5px] items-center">
                    <span className="w-[16px]">
                      <Image
                        src={star}
                        alt="image"
                        className="w-full h-full object-cover"
                      />
                    </span>
                    <span className="w-[16px]">
                      <Image
                        src={star}
                        alt="image"
                        className="w-full h-full object-cover"
                      />
                    </span>
                    <span className="w-[16px]">
                      <Image
                        src={star}
                        alt="image"
                        className="w-full h-full object-cover"
                      />
                    </span>
                    <span className="w-[16px]">
                      <Image
                        src={star}
                        alt="image"
                        className="w-full h-full object-cover"
                      />
                    </span>
                    <span className="w-[16px]">
                      <Image
                        src={star}
                        alt="image"
                        className="w-full h-full object-cover"
                      />
                    </span>
                  </div>
                  <p className="text-[13px] text-black font-semibold">
                    3,904 G2 Reviews
                  </p>
                  <span className="border-r border-gray-600 h-[15px]"></span>
                  <span className="w-[13px]">
                    <Image
                      src={image3}
                      alt="image"
                      className="w-full h-full object-cover"
                    />
                  </span>
                  <p className="text-[13px] text-black font-semibold">
                    GDPR Compliant
                  </p>
                </div>
                <div className="flex gap-2 items-center justify-center">
                  <span className="border-b border-gray-300 grow h-[1px] w-[250px]"></span>
                  <p className="text-black text-[16px] shrink-0">or</p>
                  <span className="border-b border-gray-300 grow h-[1px] w-[250px]"></span>
                </div>
                <div className="flex items-center gap-[15px]">
                  <div className="">
                    <Link
                      href="#"
                      className="flex items-center gap-1 hover:border-yellow-300 border-2 border-yellow-400 rounded-md py-[15px] px-[20px]"
                    >
                      <div className="w-[35px] h-[35px]">
                        <Image
                          src={google}
                          alt="image"
                          className="w-full h-full"
                        />
                      </div>
                      <p className="text-black text-[15px] font-semibold">
                        Sign up with Google
                      </p>
                      <AiOutlineArrowRight className="text-[19px]" />
                    </Link>
                  </div>
                  <div className="">
                    <Link
                      href="#"
                      className="flex items-center gap-1 hover:border-yellow-300 border-2 border-yellow-400 rounded-md py-[15px] px-[20px]"
                    >
                      <div className="w-[35px] h-[35px]">
                        <Image
                          src={micro}
                          alt="image"
                          className="w-full h-full"
                        />
                      </div>
                      <p className="text-black text-[15px] font-semibold">
                        Sign up with Microsoft
                      </p>
                      <AiOutlineArrowRight className="text-[19px]" />
                    </Link>
                  </div>
                </div>
                <div className="flex flex-wrap md:items-center gap-2 items-start">
                  <input type="checkbox" />
                  <p className="text-gray-500 text-[14px] font-medium">
                    By signing up, I agree to Apollo's
                  </p>
                  <Link
                    href="#"
                    className="text-gray-500 text-[14px] font-medium underline underline-offset-1"
                  >
                    Terms of Service
                  </Link>
                  <p className="text-gray-500 text-[14px] font-medium">and</p>
                  <Link
                    href="#"
                    className="text-gray-500 text-[14px] font-medium underline underline-offset-1"
                  >
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[50%]">
              <Image src={image1} alt="image" className="w-full" />
            </div>
          </div>
        </div>
      </section>
      <section className="block py-[80px] ">
        <div className="w-full xl:w-[1440px] mx-auto px-[15px]">
          <div className="flex flex-col gap-[40px] text-center">
            <h3 className="text-black font-semibold text-[30px]">
              One million sellers at 160,000 companies hit their number with
              Apollo
            </h3>
            <div className="flex flex-col md:flex-row  items-center gap-[15px] justify-center">
              <div className="w-[200px] xl:w-[300px] h-[40px]">
                <Image
                  src={logo1}
                  alt="image"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="w-[200px] xl:w-[300px] h-[40px]">
                <Image
                  src={logo2}
                  alt="image"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="w-[200px] xl:w-[300px] h-[40px]">
                <Image
                  src={logo3}
                  alt="image"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="w-[200px] xl:w-[300px] h-[40px]">
                <Image
                  src={logo4}
                  alt="image"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="w-[200px] xl:w-[300px] h-[40px]">
                <Image
                  src={logo5}
                  alt="image"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="block py-[80px] bg-white">
        <div className="w-full xl:w-[1440px] mx-auto px-[15px]">
          <div className="flex flex-col gap-[60px] text-center">
            <h3 className="text-black font-semibold text-[30px]">
              Find and reach every lead on Earth
            </h3>
            <div className="flex flex-col md:flex-row justify-around">
              <div className="flex flex-col gap-[15px] text-center">
                <div className="mx-auto bg-blue-600 text-white w-[50px] h-[50px] rounded-full grid place-content-center">
                  <HiOutlineUserAdd className="text-[22px]" />
                </div>
                <h3 className="text-black text-[40px] font-bold leading-[40px]">
                  250m+
                </h3>
                <h6 className="text-black text-[16px] font-medium">Contacts</h6>
              </div>
              <div className="flex flex-col gap-[15px] text-center">
                <div className="mx-auto bg-blue-600 text-white w-[50px] h-[50px] rounded-full grid place-content-center">
                  <BiBuilding className="text-[30px]" />
                </div>
                <h3 className="text-black text-[40px] font-bold leading-[40px]">
                  60m+
                </h3>
                <h6 className="text-black text-[16px] font-medium">
                  companies
                </h6>
              </div>
              <div className="flex flex-col gap-[15px] text-center">
                <div className="mx-auto bg-blue-600 text-white w-[50px] h-[50px] rounded-full grid place-content-center">
                  <CgMenuGridO className="text-[30px]" />
                </div>
                <h3 className="text-black text-[40px] font-bold leading-[40px]">
                  120m+
                </h3>
                <h6 className="text-black text-[16px] font-medium">
                  mobile numbers
                </h6>
              </div>
              <div className="flex flex-col gap-[15px] text-center">
                <div className="mx-auto bg-blue-600 text-white w-[50px] h-[50px] rounded-full grid place-content-center">
                  <RiMoneyDollarCircleFill className="text-[30px]" />
                </div>
                <h3 className="text-black text-[40px] font-bold leading-[40px]">
                  20,000+
                </h3>
                <h6 className="text-black text-[16px] font-medium">
                  paying customers
                </h6>
              </div>
            </div>
            <div className="flex justify-center">
              <Link
                href="#"
                className="flex gap-2 py-[15px] px-[30px] hover:bg-yellow-200 bg-yellow-400 rounded-md text-black text-[16px] font-semibold items-center"
              >
                <span>Why Apollo?</span>
                <AiOutlineArrowRight className="text-[19px]" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="block py-[80px] ">
        <div className="w-full xl:w-[1440px] mx-auto px-[15px]">
          <div className="flex flex-col gap-[40px] text-center">
            <h3 className="text-black font-semibold text-[38px]">
              Loved by sales and marketing professionals
            </h3>
            <div className="flex flex-col lg:flex-row justify-between gap-[15px]">
              <div className="flex flex-col gap-[15px] text-center">
                <div className="mx-auto d-table">
                  <Image src={icon11} alt="image" />
                </div>
                <h4 className="text-black font-semibold text-[24px]">
                  Fresh and accurate data
                </h4>
                <p className="text-black text-[18px]">
                  Over 150 million verified emails & mobile numbers. Data
                  refreshed more frequently than other vendors.
                </p>
              </div>
              <div className="flex flex-col gap-[15px] text-center">
                <div className="mx-auto d-table">
                  <Image src={icon22} alt="image" />
                </div>
                <h4 className="text-black font-semibold text-[24px]">
                  Make GTM simple
                </h4>
                <p className="text-black text-[18px]">
                  Use as an all-in-one platform or integrate with your favorite
                  CRM and Sales Engagement tool.
                </p>
              </div>
              <div className="flex flex-col gap-[15px] text-center">
                <div className="mx-auto d-table">
                  <Image src={icon33} alt="image" />
                </div>
                <h4 className="text-black font-semibold text-[24px]">
                  Free to start, low commitment
                </h4>
                <p className="text-black text-[18px]">
                  We have price plans that fit your budget. Start monthly or go
                  all-in annually. Or just use it for free.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="block py-[80px] bg-white">
        <div className="w-full xl:w-[1440px] mx-auto px-[15px]">
          <div className="flex flex-col gap-[40px] text-center">
            <h3 className="text-black font-semibold text-[38px]">
              Benefits of Apollo
            </h3>
            <div className="grid grid-cols-12 gap-[20px] md:gap-[85px]">
              <div className="col-span-12 md:col-span-5">
                <Accordion
                  preExpanded={["a"]}
                  className="border-0 flex flex-col gap-[30px]"
                >
                  <AccordionItem
                    uuid="a"
                    // className="p-[15px] rounded-md "
                    className={({ isActive }) =>
                      isActive
                        ? "bg-green-500 font-bold"
                        : "bg-red-500 font-thin"
                    }
                  >
                    <AccordionItemHeading>
                      <AccordionItemButton className="text-[28px] font-semibold text-left flex justify-between items-center">
                        <span>Search & Engage</span>
                        <BsArrowDownCircle />
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="text-left">
                      <p className="text-[17px] font-medium">
                        Search and target over 250 million prospects with laser
                        precision. Engage them in automated workflows in our
                        all-in-one platform or via other sales engagement tools.
                      </p>
                      <Link href="#">Learn more</Link>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem
                    uuid="b"
                    className={classNames({ active: isActive })}
                    // className="p-[15px] rounded-md"
                  >
                    <AccordionItemHeading>
                      <AccordionItemButton className="text-[28px] font-semibold text-left flex justify-between items-center">
                        <span>Analyze & Optimize</span>
                        <BsArrowDownCircle />
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="text-left">
                      <p className="text-[17px] font-medium">
                        Make data-based prospecting decisions based on split
                        tests and sales analytics or let our recommendation
                        engine find the next prospect for you.
                      </p>
                      <Link href="#">Learn more</Link>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem
                    uuid="c"
                    className={classNames({ active: isActive })}
                    // className="p-[15px] rounded-md"
                  >
                    <AccordionItemHeading>
                      <AccordionItemButton className="text-[28px] font-semibold text-left flex justify-between items-center">
                        <span>Enrich & Cleanse</span>
                        <BsArrowDownCircle />
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="text-left">
                      <p className="text-[17px] font-medium">
                        Automatically enrich your CRM and Marketing automation
                        system in real time with our data and over 200+ data
                        points for scoring and routing.
                      </p>
                      <Link href="#">Learn more</Link>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem
                    uuid="d"
                    className={classNames({ active: isActive })}
                    // className="p-[15px] rounded-md"
                  >
                    <AccordionItemHeading>
                      <AccordionItemButton className="text-[28px] font-semibold text-left flex justify-between items-center">
                        <span>Apollo Chrome Extension</span>
                        <BsArrowDownCircle />
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="text-left">
                      <p className="text-[17px] font-medium">
                        Prospect verified email addresses and phone numbers
                        directly from LinkedIn and use Apollo Anywhere to
                        identify new target accounts.
                      </p>
                      <Link href="#">Learn more</Link>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="col-span-12 md:col-span-7">
                <div className="block">
                  <Image src={sar} alt="image" className="w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="d-block py-[80px] bg-white">
        <div className="w-full ">
          <div className="flex flex-col gap-[10px] text-center">
            <h3 className="text-black font-semibold text-[40px] leading-[40px]">
              Success stories
            </h3>
            <p className="text-black text-[18px]">
              Apollo helps thousands of companies drive more revenue. Hear more
              success stories from companies like yours!
            </p>
            <div className="block mt-[40px] mb-[80px]">
              <Slider {...settings}>
                <div className="px-[30px]">
                  <div className="block rounded-lg bg-purple-500 text-white p-[30px]">
                    <div className="flex flex-col gap-[15px] text-left">
                      <h3 className="text-[34px] font-mediums">Optimove</h3>
                      <p className="text-[26px] font-semibold">
                        Apollo completely changed the game for us. It allowed us
                        to identify relevant targets that are ready to scale and
                        reach out to them at the exact right time.
                      </p>
                      <Link href="#" className="flex gap-[15px] items-center">
                        <span>Read the Optimove success story</span>
                        <BsArrowRightCircle className="text-[26px]" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="px-[30px]">
                  <div className="block rounded-lg bg-blue-500 text-white p-[30px]">
                    <div className="flex flex-col gap-[15px] text-left">
                      <h3 className="text-[34px] font-mediums">Optimove</h3>
                      <p className="text-[26px] font-semibold">
                        Apollo completely changed the game for us. It allowed us
                        to identify relevant targets that are ready to scale and
                        reach out to them at the exact right time.
                      </p>
                      <Link href="#" className="flex gap-[15px] items-center">
                        <span>Read the Optimove success story</span>
                        <BsArrowRightCircle className="text-[26px]" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="px-[30px]">
                  <div className="block rounded-lg bg-yellow-500 text-white p-[30px]">
                    <div className="flex flex-col gap-[15px] text-left">
                      <h3 className="text-[34px] font-mediums">Optimove</h3>
                      <p className="text-[26px] font-semibold">
                        Apollo completely changed the game for us. It allowed us
                        to identify relevant targets that are ready to scale and
                        reach out to them at the exact right time.
                      </p>
                      <Link href="#" className="flex gap-[15px] items-center">
                        <span>Read the Optimove success story</span>
                        <BsArrowRightCircle className="text-[26px]" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="px-[30px]">
                  <div className="block rounded-lg bg-emerald-500 text-white p-[30px]">
                    <div className="flex flex-col gap-[15px] text-left">
                      <h3 className="text-[34px] font-mediums">Optimove</h3>
                      <p className="text-[26px] font-semibold">
                        Apollo completely changed the game for us. It allowed us
                        to identify relevant targets that are ready to scale and
                        reach out to them at the exact right time.
                      </p>
                      <Link href="#" className="flex gap-[15px] items-center">
                        <span>Read the Optimove success story</span>
                        <BsArrowRightCircle className="text-[26px]" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
            <div className="flex justify-center">
              <Link
                href="#"
                className="flex gap-2 py-[15px] px-[30px] hover:bg-yellow-200 bg-yellow-400 rounded-md text-black text-[16px] font-semibold items-center"
              >
                <span>Read more success stories</span>
                <AiOutlineArrowRight className="text-[19px]" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="d-block py-[80px]">
        <div className="w-full xl:w-[1440px] mx-auto px-[15px]">
          <div className="flex flex-col gap-[40px] text-center">
            <h3 className="text-black font-semibold text-[40px]">
              Top-ranked Sales Intelligence & Sales Engagement <br /> solution
              on G2 Crowd
            </h3>
            <div className="grid grid-cols-12 gap-[20px] items-center">
              <div className="col-span-12 md:col-span-5">
                <div className="flex flex-col gap-[15px]">
                  <div className="flex gap-[25px]">
                    <div className="">
                      <div className="block w-[180px] md:w-[250px]">
                        <Image src={BigStar} alt="image" className="w-full" />
                      </div>
                    </div>
                    <div className="">
                      <div className="flex flex-col text-left">
                        <h4 className="text-black font-semibold text-[37px] leading-[40px]">
                          4.8<sub className="text-[20px]">/5</sub>{" "}
                        </h4>
                        <p className="text-black font-semibold text-[14px] md:text-[16ox]">
                          (based on 3,904 reviews)
                        </p>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-black font-semibold text-[22px] text-left">
                    Leader in
                  </h3>
                  <ul className="list-disc pl-[19px] list-outside text-left text-[22px] text-black font-semibold flex flex-col gap-[6px]">
                    <li>Sales Intelligence </li>
                    <li>Sales Engagement </li>
                    <li>Lead Intelligence </li>
                    <li>Marketing Account Intelligence</li>
                  </ul>
                  <div>
                    <div className=" inline-block float-left mt-[30px]">
                      <Link
                        href="#"
                        className="flex gap-2 py-[15px] px-[30px] hover:bg-yellow-200 bg-yellow-400 rounded-md text-black text-[16px] font-semibold items-center"
                      >
                        <span>Read more success stories</span>
                        <AiOutlineArrowRight className="text-[19px]" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-2">
                <div className="flex flex-row md:flex-col gap-[30px] w-full md:w-[140px]  md:float-right justify-around md:justify-end">
                  <div className="block h-[140px] w-[120px] md:w-[140px] md:h-auto">
                    <Image src={bug1} alt="image" className="w-full" />
                  </div>
                  <div className="block h-[140px] w-[120px] md:w-[140px] md:h-auto">
                    <Image src={bug2} alt="image" className="w-full" />
                  </div>
                  <div className="block h-[140px] w-[120px] md:w-[140px] md:h-auto">
                    <Image src={bug3} alt="image" className="w-full" />
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-5">
                <Link href="#" className="block">
                  <Image src={top} alt="image" className="w-full" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="block py-[60px] md:py-[120px] bg-white relative">
        <div className=" w-[120px] h-[200px] absolute top-0 left-[80px] z-[1] hidden md:block">
          <Image src={pink} alt="image" className="w-full" />
        </div>
        <div className=" w-[300px] h-[300px] absolute bottom-0 right-[80px] z-[1] hidden md:block">
          <Image src={blue} alt="image" className="w-full h-full" />
        </div>
        <div className="w-full xl:w-[1440px] mx-auto px-[15px] relative z-[3]">
          <div className="flex justify-center">
            <div className="flex flex-col gap-[15px] w-full lg:w-[60%]  text-center">
              <h1 className="text-[34px] md:text-[64px] text-black font-bold leading-[34px]  md:leading-[84px]">
                Crush your sales number <br /> with Apollo
              </h1>
              <p className="text-[18px] md:text-[20px] text-gray-900 font-medium">
                Free to get started, easy to add your whole sales team, commit
                to <br />
                monthly or annual plans. We make it easy to get started.
              </p>
              <div className="flex items-stretch border border-yellow-400 rounded-md overflow-hidden md:w-[530px] mx-auto">
                <div className="grow">
                  <input
                    type="text"
                    placeholder="Enter your work email"
                    className="w-full text-black text-[16px] py-[15px] px-[20px] font-medium"
                  />
                </div>
                <div className="shrink-0">
                  <button
                    type="submit"
                    className="flex gap-2 items-center bg-yellow-400 text-black text-[16px] h-full px-[20px] font-medium"
                  >
                    <span>Sign up for free</span>{" "}
                    <BsArrowRight className="text-[20px]" />
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="flex gap-2 items-center">
                  <p className="text-[13px] text-black font-semibold">
                    (no credit card | free credits)
                  </p>
                </div>
                <div className="flex gap-2 items-center justify-center">
                  <span className="border-b border-gray-300 grow h-[1px] w-[250px]"></span>
                  <p className="text-black text-[16px] shrink-0">or</p>
                  <span className="border-b border-gray-300 grow h-[1px] w-[250px]"></span>
                </div>
                <div className="flex items-center gap-[15px]">
                  <div className="">
                    <Link
                      href="#"
                      className="flex items-center gap-1 hover:border-yellow-300 border-2 border-yellow-400 rounded-md py-[15px] px-[20px]"
                    >
                      <div className="w-[35px] h-[35px]">
                        <Image
                          src={google}
                          alt="image"
                          className="w-full h-full"
                        />
                      </div>
                      <p className="text-black text-[15px] font-semibold">
                        Sign up with Google
                      </p>
                      <AiOutlineArrowRight className="text-[19px]" />
                    </Link>
                  </div>
                  <div className="">
                    <Link
                      href="#"
                      className="flex items-center gap-1 hover:border-yellow-300 border-2 border-yellow-400 rounded-md py-[15px] px-[20px]"
                    >
                      <div className="w-[35px] h-[35px]">
                        <Image
                          src={micro}
                          alt="image"
                          className="w-full h-full"
                        />
                      </div>
                      <p className="text-black text-[15px] font-semibold">
                        Sign up with Microsoft
                      </p>
                      <AiOutlineArrowRight className="text-[19px]" />
                    </Link>
                  </div>
                </div>
                <div className="flex flex-wrap md:items-center gap-2 items-start">
                  <input type="checkbox" />
                  <p className="text-gray-500 text-[14px] font-medium">
                    By signing up, I agree to Apollo's
                  </p>
                  <Link
                    href="#"
                    className="text-gray-500 text-[14px] font-medium underline underline-offset-1"
                  >
                    Terms of Service
                  </Link>
                  <p className="text-gray-500 text-[14px] font-medium">and</p>
                  <Link
                    href="#"
                    className="text-gray-500 text-[14px] font-medium underline underline-offset-1"
                  >
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="block py-[60px] bg-slate-700">
        <div className="w-full xl:w-[1440px] mx-auto px-[15px]">
          <div className="grid grid-cols-12 gap-[30px]">
            <div className="col-span-12">
              <h2 className="text-white text-[24px] font-semibold">
                Browse Apollo's Directories
              </h2>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="flex flex-col gap-[15px]">
                <div className="flex items-center gap-[15px]">
                  <div className=" bg-yellow-400 text-[30px] w-[50px] h-[50px] rounded-full grid place-content-center">
                    <TbUserSearch />
                  </div>
                  <h3 className="text-white text-[16px] font-semibold">
                    Person Search
                  </h3>
                </div>
                <div className="border-b border-white w-full"></div>
                <div className="flex items-center justify-between">
                  <Link href="#" className="text-[16px] text-white uppercase">
                    A
                  </Link>
                  <Link href="#" className="text-[16px] text-white uppercase">
                    B
                  </Link>
                  <Link href="#" className="text-[16px] text-white uppercase">
                    C
                  </Link>
                  <Link href="#" className="text-[16px] text-white uppercase">
                    D
                  </Link>
                  <Link href="#" className="text-[16px] text-white uppercase">
                    E
                  </Link>
                  <Link href="#" className="text-[16px] text-white uppercase">
                    F
                  </Link>
                  <Link href="#" className="text-[16px] text-white uppercase">
                    G
                  </Link>
                  <Link href="#" className="text-[16px] text-white uppercase">
                    H
                  </Link>
                  <Link href="#" className="text-[16px] text-white uppercase">
                    I
                  </Link>
                  <Link href="#" className="text-[16px] text-white uppercase">
                    J
                  </Link>
                  <Link href="#" className="text-[16px] text-white uppercase">
                    K
                  </Link>
                  <Link href="#" className="text-[16px] text-white uppercase">
                    L
                  </Link>
                  <Link href="#" className="text-[16px] text-white uppercase">
                    M
                  </Link>
                  <Link href="#" className="text-[16px] text-white uppercase">
                    N
                  </Link>
                  <Link href="#" className="text-[16px] text-white uppercase">
                    O
                  </Link>
                  <Link href="#" className="text-[16px] text-white uppercase">
                    P
                  </Link>
                  <Link href="#" className="text-[16px] text-white uppercase">
                    Q
                  </Link>
                  <Link href="#" className="text-[16px] text-white uppercase">
                    R
                  </Link>
                  <Link href="#" className="text-[16px] text-white uppercase">
                    S
                  </Link>
                  <Link href="#" className="text-[16px] text-white uppercase">
                    T
                  </Link>
                  <Link href="#" className="text-[16px] text-white uppercase">
                    U
                  </Link>
                  <Link href="#" className="text-[16px] text-white uppercase">
                    V
                  </Link>
                  <Link href="#" className="text-[16px] text-white uppercase">
                    W
                  </Link>
                  <Link href="#" className="text-[16px] text-white uppercase">
                    X
                  </Link>
                  <Link href="#" className="text-[16px] text-white uppercase">
                    Y
                  </Link>
                  <Link href="#" className="text-[16px] text-white uppercase">
                    Z
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="flex flex-col gap-[15px]">
                <div className="flex items-center gap-[15px]">
                  <div className=" bg-green-400 text-[30px] w-[50px] h-[50px] rounded-full grid place-content-center">
                    <IoSearch />
                  </div>
                  <h3 className="text-white text-[16px] font-semibold">
                    Company Search
                  </h3>
                </div>
                <div className="border-b border-white w-full"></div>
                <div className="flex items-center justify-between">
                  <Link href="#" className="text-[16px] text-white uppercase">
                    A
                  </Link>
                  <Link href="#" className="text-[16px] text-white uppercase">
                    B
                  </Link>
                  <Link href="#" className="text-[16px] text-white uppercase">
                    C
                  </Link>
                  <Link href="#" className="text-[16px] text-white uppercase">
                    D
                  </Link>
                  <Link href="#" className="text-[16px] text-white uppercase">
                    E
                  </Link>
                  <Link href="#" className="text-[16px] text-white uppercase">
                    F
                  </Link>
                  <Link href="#" className="text-[16px] text-white uppercase">
                    G
                  </Link>
                  <Link href="#" className="text-[16px] text-white uppercase">
                    H
                  </Link>
                  <Link href="#" className="text-[16px] text-white uppercase">
                    I
                  </Link>
                  <Link href="#" className="text-[16px] text-white uppercase">
                    J
                  </Link>
                  <Link href="#" className="text-[16px] text-white uppercase">
                    K
                  </Link>
                  <Link href="#" className="text-[16px] text-white uppercase">
                    L
                  </Link>
                  <Link href="#" className="text-[16px] text-white uppercase">
                    M
                  </Link>
                  <Link href="#" className="text-[16px] text-white uppercase">
                    N
                  </Link>
                  <Link href="#" className="text-[16px] text-white uppercase">
                    O
                  </Link>
                  <Link href="#" className="text-[16px] text-white uppercase">
                    P
                  </Link>
                  <Link href="#" className="text-[16px] text-white uppercase">
                    Q
                  </Link>
                  <Link href="#" className="text-[16px] text-white uppercase">
                    R
                  </Link>
                  <Link href="#" className="text-[16px] text-white uppercase">
                    S
                  </Link>
                  <Link href="#" className="text-[16px] text-white uppercase">
                    T
                  </Link>
                  <Link href="#" className="text-[16px] text-white uppercase">
                    U
                  </Link>
                  <Link href="#" className="text-[16px] text-white uppercase">
                    V
                  </Link>
                  <Link href="#" className="text-[16px] text-white uppercase">
                    W
                  </Link>
                  <Link href="#" className="text-[16px] text-white uppercase">
                    X
                  </Link>
                  <Link href="#" className="text-[16px] text-white uppercase">
                    Y
                  </Link>
                  <Link href="#" className="text-[16px] text-white uppercase">
                    Z
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer_Home />
    </>
  );
}
