import cn from "clsx";
import SvgEmpty from "icons/SvgEmpty";
import _ from "lodash";
import useSWR from "swr";
import API, { getCookie } from "config/API";

import Spinner from "cmp/Spinner";

export default function Sales(props) {
  let { data: discounts } = useSWR(
    ["posts/discount", getCookie("ACCESS_TOKEN")],
    API
  );

  return (
    <>
      <main className="px-3 py-7 pb-24 | h-full overflow-y-auto fcc flex-col">
        {discounts &&
          discounts?.data?.results.map((d, index) => (
            <article className="flex | p-3 shadow-300 hover:shadow-400 duration-300 mb-7 rounded-lg | cursor-pointer">
              <div className="img | w-1/2 | rounded-lg overflow-hidden">
                <img src={d.font_photo} alt="discount" />
              </div>
              <div className="body | w-1/2 | pl-5">
                <h1 className="bg-yellow-100 px-2 py-1 inline-block rounded-md text-yellow-500 font-bold | ">
                  {d.title}
                </h1>
                <p className="font-normal md:text-sm text-gray-700 mt-3 | text-xs">
                  {_.truncate(d.font_text, {
                    length: 100,
                    separator: /,? +/,
                    omission: "  . . .  ",
                  })}
                </p>
              </div>
            </article>
          ))}

        {!discounts && <Spinner />}

        <div
          className={cn({
            hidden: discounts?.data?.results?.length > 0,
          })}
        >
          <SvgEmpty className="h-40 | my-12" />
          <h1 className="font-bold text-xl text-bluish-500 | uppercase">
            Aksiyayalar yo'q
          </h1>
        </div>
      </main>
    </>
  );
}
