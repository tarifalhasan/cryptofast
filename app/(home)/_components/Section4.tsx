import LaunchAppBtn from "@/components/LaunchAppBtn";
import Image from "next/image";

const Section4 = () => {
  return (
    <section className="container py-10 lg:py-16 flex flex-col lg:flex-row lg:items-center gap-14">
      <div className="basis-full lg:basis-[40%] flex justify-end">
        <Image
          src={"/Section-4/Body.png"}
          width={347}
          className="hidden lg:block"
          height={714}
          alt="i phone 14 pro max"
        />
        <Image
          src={"/Section-4/Body-mobile.png"}
          width={347}
          height={714}
          className=" lg:hidden"
          alt="i phone 14 pro max"
        />
      </div>
      <div className="basis-full lg:basis-[60%]">
        <div className=" space-y-4">
          <h3 className="text-3xl max-w-[387px] lg:text-[2.5rem] leading-[110%] font-medium bg-clip-text bg-headingText">
            Unlock Passive Earning Potential
          </h3>
          <p className="text-base max-w-[470px] font-normal leading-[150%] text-[#9E9E9E]">
            Put your idle tokens to work with effortless daily rewards.
          </p>
        </div>
        <ul className="py-11 space-y-8">
          <li>
            <div className="flex max-w-[478px] items-center gap-6">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={61}
                  height={61}
                  viewBox="0 0 61 61"
                  fill="none"
                >
                  <path
                    d="M13.3254 8.38431H8.32544V53.3843H53.3254V48.3843H13.3254V8.38431Z"
                    fill="url(#paint0_linear_11120_1673)"
                  />
                  <path
                    d="M33.3273 32.3492L22.5948 21.6167L19.0598 25.1517L33.3273 39.4192L40.8273 31.9192L51.5598 42.6517L55.0948 39.1167L40.8273 24.8492L33.3273 32.3492Z"
                    fill="url(#paint1_linear_11120_1673)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_11120_1673"
                      x1="8.32544"
                      y1="53.1772"
                      x2="53.4615"
                      y2="8.3141"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#3F61C1" />
                      <stop offset={1} stopColor="#37E6F4" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_11120_1673"
                      x1="19.0598"
                      y1="42.5549"
                      x2="37.4867"
                      y2="11.1788"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#3F61C1" />
                      <stop offset={1} stopColor="#37E6F4" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div>
                <h4 className="text-2xl font-medium bg-clip-text bg-headingText">
                  Unbeatable Market Fees
                </h4>
                <p className="text-base font-normal text-[#9E9E9E] leading-[150%] tracking-[0.16px]">
                  Trade smarter with the lowest fees and keep more of your
                  profits.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex max-w-[478px] items-center gap-6">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={61}
                  height={61}
                  viewBox="0 0 61 61"
                  fill="none"
                >
                  <path
                    d="M28.3254 38.3843H15.8254L33.3254 3.38431V23.3843H45.8254L28.3254 58.3843V38.3843Z"
                    fill="url(#paint0_linear_11120_1680)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_11120_1680"
                      x1="15.8254"
                      y1="58.1312"
                      x2="62.0555"
                      y2="33.0673"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#3F61C1" />
                      <stop offset={1} stopColor="#37E6F4" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div>
                <h4 className="text-2xl font-medium bg-clip-text bg-headingText">
                  Lightning-Fast, Rock-Solid Transactions
                </h4>
                <p className="text-base font-normal text-[#9E9E9E] leading-[150%] tracking-[0.16px]">
                  Enjoy unmatched speed and security for every move you make.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex max-w-[478px] items-center gap-6">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={61}
                  height={61}
                  viewBox="0 0 61 61"
                  fill="none"
                >
                  <path
                    d="M18.6379 24.3218C18.6379 24.3218 14.8879 7.44681 30.8254 7.44681C46.7629 7.44681 43.0129 24.3218 43.0129 24.3218M11.1379 26.1968H50.5129V54.3218H11.1379V26.1968Z"
                    stroke="url(#paint0_linear_11120_1686)"
                    strokeWidth="5.625"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_11120_1686"
                      x1="11.1379"
                      y1="54.1061"
                      x2="57.4006"
                      y2="15.4805"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#3F61C1" />
                      <stop offset={1} stopColor="#37E6F4" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div>
                <h4 className="text-2xl font-medium bg-clip-text bg-headingText">
                  Confidence in Every Click
                </h4>
                <p className="text-base font-normal text-[#9E9E9E] leading-[150%] tracking-[0.16px]">
                  Seamless transactions with cutting-edge protection, ensuring
                  your assets stay secure.
                </p>
              </div>
            </div>
          </li>
        </ul>
        <LaunchAppBtn />
      </div>
    </section>
  );
};

export default Section4;
