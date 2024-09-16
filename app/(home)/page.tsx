import Image from "next/image";
import Section1 from "./_components/Section1";
import Section2 from "./_components/Section2";
import Section3 from "./_components/Section3";
import Section4 from "./_components/Section4";

export default function Home() {
  return (
    <div>
      <div className=" relative">
        <Section1 />
        <Section2 />
        <Image
          src={"/Section-1/Coin-Wave-Image.png"}
          width={1140}
          height={835}
          className=" w-full absolute top-[28%] z-10 lg:top-[35%] 2xl:top-[35%] xl:top-[40%]  object-cover"
          quality={80}
          alt="Redefining Financial Freedom"
        />
      </div>
      <Section3 />
      <Section4 />
    </div>
  );
}
