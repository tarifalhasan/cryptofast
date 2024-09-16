import bgG from "@/public/Section-6/Section-6-Background.png";
import Image from "next/image";
const Section6 = () => {
  return (
    <section className="relative pt-[7rem]">
      <div className="container flex   relative z-30 flex-col gap-y-6 bg-[#0B0A0C] px-5 py-[70px] lg:px-14">
        <div>
          <h2 className="text-[2.625rem] font-medium bg-clip-text bg-headingText">
            Download Our App
          </h2>
        </div>
        <p className="max-w-[479px]  text-lg font-normal">
          Take your trading experience anywhere. Access all features seamlessly,
          right from your mobile device.
        </p>
        <div className="flex items-center gap-2">
          <button>
            <Image
              src={"/Section-6/Store-Badge-1.svg"}
              alt="google play"
              className=" flex-1 lg:max-w-[165px]"
              quality={80}
              width={500}
              height={50}
            />
          </button>
          <button>
            <Image
              src={"/Section-6/Store-Badge-2.svg"}
              alt="google play"
              className=" flex-1 lg:max-w-[165px]"
              quality={80}
              width={500}
              height={50}
            />
          </button>
        </div>
        <Image
          className=" lg:absolute  lg:top-[-45%] lg:left-[60%]"
          src={"/Section-6/Section-6-Image.png"}
          alt="Section-6-Image.png"
          width={336}
          height={709}
        />
      </div>
      <Image className=" absolute bottom-0 z-10" src={bgG} alt="bg" />
    </section>
  );
};

export default Section6;
