import Marquee from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
const logos = [
  {
    name: "Microsoft",
    img: "/Section-2/Section-2-Logo-1.png",
  },
  {
    name: "Apple",
    img: "/Section-2/Section-2-Logo-2.png",
  },
  {
    name: "Google",
    img: "/Section-2/Section-2-Logo-3.png",
  },
  {
    name: "Facebook",
    img: "/Section-2/Section-2-Logo-4.png",
  },
  {
    name: "LinkedIn",
    img: "/Section-2/Section-2-Logo-5.png",
  },
  {
    name: "Twitter",
    img: "/Section-2/Section-2-Logo-6.png",
  },
];

const Logo = ({ name, img }: { name: string; img: string }) => {
  return (
    <div className={cn(" cursor-pointer")}>
      <img className="  aspect-[1/1] object-contain" src={img} alt={name} />
    </div>
  );
};
const Section2 = () => {
  return (
    <section>
      <div className=" py-12  ">
        <div className=" relative space-y-5">
          <div>
            <h4 className="text-2xl bg-headingText font-semibold bg-clip-text text-center">
              Our Partners
            </h4>
          </div>
          <Marquee className="[--gap:3rem]">
            {logos.map((logo, idx) => (
              <Logo key={idx} {...logo} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-[8%] bg-gradient-to-r from-black dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-[8%] bg-gradient-to-l from-black dark:from-background"></div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
