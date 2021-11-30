import { NewspaperIcon, ArchiveIcon, StarIcon } from "@heroicons/react/outline";
import { Tab } from "@headlessui/react";

import Carousel from "cmp/Carousel";

import useToggle from "hooks/useToggle.jsx";
import useInput from "hooks/useInput.jsx";

import { useEffect, useState } from "react";
import Spinner from "cmp/Spinner";
import cn from "clsx";
import SvgEmpty from "icons/SvgEmpty";
import _ from "lodash";
import useSWR from "swr";
import API, { getCookie } from "config/API";

function Posts(props) {
  const { data, error } = useSWR(
    ["posts/favorite/", getCookie("ACCESS_TOKEN")],
    API
  );

  if (error) {
    return "Error";
  }

  return (
    <main className="px-3 pt-7 | h-full overflow-y-auto fcc flex-col">
      <>
        <div className="articles ">
          {data && (
            <div className="fcc pb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-bluish"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
              <h1 className="text-bluish text-xl text-center font-bold ml-2">
                Maqolalar:
              </h1>
            </div>
          )}

          {data ? (
            data.data.news.results.map((p, index) => (
              <article className="flex | mb-10 max-h-56 | shadow-200 rounded-md overflow-hidden | cursor-pointer hover:shadow-400 duration-300">
                <div
                  className={cn({
                    "w-32 md:w-40 | overflow-hidden | flex-shrink-0": true,
                    "order-2": index % 2 != 0,
                  })}
                >
                  <img
                    src={p.font_photo}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="px-5 py-2 flex flex-col leading-normal">
                  <h5 className="text-gray-900 font-bold tracking-tight text-sm md:text-base">
                    {p.title}
                  </h5>
                  <p className="font-normal md:text-sm text-gray-700 mt-3 | text-xs">
                    {_.truncate(p.font_text, {
                      length: 100,
                      separator: /,? +/,
                      omission: "  . . .  ",
                    })}
                  </p>
                </div>
              </article>
            ))
          ) : (
            <Spinner />
          )}
        </div>

        <>
          <main className="pb-24 pt-12 | h-full fcc flex-col">
            {data && (
              <div className="fcc pb-5 w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-bluish"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  />
                </svg>
                <h1 className="text-bluish text-xl text-center font-bold ml-2">
                  Aksiyalar:
                </h1>
              </div>
            )}

            {data &&
              data?.data?.discount?.results.map((d, index) => (
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
          </main>
        </>
      </>

      <div
        className={cn({
          hidden: data,
        })}
      >
        <SvgEmpty className="h-40 | my-12" />
        <h1 className="font-bold text-xl text-bluish-500 | uppercase">
          Saqlab qo'yilganlar yo'q
        </h1>
      </div>
    </main>
  );
}

export default Posts;
