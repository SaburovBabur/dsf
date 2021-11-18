import { ArrowRightIcon } from "@heroicons/react/outline";

function CompleteAuth(props) {
  return (
    <div className="fcc | h-full w-full">
      <div className="md:shadow-300 | px-7 py-5 | rounded-md">
        <div className="h-32 md:h-36 | fcc">
          <img
            src="/storage/send.png"
            alt="success"
            className="h-full object-contain"
          />
        </div>
        <h1 className="text-2xl font-black text-center | pt-7">
          Sorovnoma qabul qilindi.
        </h1>

        <p className="text-sm md:text-base text-center text-[#6C6C6C] | mt-2">
          Qisqa muddat ichida moderatorlar sizni ro'yxattan o'tkazishadi.
        </p>

        <div className="fcc | w-full | mt-5">
          <button className="fc | btn btn-block bg-bluish hover:bg-bluish-600 font-bold border-none text-white | outline-none | py-1">
            Bosh Saxifa <ArrowRightIcon className="h-4 | ml-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CompleteAuth;
