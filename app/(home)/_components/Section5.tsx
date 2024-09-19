"use client";

import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

// Dynamically import ReactPlayer to prevent SSR issues
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const Section5 = () => {
  return (
    <section className="py-10 lg:py-16 container">
      <div className="space-y-3 max-w-[408px] mx-auto">
        <p className="text-xl text-center font-normal bg-clip-text bg-btnBg">
          News Updates
        </p>
        <h2 className="text-4xl text-center bg-clip-text bg-headingText font-medium leading-[110%]">
          Browse our Latest news Updates
        </h2>
      </div>
      <div className="pt-16 relative z-40 ">
        <div className="relative w-full z-40 pb-[56.25%]">
          {/* Aspect ratio container */}
          {/* <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/gEvJsqeuzVk?autoplay=1&loop=1&playlist=gEvJsqeuzVk&controls=1&fs=1&rel=0&modestbranding=1"
            title="OptimusZ7: Crafting Tomorrow's Blockchain Today"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe> */}
          <ReactPlayer
            className="absolute top-0 left-0 w-full h-full"
            url="https://www.youtube.com/watch?v=gEvJsqeuzVk"
            playing={true} // Enable autoplay
            loop={true} // Loop the video
            controls={true} // Show video controls
            muted
            width="100%"
            height="100%"
          />
        </div>

        <div className="flex relative z-30 pt-11  justify-center">
          <Button className="hover_btn rounded-none">
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
