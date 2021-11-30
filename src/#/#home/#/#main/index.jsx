import { NewspaperIcon, ArchiveIcon, StarIcon } from "@heroicons/react/outline";
import { Tab } from "@headlessui/react";

import cn from "clsx";

import SvgEmpty from "icons/SvgEmpty";
import _ from "lodash";

import useInput from "hooks/useInput.jsx";

import { useEffect, useState } from "react";

import Posts from "./cmp/Posts";
import Sales from "./cmp/Sales";
import Bookmarks from "./cmp/Bookmarks";

const tabs = [
  {
    name: "Yangiliklar",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
    icon: NewspaperIcon,
    active: true,
  },
  {
    name: "Aksiyalar",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
    icon: ArchiveIcon,
  },

  {
    name: "Tanlangan",
    description: "Understand how we take your privacy seriously.",
    href: "#",
    icon: StarIcon,
  },
];

export default function Example() {
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

  return (
    <>
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
          value={searchInput}
          onChange={onSearch}
          className="w-full px-12 input input-primary border-gray-300 input-bordered rounded-md py-1 h-auto"
        />
      </div>
      <Tab.Group>
        <Tab.List>
          <div className="tabs w-full px-3">
            <nav className="fcb w-full space-x-1">
              {tabs.map((item) => (
                <Tab className="outline-none focus:outline-none | w-1/3 | flex">
                  {({ selected }) => (
                    <div
                      key={item.name}
                      href={item.href}
                      className={cn({
                        "w-full p-3 px-4 flex items-center rounded-t-md hover:bg-gray-50 fcc | border-b": true,
                        "border-bluish-500 bg-gray-50": selected,
                      })}
                    >
                      <item.icon
                        className={cn({
                          "flex-shrink-0 h-5 text-gray-400": true,
                          "text-bluish-400": selected,
                        })}
                        aria-hidden="true"
                      />
                      <span
                        className={cn({
                          "ml-1 text-sm font-medium text-gray-500": true,
                          "| text-bluish-500": selected,
                        })}
                      >
                        {item.name}
                      </span>
                    </div>
                  )}
                </Tab>
              ))}
            </nav>
          </div>
        </Tab.List>

        <Tab.Panels className="outline-none focus:outline-none">
          <Tab.Panel className="outline-none focus:outline-none">
            <Posts search={search} />
          </Tab.Panel>

          <Tab.Panel className="outline-none focus:outline-none">
            <Sales />
          </Tab.Panel>
          <Tab.Panel className="outline-none focus:outline-none">
            <Bookmarks />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </>
  );
}
