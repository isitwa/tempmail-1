import Link from "next/link";

function Location() {
  return (
    <>
      <div className="block h-screen " style={{ backgroundColor: "#f9f8f3" }}>
        <div className="w-full md:w-5/6 md:mx-auto  py-5 px-5">
          <h1 className="text-[28px] lg:text-[60px] text-gray-800 text-center font-semibold mb-6">
            What is my IP address location?
          </h1>
          <div className="flex-col lg:flex-row flex gap-11 items-stretch">
            <div className="shrink-0">
              <div className="flex flex-col gap-1 bg-white drop-shadow-xl rounded-xl px-8 py-12 w-full mx-auto lg:m-0 md:w-[400px] lg:w-[500px]">
                <h6 className="text-[13px] text-black uppercase font-semibold  tracking-wide">
                  YOUR IP ADDRESS
                </h6>
                <h5 className="text-[24px] font-semibold text-pink-700">
                  18.68.12.16
                </h5>
                <div className="flex gap-2 items-center my-2">
                  <div className="shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 text-pink-700"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-gray-700 text-[14px]">
                    Your IP address is currently exposed. Start reclaiming your
                    online anonymity with a VPN. Try ExpressVPN Risk-Free
                  </h3>
                </div>
                <div className="flex flex-col gap-2">
                  <div>
                    <Link
                      href="/"
                      className="text-white text-[16px] font-medium bg-emerald-600 hover:bg-lime-600 rounded-full py-2 px-8 inline-block"
                    >
                      Try ExpressVPN Risk-Free
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="/"
                      className="text-[16px] text-green-600  underline-offset-4 underline "
                    >
                      Keep your IP address private
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="grow">
              <div className="lg:flex bg-white drop-shadow-xl rounded-xl mx-auto lg:m-0 w-full md:w-[400px] lg:w-full overflow-hidden h-full">
                <div className="grow  px-8 py-12">
                  <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-1">
                      <h6 className="text-[13px] text-gray-800 uppercase font-semibold  tracking-wide">
                        LOCATION
                      </h6>
                      <h5 className="text-[24px] font-semibold text-gray-800">
                        United States
                      </h5>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h6 className="text-[13px] text-gray-800 uppercase font-semibold  tracking-wide">
                        INTERNET SERVICE PROVIDER (ISP)
                      </h6>
                      <h5 className="text-[24px] font-semibold text-gray-800">
                        Amazon CloudFront
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="shrink-0">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27007.952575154763!2d76.1888768!3d32.2043904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1672068946830!5m2!1sen!2sin"
                    width="400"
                    height="400"
                    style={{ border: "0" }}
                    className="w-full h-180 lg:h-200 lg:h-full lg:w-[240px]"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Location;
