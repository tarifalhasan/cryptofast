import Image from "next/image";
import Link from "next/link";
import LaunchAppBtn from "./LaunchAppBtn";

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
          <a
            target="_blank"
            className="text-base font-medium text-white"
            href={"https://www.OptimusZ7.com"}
          >
            OptimusZ7
          </a>
        </li>
      </ul>
      <LaunchAppBtn />
    </header>
  );
};

export default Header;
