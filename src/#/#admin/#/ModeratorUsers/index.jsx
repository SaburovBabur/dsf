import cn from "clsx";
import _ from "lodash";
import Register from "#/#auth/#/Register";
import useToggle from "hooks/useToggle.jsx";
import useSWR from "swr";
import API from "config/API";

function ModeratorUsers(props) {
  const [drawer, toggleDrawer] = useToggle();

  const { data, error, loading } = useSWR(
    ["backoffice/users/?status=false", getCookie("ACCESS_TOKEN")],
    API
  );

  if (loading) {
    return "Loading";
  }

  if (!data?.data) {
    return "Loading";
  }

  if (error) {
    return "Error";
  }

  const { data: users } = data;

  const people = [
    {
      id: "1",
      name: "Jane Cooper",
      koaching: "1",
      group: "1",
      title: "Regional Paradigm Technician",
      department: "Optimization",
      role: "Admin",
      email: "jane.cooper@example.com",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },

    {
      id: "2",
      name: "Jane Cooper",
      koaching: "2",
      group: "1",
      title: "Regional Paradigm Technician",
      department: "Optimization",
      role: "Admin",
      email: "jane.cooper@example.com",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
  ];

  return (
    <div className="px-12 py-12">
      <div
        className={cn({
          "drawer | shadow-300 absolute inset-0 | z-50 | flex justify-end": true,
          "opacity-0 hidden": !drawer,
        })}
      >
        <div
          className="bg-gray-500 bg-opacity-50 | w-3/5 | cursor-pointer"
          onClick={() => toggleDrawer()}
        ></div>
        <div className="drawer | bg-white w-2/5 px-5 py-5">
          <h1 className="text-lg font-bold text-center">
            Foydalanuvchi qo'shish
          </h1>
          <Register controlled={true} />
        </div>
      </div>

      <div className="fcb">
        <h1 className="font-bold text-xl">Foydalanuvchilarni tasdiqlash</h1>

        <div class="avatar | fc">
          <div class="rounded-full w-12 h-12">
            <img src="https://media.gettyimages.com/photos/closeup-smiling-male-leader-wearing-eyeglasses-picture-id1179627340?s=612x612" />
          </div>

          <h1 className="font-bold text-md pl-3">Ibrohim Gulyamov</h1>
        </div>
      </div>

      <div className="search | mt-12 | fc w-full">
        <div class="relative w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 | absolute left-4 top-1/4 | text-bluish-400 | pointer-events-none"
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
            placeholder="Ism | Guruh | Email  -  orqali qidirish..."
            class="w-full px-12 input input-primary border-bluish-300 input-bordered rounded-full"
          />
        </div>

        <div className="filter | bg-blue-50 hover:bg-blue-100 p-3 ml-5 | rounded-md | cursor-pointer | click:scale">
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
      </div>

      <div className="add | pt-12 w-full flex justify-end">
        <a
          href="#"
          className="uppercase | border-2 border-dotted text-sm border-bluish-200 text-bluish font-bold hover:border-bluish-300 | w-1/3 block | rounded-md fcc py-3 | click:scale"
          onClick={() => toggleDrawer()}
        >
          + Foydlanuvchi qo'shish
        </a>
      </div>

      <div className="flex flex-col | my-12">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      ID
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      F.I.Sh
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Koaching
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Guruh
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    ></th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {users.map((user) => (
                    <tr key={user.email}>
                      <td className="px-6 py-4 whitespace-nowrap | text-gray-500">
                        1
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={user.image || "/pcg/favicon-32x32.png"}
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {user.first_name + " " + user.last_name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {user.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {user?.psgroups_list[0]?.coaching_type}
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {user?.psgroups_list[0]?.group_number}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium | fc space-x-3">
                        <a
                          href=""
                          className="fcc | bg-blue-50 hover:bg-bluish-100 p-2 mr-5 | rounded-full"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7 | text-bluish-500  | cursor-pointer"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        </a>

                        <a
                          href=""
                          className="fcc | bg-green-50 hover:bg-green-100 p-2 | rounded-full"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 | text-green-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </a>
                        <a
                          href=""
                          className="fcc | bg-red-50 hover:bg-red-100 p-2 | rounded-full"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 | text-red-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  function getCookie(name) {
    var match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
    if (match) return match[2];
  }
}

export default ModeratorUsers;
