import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Main from "#/#home/#/#main";
import AddBusiness from "#/#home/#/#add";
import Search from "#/#home/#/#search";
import Business from "#/#home/#/#business";

import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  MenuIcon,
  ViewGridIcon,
  XIcon,
  HomeIcon,
  CurrencyDollarIcon,
  NewspaperIcon,
  BriefcaseIcon,
  ShoppingBagIcon,
  UsersIcon,
  InboxIcon,
  ArchiveIcon,
  LogoutIcon,
  StarIcon,
  SearchIcon,
  ChatIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Logo from "cmp/Logo";
import cn from "clsx";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";

const solutions = [
  {
    name: "Asosiy",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: HomeIcon,
  },
  {
    name: "Mablag'ni Tekshirish",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Xabarlar",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: NewspaperIcon,
  },
  {
    name: "Onlayn do'kon",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: ShoppingBagIcon,
  },
  {
    name: "Biznes Market",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "#",
    icon: BriefcaseIcon,
  },
  {
    name: "Xamkorlar uchun",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "#",
    icon: UsersIcon,
  },
];
const resources = [
  {
    name: "Do'stlarga Taklif",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
    icon: InboxIcon,
  },
  {
    name: "Xaridlar Arxivi",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
    icon: ArchiveIcon,
  },
];

function Home(props) {
  const router = useRouteMatch();
  const history = useHistory();
  const [cookies, setCookie, removeCookie] = useCookies();

  const menu = [
    {
      name: "Home",
      href: "/home/main",
      icon: HomeIcon,
      active: router.url.includes("home/main") ? true : false,
    },
    {
      name: "Catalog",
      href: "/home/business",
      icon: ViewGridIcon,
      active: router.url.includes("home/business") ? true : false,
    },
    {
      name: "Search",
      href: "/home/search",
      icon: SearchIcon,
      active: router.url.includes("home/search") ? true : false,
    },
    {
      name: "Message",
      href: "/home/msg",
      icon: ChatIcon,
      active: router.url.includes("home/msg") ? true : false,
    },
    {
      name: "Profile",
      href: "/home/profile",
      icon: UserIcon,
      active: router.url.includes("home/profile") ? true : false,
    },
  ];

  if (!cookies.ACCESS_TOKEN) {
    history.push("/auth");
    return "";
  }

  return (
    <section className="relative">
      {/* TOP--MENU */}
      <>
        <Popover className="relative bg-white">
          <div className="px-3">
            <div className="flex justify-between items-center border-b-2 border-gray-100 py-4">
              <div className="-mr-2 -my-2">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>

              <div className="">
                <Logo className="h-8 w-auto" />
              </div>
            </div>
          </div>
          <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute top-0 inset-x-0 py-2 transition transform origin-top-right z-[1000]"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="fcb">
                    <Logo className="h-8 w-auto my-2" />

                    <div className="-mr-2">
                      <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 bg-gray-50 hover:bg-gray-100 focus:outline-none">
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      {solutions.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                        >
                          <item.icon
                            className="flex-shrink-0 h-6 w-6 text-bluish-400"
                            aria-hidden="true"
                          />
                          <span className="ml-3 text-base font-medium text-gray-900">
                            {item.name}
                          </span>
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
                <hr />
                <div className="py-6 px-5 space-y-6">
                  <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                    {resources.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                      >
                        <item.icon
                          className="flex-shrink-0 h-5 w-5 text-gray-600"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </div>
                  <div className="pt-5">
                    <a
                      className="flex flex-row items-center -m-3 px-4 py-2 rounded-lg text-red-600 hover:bg-red-50 | cursor-pointer "
                      onClick={logout}
                    >
                      <span className="flex items-center justify-center text-lg text-red-400">
                        <LogoutIcon className="h-5" />
                      </span>
                      <span className="ml-3 text-sm">Chiqish</span>
                    </a>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </>

      <Switch>
        <Route path={`/home/business/add`}>
          <AddBusiness />
        </Route>

        <Route path={`/home/business`}>
          <Business />
        </Route>

        <Route path={`/home/main`}>
          <Main />
        </Route>

        <Route path={`/home/search`}>
          <Search />
        </Route>
      </Switch>

      {/* BOTTOM--MENU */}
      <>
        <div className="bg-white rounded-t-xl | fixed inset-x-0 bottom-0 max-w-[500px] mx-auto">
          <div className="flex | py-3">
            {menu.map((m) => (
              <div className="flex-1 group">
                <Link to={m.href}>
                  <div
                    className={cn({
                      "flex items-end justify-center text-center mx-auto px-4 w-full duration-300": true,
                      "text-gray-400": !m.active,
                      "text-bluish": m.active,
                    })}
                  >
                    <span className="block px-1">
                      <m.icon className="h-7 stroke-1 mx-auto" />

                      <span
                        className={cn({
                          "block mt-2 mx-auto w-2 h-2 rounded-full duration-300": true,
                          "bg-gray-200 group-hover:bg-gray-400": !m.active,
                          "bg-bluish-500": m.active,
                        })}
                      ></span>
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </>
    </section>
  );

  async function logout() {
    try {
      removeCookie("ACCESS_TOKEN");
      removeCookie("REFRESH_TOKEN");
      removeCookie("IS_ADMIN");

      removeCookie("ACCESS_TOKEN");
      removeCookie("REFRESH_TOKEN");
      removeCookie("IS_ADMIN");

      history.push("/auth");
    } catch (error) {
      console.log(error);
    }
  }
}

export default Home;
