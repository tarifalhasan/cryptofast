import { Button } from "@/components/ui/button";
import Image from "next/image";

const Section1 = () => {
  return (
    <section className=" min-h-screen relative overflow-hidden lg:flex lg:flex-col lg:justify-end w-full bg-section1Bg bg-cover  bg-center bg-no-repeat">
      <div className="lg:sr-only container pt-[8rem]">
        <Image
          src={"/Section-1/Section-1-Image.png"}
          width={340}
          height={240}
          className=" w-full object-cover"
          quality={80}
          alt="Redefining Financial Freedom"
        />
      </div>
      <div className="container pt-[4rem]   lg:pt-[0]">
        <div className=" relative  z-20  lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:max-w-[576px] xl:max-w-[678px] space-y-5">
          <div>
            <h1 className="bg-clip-text bg-headingText font-medium leading-[110%] text-[3.125rem] xl:text-[4.375rem]">
              Redefining Financial Freedom
            </h1>
          </div>
          <p className="text-base xl:text-xl font-normal text-white">
            Unlock limitless possibilities with a decentralized approach to
            managing your assets.{" "}
            <b>
              Powered by OptimusZ7 for lightning-fast, low-cost transactions.
            </b>
          </p>
          <Button>
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
      </div>
      <div className=" absolute  lg:top-1/2 -translate-y-1/2 right-0 hidden lg:block">
        <Image
          src={"/Section-1/Section-1-Image.png"}
          width={543}
          height={533}
          className=" w-full lg:max-w-[420px] xl:max-w-[545px] 2xl:max-w-[750px] object-cover"
          quality={80}
          alt="Redefining Financial Freedom"
        />
      </div>
    </section>
  );
};

export default Section1;
