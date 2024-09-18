import LaunchAppBtn from "@/components/LaunchAppBtn";
import TypingAnimation from "@/components/magicui/typing-animation";
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
            <TypingAnimation
              className="bg-clip-text text-left uppercase bg-headingText font-medium leading-[100%] text-[3.125rem] xl:text-[4.375rem]"
              text="Redefining Financial Freedom"
              duration={100}
            />
          </div>
          <p className="text-base xl:text-xl font-normal text-white">
            Unlock limitless possibilities with a decentralized approach to
            managing your assets.{" "}
            <b>
              Powered by{" "}
              <a
                target="_blank"
                href="https://www.optimusz7.com/"
                className="bg-clip-text bg-btnBg"
              >
                OptimusZ7
              </a>{" "}
              for lightning-fast, low-cost transactions.
            </b>
          </p>
          <LaunchAppBtn />
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
