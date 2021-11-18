import { NewspaperIcon, ArchiveIcon, StarIcon } from "@heroicons/react/outline";
import { Tab } from "@headlessui/react";

import cn from "clsx";
import Carousel from "cmp/Carousel";
import SvgEmpty from "icons/SvgEmpty";

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
            <main className="px-3 pt-7 | h-full overflow-y-auto">
              <div>
                <Carousel
                  autoplay={true}
                  withoutControls={false}
                  slidesToScroll={1}
                >
                  <div className="h-40 | rounded-md overflow-hidden">
                    <img
                      src="https://www.instrument.uz/images/full-banner.png"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="h-40 | rounded-md overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=815&q=80"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </Carousel>
              </div>

              <div className="articles | pt-24 pb-24">
                {[0, 1, 2, 3, 4, 5].map((article, index) => (
                  <article className="flex | mb-10 h-32 | shadow-200 rounded-md overflow-hidden | cursor-pointer hover:shadow-400 duration-300">
                    <div
                      className={cn({
                        "w-32 md:w-40 | overflow-hidden | flex-shrink-0": true,
                        "order-2": index % 2 != 0,
                      })}
                    >
                      <img
                        src="https://flowbite.com/docs/images/blog/image-4.jpg"
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="px-5 py-2 flex flex-col leading-normal">
                      <h5 className="text-gray-900 font-bold tracking-tight text-sm md:text-base">
                        Noteworthy technology acquisitions 2021
                      </h5>
                      <p className="font-normal md:text-sm text-gray-700 mt-3 | text-xs">
                        Here are the biggest enterprise technology acquisitions
                        of 2021 so far.
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </main>
          </Tab.Panel>

          <Tab.Panel className="outline-none focus:outline-none">
            <main className="px-3 pt-7 | h-full overflow-y-auto fcc flex-col">
              <SvgEmpty className="h-40 | my-12" />
              <h1 className="font-bold text-xl text-bluish-500 | uppercase">
                Aksiyayalar yo'q
              </h1>
            </main>
          </Tab.Panel>
          <Tab.Panel className="outline-none focus:outline-none">
            <main className="px-3 pt-7 | h-full overflow-y-auto fcc flex-col">
              <SvgEmpty className="h-40 | my-12" />
              <h1 className="font-bold text-xl text-bluish-500 | uppercase">
                Saqlab qo'yilganlar yo'q
              </h1>
            </main>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </>
  );
}
