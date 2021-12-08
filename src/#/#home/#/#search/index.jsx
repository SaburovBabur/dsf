import {
  EyeIcon,
  InformationCircleIcon,
  LocationMarkerIcon,
  PhoneIcon,
  PlusIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import _ from "lodash";
import useAPI from "hooks/useAPI";
import Spinner from "cmp/Spinner";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCookie, HTTP } from "config/API";
import useInput from "hooks/useInput";
import { useForm } from "react-hook-form";
import { Popover, Transition } from "@headlessui/react";
import Select from "cmp/Select";
import SvgEmpty from "icons/SvgEmpty";

function Search(props) {
  const [businessList, setBusinessList] = useState(false);
  const [search, onSearch] = useInput(null);
  const [searchInput, setSearchInput] = useState(null);

  const [filter, setFilter] = useState({
    full_name: null,
    group_number: null,
    region: null,
    activity_type: null,
    phone_number: null,
  });

  const { register, handleSubmit } = useForm({
    defaultValues: {
      group_number: null,
      phone_number: null,
      full_name: null,
    },
  });

  useEffect(() => {
    const change = setTimeout(() => {
      setSearchInput(search);
    }, 250);

    return () => {
      clearInterval(change);
    };
  }, [search]);

  useEffect(() => {
    getBusinessList();
  }, [searchInput, filter]);

  const { data: businessData, error: businessError } = useAPI(
    `profile/business-activity/`
  );
  const { data: addressData, error: addressError } = useAPI(
    `profile/business-region/`
  );

  const [selectType, setType] = useState([]);
  const [selectAddress, setAddress] = useState([]);

  if (!businessData || !addressData || businessError || addressError) {
    return (
      <div className="h-[calc(100vh-7rem)] w-full fcc py-12">
        <Spinner />
      </div>
    );
  }
  function getBusinessList() {
    const url = "/profile/business/";
    setBusinessList(false);

    HTTP(url, {
      headers: {
        Authorization: `Bearer ${getCookie("ACCESS_TOKEN")}`,
      },
      params: {
        search: searchInput,
        full_name: filter.full_name,
        group_number: filter.group_number,
        region: filter.region,
        activity_type: filter.activity_type,
        phone_number: filter.phone_number,
      },
    }).then((response) => {
      setBusinessList(response.data);
    });
  }

  console.log(filter);

  return (
    <div>
      <Popover className="relative">
        <div className="search | fc w-full">
          <div className="relative w-full | mt-7 mb-7 px-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 | absolute left-7 top-2 | text-gray-400 | pointer-events-none"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>

            <input
              type="text"
              placeholder="Qidirish..."
              value={search}
              onChange={onSearch}
              className="w-full px-12 input input-primary border-gray-300 input-bordered rounded-md py-1 h-auto"
            />
          </div>

          <Popover.Button className="outline-none focus:outline-none p-2">
            <div className="filter | bg-blue-50 hover:bg-blue-100 p-2 | rounded-md | cursor-pointer | click:scale">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 | text-bluish-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </div>
          </Popover.Button>
        </div>

        <Popover.Panel>
          {({ close }) => (
            <div className="py-7 p-5 space-y-7 | shadow-300 rounded-md">
              <input
                type="text"
                placeholder="Biznes nomi..."
                className="w-full input input-primary border-gray-300 input-bordered rounded-md py-2 h-auto"
                value={search}
                onChange={onSearch}
              />

              <Select
                by={`name`}
                options={businessData?.data || []}
                onSelect={(e) => setType(e)}
              />

              <Select
                by={`name`}
                options={addressData?.data || []}
                onSelect={(e) => setAddress(e)}
              />

              <input
                type="text"
                placeholder="F.I.SH"
                className="w-full input input-primary border-gray-300 input-bordered rounded-md py-2 h-auto"
                {...register("full_name")}
              />

              <input
                type="number"
                placeholder="Telefon raqami.."
                className="w-full input input-primary border-gray-300 input-bordered rounded-md py-2 h-auto"
                {...register("phone_number")}
              />

              <input
                type="text"
                placeholder="Gurux raqami"
                className="w-full input input-primary border-gray-300 input-bordered rounded-md py-2 h-auto"
                {...register("group_number")}
              />

              <button
                className={`fc | btn btn-outline btn-block bg-bluish hover:bg-bluish-600 font-bold border-none text-white | outline-none |`}
                onClick={handleSubmit((e) => onFilter(e, close))}
              >
                Qidirish <SearchIcon className="h-4 | ml-4" />
              </button>
            </div>
          )}
        </Popover.Panel>
      </Popover>

      <div className="px-3">
        <div className="listing | py-5">
          {businessList &&
            businessList?.map((b, index) => (
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
          {!businessList && (
            <div className="pb-7">
              <Spinner />
            </div>
          )}

          {businessList.length === 0 && (
            <div className="fcc flex-col w-full">
              <SvgEmpty className="h-40 " />
              <h1 className="font-bold text-bluish-500 | uppercase py-7">
                Bizneslar topilmadi
              </h1>
            </div>
          )}

          <div className="w-full pb-24">
            <Link to={`/home/business/add`}>
              <div className="uppercase | border-2 border-dotted text-sm border-bluish-200 text-bluish font-bold hover:border-bluish-300 | block | rounded-md fcc py-3 | click:scale">
                <PlusIcon className="h-12 | text-bluish-400" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  function onFilter(props, close) {
    const newFilter = { ...filter, ...props };

    newFilter.activity_type = selectType?.id || null;
    newFilter.region = selectAddress?.id || null;

    setFilter(newFilter);

    close();
  }
}
export default Search;
