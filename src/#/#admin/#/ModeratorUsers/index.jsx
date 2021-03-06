import cn from "clsx";
import _ from "lodash";
import Register from "#/#auth/#/Register";
import useToggle from "hooks/useToggle.jsx";
import useSWR from "swr";
import API, { HTTP } from "config/API";
import { useEffect, useState } from "react";
import Select from "cmp/Select";
import {
  ArrowRightIcon,
  ExclamationIcon,
  EyeIcon,
  LightBulbIcon,
} from "@heroicons/react/outline";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { useAlert } from "react-alert";
import Spinner from "cmp/Spinner";
import SvgEmpty from "icons/SvgEmpty";

function ModeratorUsers(props) {
  const [drawer, toggleDrawer] = useToggle();
  const [filter, toggleFilter] = useToggle();
  const [note, setNote] = useState("");

  const [data, setData] = useState(false);

  // Filter SETTERS
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [fullName, setFullName] = useState(null);
  const [coachingNumber, setCoachingNumber] = useState(null);

  const [status, setStatus] = useState(false);
  const [radio, setRadio] = useState(false);
  const [isCanceled, setIsCanceled] = useState(false);

  const alert = useAlert();

  const handleStatus = (status) => {
    setStatus(status);
    setIsCanceled(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getUsers();
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [fullName]);

  const getUsers = () => {
    const url = "/backoffice/users/";
    const token = getCookie("ACCESS_TOKEN");

    setData(false);

    HTTP.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        status: status,
        start_date: startDate,
        end_date: endDate,
        full_name: fullName,
        is_cancelled: isCanceled,
        coaching_number: coachingNumber,
      },
    })
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        alert.error(
          "Xatolik! Brauzerni refresh qiling yoki qaytadan LOGIN qiling!"
        );
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  const { data: coachingGroups, error: onError } = useSWR(
    ["profile/coaching-type/", getCookie("ACCESS_TOKEN")],
    API
  );

  const [isLoading, setAsLoading] = useState(false);

  function acceptAlert(id, name) {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-ui | shadow-300 px-7 py-12 space-y-7 | bg-white">
            <div className="fcc">
              <ExclamationIcon className="h-32 text-bluish" />
            </div>
            <h1 className="font-bold text-2xl fcc">
              Haqiqatan ham {name} foydalanuvchisini o'qishga qabul
              qilmoqchimisiz?
            </h1>

            <div className="flex | space-x-10">
              <button
                onClick={onClose}
                className="bg-gray-100 text-gray-700 w-1/2 px-3 py-3 rounded-md click:scale outline-none focus:outline-none text-lg font-bold"
              >
                Yo'q
              </button>

              <button
                className="text-white bg-bluish w-1/2 px-3 py-3 rounded-md click:scale outline-none focus:outline-none text-lg font-bold"
                onClick={() => {
                  onAccept(id);

                  onClose();
                }}
              >
                Tasdiqlash
              </button>
            </div>
          </div>
        );
      },
    });
  }

  function cancelAlert(id) {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <>
            <div className="custom-ui | shadow-300 px-7 py-12 space-y-7 | bg-white">
              <div className="fcc">
                <LightBulbIcon className="h-32 text-bluish" />
              </div>
              <h1 className="font-bold text-2xl fcc">Rad qilish sababi:</h1>
              <div>
                <input
                  placeholder="Nima uchun rad qilingani xaqida izoh qoldiring..."
                  className="px-5 input input-primary border-bluish-300 input-bordered w-full"
                  onChange={(e) => setNote(e.target.value)}
                />
              </div>
              <div className="flex | space-x-10">
                <button
                  onClick={onClose}
                  className="bg-gray-100 text-gray-700 w-1/2 px-3 py-3 rounded-md click:scale outline-none focus:outline-none text-lg font-bold"
                >
                  Yo'q
                </button>

                <button
                  className="text-white bg-bluish w-1/2 px-3 py-3 rounded-md click:scale outline-none focus:outline-none text-lg font-bold"
                  onClick={() => {
                    onCancel(id, note);
                    onClose();
                  }}
                >
                  Tasdiqlash
                </button>
              </div>
            </div>
          </>
        );
      },
    });
  }

  return (
    <div className="px-12 py-12">
      <div
        className={cn({
          "drawer | shadow-300 absolute inset-0 | z-50 | flex justify-end": true,
          "opacity-0 hidden": !filter,
        })}
      >
        <div
          className="bg-gray-500 bg-opacity-50 | w-3/5 | cursor-pointer"
          onClick={() => toggleFilter()}
        ></div>
        <div className="bg-white w-2/5 px-5 py-5">
          <h1 className="text-3xl font-bold text-center">Filterlar</h1>

          <div className="">
            <div className="py-5">
              <h1 className="font-bold pb-3">Vaqt oralig'i:</h1>
              <div className="fcb | space-x-10">
                <input
                  type="date"
                  max={31}
                  placeholder="Kun"
                  className="input | m-0 | w-full | input-bordered"
                  onChange={(e) => setStartDate(e.target.value)}
                />

                <input
                  type="date"
                  max={31}
                  placeholder="Kun"
                  className="input | m-0 | w-full | input-bordered"
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
            </div>

            <div className="py-5">
              <h1 className="font-bold pb-3">Filter status:</h1>
              <div className="space-y-5 | pt-3">
                <label className="fc | cursor-pointer" htmlFor={`tasdiqlangan`}>
                  <input
                    id="tasdiqlangan"
                    type="radio"
                    className="radio radio-primary"
                    checked={radio == "tasdiqlangan"}
                    onChange={() => {
                      setRadio("tasdiqlangan");
                      handleStatus(true);
                    }}
                  />

                  <h1 className="font-bold pl-3 | capitalize">Tasdiqlangan</h1>
                </label>

                <label
                  className="fc | cursor-pointer"
                  htmlFor={`tasdiqlanmagan`}
                >
                  <input
                    id="tasdiqlanmagan"
                    type="radio"
                    className="radio radio-primary"
                    checked={radio == "tasdiqlanmagan"}
                    onChange={() => {
                      setRadio("tasdiqlanmagan");
                      handleStatus(false);
                    }}
                  />

                  <h1 className="font-bold pl-3 | capitalize">
                    Tasdiqlanmagan
                  </h1>
                </label>

                <label className="fc | cursor-pointer" htmlFor={`barchasi`}>
                  <input
                    id="barchasi"
                    type="radio"
                    className="radio radio-primary"
                    checked={radio == "barchasi"}
                    onChange={() => {
                      setRadio("barchasi");
                      handleStatus(null);
                    }}
                  />

                  <h1 className="font-bold pl-3 | capitalize">barchasi</h1>
                </label>

                <label className="fc | cursor-pointer" htmlFor={`qaytarilgan`}>
                  <input
                    id="qaytarilgan"
                    type="radio"
                    className="radio radio-primary"
                    checked={radio == "qaytarilgan"}
                    onChange={() => {
                      setRadio("qaytarilgan");
                      setIsCanceled(true);
                    }}
                  />

                  <h1 className="font-bold pl-3 | capitalize">qaytarilgan</h1>
                </label>
              </div>

              <div className="py-10">
                <h1 className="font-bold pb-3">Kouching guruh raqami:</h1>

                <div className="w-full">
                  {coachingGroups?.data && (
                    <Select
                      onSelect={(e) => setCoachingNumber(e.number)}
                      by={`number`}
                      options={coachingGroups?.data[0]?.numbers || []}
                    />
                  )}
                </div>
              </div>
              <button
                className={cn({
                  "fc | btn btn-outline btn-block bg-bluish hover:bg-bluish-600 font-bold border-none text-white | outline-none |": true,
                  loading: isLoading,
                })}
                onClick={() => {
                  getUsers();
                  toggleFilter();
                }}
              >
                Ko'rish <EyeIcon className="h-5 | ml-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

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
          <Register controlled={true} close={toggleDrawer} />
        </div>
      </div>

      <div className="fcb">
        <h1 className="font-bold text-xl">Foydalanuvchilarni tasdiqlash</h1>

        <div className="avatar | fc">
          <div className="rounded-full w-12 h-12 shadow-md">
            <img src="/pcg/logo.png" />
          </div>

          <div className="flex-col fcc  pl-3">
            <h1 className="font-bold text-md">Perfect Business Club</h1>
            <p>Moderator</p>
          </div>
        </div>
      </div>

      <div className="search | mt-12 | fc w-full">
        <div className="relative w-full">
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
            className="w-full px-12 input input-primary border-bluish-300 input-bordered rounded-full"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <div
          className="filter | bg-blue-50 hover:bg-blue-100 p-3 ml-5 | rounded-md | cursor-pointer | click:scale"
          onClick={() => toggleFilter()}
        >
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
                {!data ? (
                  <tbody className="text-center relative py-12">
                    <td></td>
                    <td></td>
                    <div aria-rowspan={5} className="text-center py-12">
                      <Spinner />
                    </div>
                    <td></td>
                  </tbody>
                ) : data?.length > 0 ? (
                  <tbody className="bg-white divide-y divide-gray-200">
                    {data.map((user, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap | text-gray-500">
                          {index + 1}
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

                          <div
                            onClick={() =>
                              acceptAlert(user.id, user.first_name)
                            }
                            className="fcc | bg-green-50 hover:bg-green-100 p-2 | rounded-full | cursor-pointer"
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
                          </div>
                          <div
                            onClick={() => cancelAlert(user.id)}
                            className="fcc | bg-red-50 hover:bg-red-100 p-2 | rounded-full cursor-pointer"
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
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                ) : (
                  <tbody className="text-center relative py-12">
                    <td></td>
                    <td></td>
                    <div
                      aria-rowspan={5}
                      className="text-center py-12 flex-col fcc"
                    >
                      <SvgEmpty className="h-32" />
                      <h1 className="pt-5 text-lg font-bold">
                        Ma'lumotlar topilmadi
                      </h1>
                    </div>
                    <td></td>
                  </tbody>
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  async function onAccept(id) {
    const oldData = await _.cloneDeep(data);

    removeUser(data, id);

    await HTTP.patch(
      `backoffice/users/${id}/`,
      {
        status: true,
      },
      {
        headers: {
          Authorization: `Bearer ${getCookie("ACCESS_TOKEN")}`,
        },
      }
    )
      .then((res) => {
        alert.success("Qabulga olindi.");
      })
      .catch((err) => {
        setData(oldData);
        alert.error("Xatolik yuz berdi qaytadan urinib ko'ring.");
      });
  }

  async function onCancel(id, note) {
    const oldData = await _.cloneDeep(data);

    removeUser(data, id);

    HTTP.patch(
      `backoffice/users/${id}/`,
      {
        status: false,
        note_when_cancelled: note || "Izoh yo'q",
      },
      {
        headers: {
          Authorization: `Bearer ${getCookie("ACCESS_TOKEN")}`,
        },
      }
    )
      .then((res) => {
        alert.success("Muvaffaqiyatli o'chirildi!");
      })
      .catch((err) => {
        setData(oldData);

        alert.error("Xatolik yuz berdi qaytadan urinib ko'ring.");
      });
  }

  function getCookie(name) {
    var match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
    if (match) return match[2];
  }

  function removeUser(data, userId) {
    const newUsers = data.filter((user) => user.id !== userId);

    setData(newUsers);

    console.log(newUsers);
  }
}

export default ModeratorUsers;
