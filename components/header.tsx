import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="container z-50 hidden lg:flex justify-between left-0 right-0 top-5 fixed">
      <div>
        <Image src={"/images/logo.png"} alt="logo" width={229} height={72} />
      </div>
      <ul className="inline-flex items-center gap-8">
        <li>
          <Link className="text-base font-medium text-white" href={"#products"}>
            Products
          </Link>
        </li>
        <li>
          <Link className="text-base font-medium text-white" href={"#products"}>
            Components
          </Link>
        </li>
        <li>
          <Link className="text-base font-medium text-white" href={"#products"}>
            About
          </Link>
        </li>
        <li>
          <Link className="text-base font-medium text-white" href={"#products"}>
            News Update
          </Link>
        </li>
      </ul>
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
    </header>
  );
};

export default Header;
