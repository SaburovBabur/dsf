import {
  InformationCircleIcon,
  LocationMarkerIcon,
  PhoneIcon,
  PlusIcon,
} from "@heroicons/react/outline";

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

import { Link } from "react-router-dom";

function Business(props) {
  const { data, error } = useSWR(
    ["profile/user-business/", getCookie("ACCESS_TOKEN")],
    API
  );

  if (error) {
    return "Error";
  }
  console.log(data);
  return (
    <div className="px-3">
      <div className="listing | py-5">
        {data &&
          data?.data?.map((b, index) => (
            <div className="business | shadow-300 px-5 py-5 | mb-7">
              <div className="title | fc">
                <div className="w-20 h-20 | shadow-300 overflow-hidden rounded-lg | flex-shrink-0">
                  <img
                    src={b.logo}
                    alt=""
                    className="h-full object-contain object-center"
                  />
                </div>

                <div className="info | w-full">
                  <h1 className="font-bold text-lg | pl-7">{b.name}</h1>
                  <div className="flex flex-wrap">
                    <div className="fc | pl-7 | pt-3">
                      <InformationCircleIcon className="h-5 text-gray-300" />
                      <h3 className="pl-2 | text-gray-500 text-sm | capitalize">
                        {b.activity_type_name}
                      </h3>
                    </div>

                    <div className="fc | pl-7 | pt-3">
                      <LocationMarkerIcon className="h-5 text-gray-300" />
                      <h3 className="pl-2 | text-gray-500 text-sm">
                        {b.region_name}
                      </h3>
                    </div>

                    <div className="fc | pl-7 | pt-3">
                      <PhoneIcon className="h-5 text-gray-300" />
                      <h3 className="pl-2 | text-gray-500 text-xs">
                        +{b.user_phone_number}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        <div className="pb-7">{!data && <Spinner />}</div>

        <div className="w-full pb-24">
          <Link to={`/home/business/add`}>
            <div className="uppercase | border-2 border-dotted text-sm border-bluish-200 text-bluish font-bold hover:border-bluish-300 | block | rounded-md fcc py-3 | click:scale">
              <PlusIcon className="h-12 | text-bluish-400" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Business;
