import { Button } from "@/components/ui/button";

const Section5 = () => {
  return (
    <section className="py-10 lg:py-16 container">
      <div className="space-y-3 max-w-[408px] mx-auto">
        <p className="text-xl text-center font-normal bg-clip-text bg-btnBg">
          News Updates
        </p>
        <h2 className="text-4xl text-center bg-clip-text bg-headingText font-medium leading-[110%]">
          Browse ourLatest news Updates
        </h2>
      </div>
      <div className="pt-16">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-4 h-[463px] bg-no-repeat bg-cover flex flex-col justify-end bg-[url('/Section-5/Section-5-Image-1.png')] border border-[#393939] p-10">
            <div className="space-y-4">
              <div className="py-[9.34px] rounded-full inline-flex px-5 bg-black/25">
                <span className="text-sm font-bold text-white">
                  FEATURED INSIGHT
                </span>
              </div>
              <h2 className="text-white text-[1.625rem] font-bold leading-[120%]">
                Crypto brings teams together around insights with Google
                Marketing Platform
              </h2>
            </div>
          </div>
          <div className=" col-span-12 lg:col-span-8 h-[463px] bg-no-repeat bg-cover flex flex-col justify-end bg-[url('/Section-5/Section-5-Image-2.png')] border border-[#393939] p-10">
            <div className="space-y-4">
              <div className="py-[9.34px] rounded-full inline-flex px-5 bg-black/25">
                <span className="text-sm font-bold text-white">
                  FEATURED INSIGHT
                </span>
              </div>
              <h2 className="text-white max-w-[643px] text-[1.625rem] font-bold leading-[120%]">
                Bain report: How top brands grow with timely customer
                connections.
              </h2>
              <p className="text-lg max-w-[643px] font-normal leading-[140%]">
                Office ipsum you must be muted. Give wheel boy recap red-flag
                replied customer world job. Old call intersection company pants.
              </p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4 h-[463px] bg-no-repeat bg-cover flex flex-col justify-end bg-[url('/Section-5/Section-5-Image-3.png')] border border-[#393939] p-10">
            <div className="space-y-4">
              <div className="py-[9.34px] rounded-full inline-flex px-5 bg-black/25">
                <span className="text-sm font-bold text-white">
                  FEATURED INSIGHT
                </span>
              </div>
              <h2 className="text-white text-[1.625rem] font-bold leading-[120%]">
                Crypto brings teams together around insights with Google
                Marketing Platform
              </h2>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4 h-[463px] bg-no-repeat bg-cover flex flex-col justify-end bg-[url('/Section-5/Section-5-Image-4.png')] border border-[#393939] p-10">
            <div className="space-y-4">
              <div className="py-[9.34px] rounded-full inline-flex px-5 bg-black/25">
                <span className="text-sm font-bold text-white">
                  FEATURED INSIGHT
                </span>
              </div>
              <h2 className="text-white text-[1.625rem] font-bold leading-[120%]">
                Crypto brings teams together around insights with Google
                Marketing Platform
              </h2>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4 h-[463px] bg-no-repeat bg-cover flex flex-col justify-end bg-[url('/Section-5/Section-5-Image-5.png')] border border-[#393939] p-10">
            <div className="space-y-4">
              <div className="py-[9.34px] rounded-full inline-flex px-5 bg-black/25">
                <span className="text-sm font-bold text-white">
                  FEATURED INSIGHT
                </span>
              </div>
              <h2 className="text-white text-[1.625rem] font-bold leading-[120%]">
                Crypto brings teams together around insights with Google
                Marketing Platform
              </h2>
            </div>
          </div>
        </div>
        <div className="flex pt-11  justify-center">
          <Button className=" rounded-none">
            More updates
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
    </section>
  );
};

export default Section5;
