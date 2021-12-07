import Logo from "cmp/Logo";

import {
  Route,
  NavLink,
  Switch,
  Redirect,
  useRouteMatch,
  useHistory,
} from "react-router-dom";

import ModeratorUsers from "#/#admin/#/ModeratorUsers";
import ModeratorBusinesses from "#/#admin/#/ModeratorBusinesses";
import { LogoutIcon } from "@heroicons/react/outline";
import { useCookies } from "react-cookie";

const Admin = () => {
  const [cookies, setCookie, removeCookie] = useCookies();

  const history = useHistory();

  let router = useRouteMatch();

  return (
    <div className="w-full flex bg-white">
      <div className="w-1/4 h-screen top-0 sticky left-0 bg-white | shadow-300">
        <div className="py-6">
          <Logo className="h-12 | px-8 |" />
          <div className="flex | h-full w-full max-w-xs p-4 py-10 bg-white">
            <ul className="flex flex-col w-full">
              <li className="my-px">
                <NavLink
                  to="/admin/users"
                  exact
                  className={(isActive) =>
                    !isActive
                      ? "flex flex-row items-center h-12 px-4 mb-3 rounded-lg text-gray-600 hover:bg-gray-50"
                      : "flex flex-row items-center h-12 px-4 mb-3 rounded-lg text-gray-600 bg-gray-50 | border-l-2 border-gray-300"
                  }
                >
                  <span className="flex items-center justify-center text-lg text-gray-400">
                    <svg
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </span>
                  <span className="ml-3">Foydalanuvchilar</span>
                  <span className="flex items-center justify-center text-sm text-gray-500 font-semibold bg-gray-200 h-6 px-2 rounded-full ml-auto">
                    1k
                  </span>
                </NavLink>
              </li>

              <li className="my-px">
                <NavLink
                  to="/admin/businesses"
                  exact
                  className={(isActive) =>
                    !isActive
                      ? "flex flex-row items-center h-12 px-4 mb-3 rounded-lg text-gray-600 hover:bg-gray-50"
                      : "flex flex-row items-center h-12 px-4 mb-3 rounded-lg text-gray-600 bg-gray-50 | border-l-2 border-gray-300"
                  }
                >
                  <span className="flex items-center justify-center text-lg text-gray-400">
                    <svg
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                    </svg>
                  </span>
                  <span className="ml-3">Bizneslar</span>
                </NavLink>
              </li>

              <li
                className="my-5 px-4 absolute inset-x-0 bottom-0"
                onClick={logout}
              >
                <a className="flex flex-row items-center h-12 px-4 rounded-lg text-red-600 hover:bg-red-50 | cursor-pointer">
                  <span className="flex items-center justify-center text-lg text-red-400">
                    <LogoutIcon className="h-7" />
                  </span>
                  <span className="ml-3">Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-4/5 overflow-auto">
        <Switch>
          <Route path={`${router.path}/users`}>
            <ModeratorUsers />
          </Route>

          <Route path={`${router.path}/businesses`}>
            <ModeratorBusinesses />
          </Route>

          <Redirect
            to={{
              pathname: "/admin/users",
            }}
          />
        </Switch>
      </div>
    </div>
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
};

export default Admin;
