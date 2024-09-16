import { Button } from "@/components/ui/button";
import Image from "next/image";

const Section3 = () => {
  return (
    <section className=" relative z-40 container">
      <div className="flex items-center justify-between">
        <div className="max-w-[830px] space-y-4">
          <p className="text-xl font-normal bg-clip-text bg-btnBg">
            Empower Your Crypto Journey
          </p>
          <h2 className="text-4xl bg-clip-text bg-headingText font-medium leading-[110%]">
            Discover seamless trading with Ozarke&apos;s innovative and
            user-friendly platform.
          </h2>
        </div>
        <Button className=" hidden lg:inline-flex">
          Launch App
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
          >
            <g clip-path="url(#clip0_11120_1495)">
              <path
                d="M2.25 0.734619H18V16.4846H15.75V4.57544L1.9248 18.4094L0.325195 16.8098L14.1592 2.98462H2.25V0.734619Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_11120_1495">
                <rect
                  width="18"
                  height="18"
                  fill="white"
                  transform="matrix(-1 0 0 1 18 0.734619)"
                />
              </clipPath>
            </defs>
          </svg>
        </Button>
      </div>
      <div className=" flex flex-col lg:grid pt-12  pb-6 lg:grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-8 grid gap-8 lg:grid-cols-2">
          <div className="border border-[#393939]  px-10 py-16 flex flex-col gap-y-8">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={86}
                height={78}
                viewBox="0 0 86 78"
                fill="none"
              >
                <path
                  d="M68.6667 17.1667H81.5417C82.6799 17.1667 83.7715 17.6188 84.5763 18.4237C85.3812 19.2285 85.8333 20.3201 85.8333 21.4583V72.9583C85.8333 74.0965 85.3812 75.1882 84.5763 75.993C83.7715 76.7978 82.6799 77.25 81.5417 77.25H4.29167C3.15345 77.25 2.06184 76.7978 1.257 75.993C0.452156 75.1882 0 74.0965 0 72.9583V4.29167C0 3.15345 0.452156 2.06184 1.257 1.257C2.06184 0.452156 3.15345 0 4.29167 0H68.6667V17.1667ZM8.58333 25.75V68.6667H77.25V25.75H8.58333ZM8.58333 8.58333V17.1667H60.0833V8.58333H8.58333ZM55.7917 42.9167H68.6667V51.5H55.7917V42.9167Z"
                  fill="url(#paint0_linear_11120_1609)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_11120_1609"
                    x1="-4.9226e-07"
                    y1="76.8944"
                    x2="77.1046"
                    y2="-8.25919"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#3F61C1" />
                    <stop offset={1} stopColor="#37E6F4" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="space-y-3">
              <div>
                <h3 className="text-3xl font-bold bg-clip-text bg-headingText">
                  Instant Wallet Setup
                </h3>
              </div>
              <p className="text-base font-normal text-[#E5E5E5]">
                Unlock the crypto world in seconds with a wallet designed for
                intuitive setup and seamless integration.
              </p>
            </div>
          </div>
          <div className="border p-2 bg-[url('/Section-3/Card-Background.png')] border-[#3F61C1]">
            <div className="border border-[#3F61C1]  bg-black px-10 py-16 flex flex-col gap-y-8">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={78}
                  height={91}
                  viewBox="0 0 78 91"
                  fill="none"
                >
                  <path
                    d="M17.875 33.9688C17.875 33.9688 11.4375 5 38.7969 5C66.1562 5 59.7188 33.9688 59.7188 33.9688M5 37.1875H72.5938V85.4688H5V37.1875Z"
                    stroke="url(#paint0_linear_11120_1621)"
                    strokeWidth="9.65625"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_11120_1621"
                      x1={5}
                      y1="85.0984"
                      x2="84.4175"
                      y2="18.7912"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#3F61C1" />
                      <stop offset={1} stopColor="#37E6F4" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="space-y-3">
                <div>
                  <h3 className="text-3xl font-bold bg-clip-text bg-headingText">
                    Ironclad Security
                  </h3>
                </div>
                <p className="text-base font-normal text-[#E5E5E5]">
                  Built with cutting-edge encryption, Ozarke provides ironclad
                  protection for your assets—trade with absolute confidence.
                </p>
              </div>
            </div>
          </div>
          <div className="border border-[#393939]  px-10 py-16 flex flex-col gap-y-8">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={86}
                height={78}
                viewBox="0 0 86 78"
                fill="none"
              >
                <path
                  d="M60.0833 37.9308L78.28 6.47292L85.7046 10.7646L63.2592 49.6042L35.3204 33.5104L14.8492 68.9167H85.8333V77.5H0V0.25H8.58333V62.6508L32.1875 21.7083L60.0833 37.9308Z"
                  fill="url(#paint0_linear_11120_1614)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_11120_1614"
                    x1="-4.9226e-07"
                    y1="77.1444"
                    x2="77.1046"
                    y2="-8.00919"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#3F61C1" />
                    <stop offset={1} stopColor="#37E6F4" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="space-y-3">
              <div>
                <h3 className="text-3xl font-bold bg-clip-text bg-headingText">
                  Real-Time Market Mastery
                </h3>
              </div>
              <p className="text-base font-normal text-[#E5E5E5]">
                Navigate the market like a pro with dynamic, real-time trading
                charts and insights that keep you ahead of the curve.
              </p>
            </div>
          </div>
          <div className="border border-[#393939]  px-10 py-16 flex flex-col gap-y-8">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={86}
                height={70}
                viewBox="0 0 86 70"
                fill="none"
              >
                <path
                  d="M21.4583 69.5L0 48.0416L21.4583 26.5833L27.4667 32.6989L16.4156 43.75H47.2083V52.3333H16.4156L27.4667 63.3844L21.4583 69.5ZM64.375 43.75L58.3667 37.6344L69.4177 26.5833H38.625V18H69.4177L58.3667 6.94894L64.375 0.833313L85.8333 22.2916L64.375 43.75Z"
                  fill="url(#paint0_linear_11120_1626)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_11120_1626"
                    x1="-4.9226e-07"
                    y1="69.1839"
                    x2="67.2841"
                    y2="-14.4125"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#3F61C1" />
                    <stop offset={1} stopColor="#37E6F4" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="space-y-3">
              <div>
                <h3 className="text-3xl font-bold bg-clip-text bg-headingText">
                  Effortless Transfers
                </h3>
              </div>
              <p className="text-base font-normal text-[#E5E5E5]">
                Experience ultra-fast, low-fee asset transfers designed for the
                modern trader.
              </p>
            </div>
          </div>
        </div>
        <div className="border min-h-[800px] relative col-span-12 lg:col-span-4 border-[#393939]  px-10 py-16 flex flex-col gap-y-8">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={52}
              height={87}
              viewBox="0 0 52 87"
              fill="none"
            >
              <path
                d="M12.875 0.312988H38.625C42.0397 0.312988 45.3145 1.66946 47.729 4.08399C50.1435 6.49852 51.5 9.77333 51.5 13.188V73.2713C51.5 76.686 50.1435 79.9608 47.729 82.3753C45.3145 84.7898 42.0397 86.1463 38.625 86.1463H12.875C9.46034 86.1463 6.18553 84.7898 3.771 82.3753C1.35647 79.9608 0 76.686 0 73.2713L0 13.188C0 9.77333 1.35647 6.49852 3.771 4.08399C6.18553 1.66946 9.46034 0.312988 12.875 0.312988ZM12.875 8.89632C11.7368 8.89632 10.6452 9.34848 9.84033 10.1533C9.03549 10.9582 8.58333 12.0498 8.58333 13.188V73.2713C8.58333 74.4095 9.03549 75.5011 9.84033 76.306C10.6452 77.1108 11.7368 77.563 12.875 77.563H38.625C39.7632 77.563 40.8548 77.1108 41.6597 76.306C42.4645 75.5011 42.9167 74.4095 42.9167 73.2713V13.188C42.9167 12.0498 42.4645 10.9582 41.6597 10.1533C40.8548 9.34848 39.7632 8.89632 38.625 8.89632H12.875ZM25.75 73.2713C24.6118 73.2713 23.5202 72.8192 22.7153 72.0143C21.9105 71.2095 21.4583 70.1179 21.4583 68.9797C21.4583 67.8414 21.9105 66.7498 22.7153 65.945C23.5202 65.1401 24.6118 64.688 25.75 64.688C26.8882 64.688 27.9798 65.1401 28.7847 65.945C29.5895 66.7498 30.0417 67.8414 30.0417 68.9797C30.0417 70.1179 29.5895 71.2095 28.7847 72.0143C27.9798 72.8192 26.8882 73.2713 25.75 73.2713Z"
                fill="url(#paint0_linear_11120_1631)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_11120_1631"
                  x1="-2.95356e-07"
                  y1="85.7512"
                  x2="75.7481"
                  y2="40.5773"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3F61C1" />
                  <stop offset={1} stopColor="#37E6F4" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="space-y-3">
            <div>
              <h3 className="text-3xl font-bold bg-clip-text bg-headingText">
                Power in Your Pocket
              </h3>
            </div>
            <p className="text-base font-normal text-[#E5E5E5]">
              Harness the power of Ozarke anywhere, anytime, with our sleek,
              lightning-fast app for iOS and Android.
            </p>
          </div>
          <Image
            src={"/Section-3/Section-2-Image-6.png"}
            alt="image"
            width={300}
            height={373}
            className=" left-1/2 -translate-x-1/2 absolute bottom-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Section3;
