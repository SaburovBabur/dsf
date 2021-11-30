import { NewspaperIcon, ArchiveIcon, StarIcon } from "@heroicons/react/outline";
import { Tab } from "@headlessui/react";

import cn from "clsx";
import Carousel from "cmp/Carousel";
import SvgEmpty from "icons/SvgEmpty";
import _ from "lodash";
import useToggle from "hooks/useToggle.jsx";
import useInput from "hooks/useInput.jsx";
import useSWR from "swr";
import API, { getCookie } from "config/API";
import { useEffect, useState } from "react";
import Spinner from "cmp/Spinner";

function Posts(props) {
  const [searchInput, onSearch] = useInput();
  const [search, setSearch] = useState();

  useEffect(() => {
    const change = setTimeout(() => {
      setSearch(searchInput);
    }, 250);

    return () => {
      clearInterval(change);
    };
  }, [searchInput]);

  const {
    data: carouselData,
    carouselError,
    carouselLoading,
  } = useSWR(["posts/carousel/", getCookie("ACCESS_TOKEN")], API);

  const {
    data: postsData,
    postsError,
    postsLoading,
  } = useSWR(
    [
      `posts/news/${props.search && "?search=" + props.search}`,
      getCookie("ACCESS_TOKEN"),
    ],
    API
  );

  if (carouselError || postsError) {
    return "Error";
  }

  return (
    <main className="px-3 pt-7 | h-full overflow-y-auto">
      <div>
        <Carousel autoplay={true} withoutControls={false} slidesToScroll={1}>
          {carouselData ? (
            carouselData.data?.map((s, index) => (
              <div className="h-40 | rounded-md overflow-hidden" key={index}>
                <img src={s.image} className="h-full w-full object-cover" />
              </div>
            ))
          ) : (
            <Spinner />
          )}
        </Carousel>
      </div>

      <div className="articles | pt-24 pb-24">
        {postsData ? (
          postsData.data.results.map((p, index) => (
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
    </main>
  );
}

export default Posts;
