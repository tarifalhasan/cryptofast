import Image from "next/image";

const MobileHeader = () => {
  return (
    <header className="container lg:hidden z-50 flex items-center justify-between  fixed left-0 right-0 top-3">
      <div>
        <Image src={"/images/logo.png"} alt="logo" width={229} height={72} />
      </div>
      <button>
        <Image
          src={"/Navbar/Menu-Icon.png"}
          alt="menu"
          width={32}
          height={32}
        />
      </button>
    </header>
  );
};

export default MobileHeader;
