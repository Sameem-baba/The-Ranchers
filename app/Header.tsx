import Image from "next/image";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 max-w-[90rem] mx-auto bg-transparent">
      <div className="logo">
        <Image src="/logo.png" alt="Logo" width={150} height={50} />
      </div>
      <div className="mx-1 flex cursor-pointer items-center justify-center rounded-2xl bg-[#191B1F] px-1 py-1 text-[0.9rem] font-semibold">
        <div
          // onClick={() => handleAuth()}
          className={`mx-2 flex cursor-pointer items-center rounded-2xl bg-[#191B1F] md:text-[0.9rem] font-semibold`}
        >
          <div
            className={`flex h-full items-center justify-center text-sm md:text-base rounded-2xl border border-[#163256] bg-[#172A42] px-2 py-1 text-[#4F90EA] hover:border-[#234169]`}
          >
            Connect Wallet
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
