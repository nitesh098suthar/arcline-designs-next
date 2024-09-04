import Link from "next/link";
import notfound from "/images/notfound.png";
import Image from "next/image";

const NotFound = () => {
  return (
    <>
      <div className="min-h-[680px]">
        <h1 className="text-center text-4xl text-black py-14 font-bold">
          Page Not Found
        </h1>
        <div className="flex justify-center">
          <Image
            src={notfound}
            alt="not found"
            width={100}
            height={100}
            className="w-1/2"
          />
        </div>
        <div className="flex justify-center text-center mt-12">
          <Link href="/" className="">
            <button className="cursor-pointer hover:bg-green-700 bg-greenColor rounded-md w-40 h-[35px] outline-none pb-1 inline-block text-center text-white">
              Go to Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
