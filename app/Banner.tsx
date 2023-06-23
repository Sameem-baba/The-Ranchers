import { Permanent_Marker } from "next/font/google";
import Image from "next/image";

const permenant_marker = Permanent_Marker({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const Banner = () => {
  return (
    <div className="relative h-screen">
      <video
        className="absolute top-0 left-0 z-0 w-full h-full object-cover"
        src="/bg-animation.mp4"
        autoPlay
        muted
        loop
      ></video>
      <div className="absolute top-0 left-0 w-full h-full z-10 bg-black opacity-60"></div>
      <div className=" relative mx-auto px-4 h-full z-20 flex items-center justify-center max-w-[85rem] w-full">
        <div className="md:flex md:items-center md:w-[60%] md:justify-between">
          <div className="md:w-2/3">
            <h1 className="text-white text-4xl font-bold mb-4">
              Introducing: The Ranchers
            </h1>
            <p className="text-white text-lg mb-6">
              The Bermuda Brawl is an engaging NFT project designed to provide
              an immersive and competitive experience for NFT owners. It
              combines elements of strategic battles, engagement challenges, and
              long-term investment rewards.
            </p>
            <button
              // onClick={() => handleShow(true)}
              className={`button-animation mt-10 w-fit shadow-xl rounded-full font-marker px-5 py-3 font-marker uppercase ${permenant_marker.className} `}
            >
              ENTER THE RANCH
            </button>
          </div>
        </div>
        <div className="grid-template grid h-fit w-full gap-4 md:w-[30%]">
          <Image
            src="/images/1.png"
            alt=""
            height={50}
            width={50}
            unoptimized={true}
            className="h-auto w-full rounded-md object-contain"
          />
          <Image
            src="/images/2.png"
            alt=""
            height={50}
            unoptimized={true}
            width={50}
            className="h-auto w-full rounded-md object-contain"
          />
          <Image
            src="/images/3.png"
            alt=""
            unoptimized={true}
            height={50}
            width={50}
            className="h-auto w-full rounded-md object-contain"
          />
          <Image
            src="/images/4.png"
            alt=""
            unoptimized={true}
            height={50}
            width={50}
            className="h-auto w-full rounded-md object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
