import { useState } from "react";
import { useAlert } from "react-alert";
import cn from "clsx";
import InputMask from "react-input-mask";
import Select from "cmp/Select";
import SelectTable from "cmp/Select/table";
import SvgImage from "icons/SvgImage";
import Logo from "cmp/Logo";
import { useHistory } from "react-router-dom";
import _ from "lodash";
import { ArrowRightIcon, ChevronLeftIcon } from "@heroicons/react/outline";
import { useForm } from "react-hook-form";
import API, { getCookie, HTTP } from "config/API";
import useSWR from "swr";

function Register(props) {
  const [step, setStep] = useState(1);
  const [isLoading, setAsLoading] = useState(false);

  const alert = useAlert();
  const history = useHistory();

  const { register, handleSubmit, watch, formState } = useForm();
  const [image, setImage] = useState(false);
  const password = watch("password");
  const [userData, setUserData] = useState({
    image: "",
    first_name: "",
    last_name: "",
    middle_name: "",
    birthday: "",
    phone_number: "",
    email: "",
    referral_code: "",
    password: "",
    password2: "",

    instagram: "",
    telegram: "",
    facebook: "",

    sms_code: "",
    group_id: "",
  });

  const { data, error } = useSWR("profile/coaching-type/", HTTP);
  console.log(data);
  const [selectOne, setSelectOne] = useState([]);
  const [selectTwo, setSelectTwo] = useState([]);
  const [selectFinal, setSelectFinal] = useState([]);

  return (
    <div className="h-full w-full overflow-x-hidden">
      <div className="space-y-5 h-full">
        {step === 1 && (
          <>
            <div className="head | px-5 py-7 fcb">
              <h1 className="font-bold text-2xl">Ro'yxattan o'tish.</h1>
              <Logo className="h-10" />
            </div>

            <label htmlFor="image">
              {image && (
                <div className="px-5 | h-32">
                  <div className="upload  | fc | py-2 px-3 | rounded-md | bg-white | h-full w-full | hover:border-2 border-2 border-gray-300 border-dashed hover:border-[#30A8F7] | cursor-pointer | duration-200 ease-in">
                    <img
                      src={image}
                      alt="sd"
                      className="object-contain h-full | mx-auto"
                    />
                  </div>
                </div>
              )}
              {!image && (
                <>
                  <div className="px-5 -pb-10 -mb-10 py-5">
                    {formState.errors.image && (
                      <p className="text-sm font-bold text-red-500 | py-2">
                        Rasm yuklash shart:
                      </p>
                    )}
                    <div
                      className={cn({
                        "upload  | fc | py-5 px-5 | rounded-md | bg-white | h-1/3 w-full | border-2 border-gray-300 border-dashed hover:border-[#30A8F7] | cursor-pointer | duration-200 ease-in": true,
                        "border-red-500": formState.errors.image,
                      })}
                    >
                      <SvgImage className="h-12" />

                      <p className="pl-7 | font-semibold ">Logotipni yuklang</p>
                    </div>
                  </div>
                </>
              )}
              <input
                type="file"
                id="image"
                name="image"
                accept=".png, .jpg, .jpeg"
                className="h-0 w-0 p-0 m-0 opacity-0"
                {...registerImage()}
                onChange={(e) => {
                  registerImage().onChange(e);

                  setImage(URL.createObjectURL(e?.target?.files[0]));
                }}
              />
            </label>

            <div className="register | px-5">
              <div className="form | space-y-6 | pt-5">
                <div>
                  {formState.errors.first_name && (
                    <p className="text-sm font-bold text-red-500 | py-2">
                      Kiritish shart:
                    </p>
                  )}

                  <input
                    type="text"
                    placeholder="* Ismingiz"
                    className={cn({
                      "input | m-0 | w-full | input-bordered": true,
                      "input-error": formState.errors.first_name,
                    })}
                    {...register("first_name", {
                      required: true,
                      maxLength: 50,
                      pattern: /^[a-zA-Z]+$/,
                    })}
                  />
                </div>

                <div>
                  {formState.errors.last_name && (
                    <p className="text-sm font-bold text-red-500 | py-2">
                      Kiritish shart:
                    </p>
                  )}

                  <input
                    type="text"
                    placeholder="* Familyangiz"
                    className={cn({
                      "input | m-0 | w-full | input-bordered": true,
                      "input-error": formState.errors.first_name,
                    })}
                    {...register("last_name", {
                      required: true,
                      maxLength: 50,
                      pattern: /^[a-zA-Z]+$/,
                    })}
                  />
                </div>

                <div>
                  {formState.errors.middle_name && (
                    <p className="text-sm font-bold text-red-500 | py-2">
                      Kiritish shart:
                    </p>
                  )}

                  <input
                    type="text"
                    placeholder="* Otangizning ismi"
                    className={cn({
                      "input | m-0 | w-full | input-bordered": true,
                      "input-error": formState.errors.first_name,
                    })}
                    {...register("middle_name", {
                      required: true,
                    })}
                  />
                </div>

                <p className="text-xs text-gray-500 | pt-10">Tug'ilgan sana</p>

                <div>
                  {formState.errors.birthday && (
                    <p className="text-sm font-bold text-red-500 | py-2">
                      Kiritish shart:
                    </p>
                  )}
                  <div className="flex space-x-5">
                    <input
                      type="date"
                      max={31}
                      placeholder="Kun"
                      className={cn({
                        "input | m-0 | w-full | input-bordered": true,
                        "input-error": formState.errors.first_name,
                      })}
                      {...register("birthday", {
                        required: true,
                        valueAsDate: true,
                      })}
                    />
                  </div>
                </div>

                <div>
                  {formState.errors.email && (
                    <p className="text-sm font-bold text-red-500 | py-2">
                      Kiritish shart:
                    </p>
                  )}
                  <input
                    type="email"
                    placeholder="Email"
                    className={cn({
                      "input | m-0 | w-full | input-bordered": true,
                      "input-error": formState.errors.first_name,
                    })}
                    {...register("email", {
                      required: true,
                      pattern:
                        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                    })}
                  />
                </div>

                <div>
                  {formState.errors.password && (
                    <p className="text-sm font-bold text-red-500 | py-2">
                      Kiritish shart:
                    </p>
                  )}
                  <input
                    type="password"
                    placeholder="Password"
                    className={cn({
                      "input | m-0 | w-full | input-bordered": true,
                      "input-error": formState.errors.first_name,
                    })}
                    {...register("password", {
                      required: true,
                    })}
                  />
                </div>

                <div>
                  {formState.errors.password2 && (
                    <p className="text-sm font-bold text-red-500 | py-2">
                      Kiritish shart:
                    </p>
                  )}
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className={cn({
                      "input | m-0 | w-full | input-bordered": true,
                      "input-error": formState.errors.first_name,
                    })}
                    {...register("password2", {
                      required: true,
                      validate: {
                        equals: (v) => {
                          return v == password;
                        },
                      },
                    })}
                  />
                </div>

                <div>
                  {formState.errors.phone_number && (
                    <p className="text-sm font-bold text-red-500 | py-2">
                      Kiritish shart:
                    </p>
                  )}
                  <div className="w-full overflow-hidden">
                    <InputMask
                      mask="+\9\98 99 999 99 99"
                      {...register("phone_number", {
                        required: true,
                        validate: {
                          isValid: (e) => {
                            return !_.includes(
                              e.split(" ").join("").substring(1),
                              ["_"]
                            );
                          },
                        },
                      })}
                    >
                      {(inputProps) => (
                        <input
                          type="text"
                          placeholder="+998 (__)  ___-__-__"
                          className={cn({
                            "input | w-full | input-bordered": true,
                            "input-error": formState.errors.phone_number,
                          })}
                          {...inputProps}
                        />
                      )}
                    </InputMask>
                  </div>
                </div>

                <p className="text-xs text-gray-500 | pt-10">
                  Ijtimoiy Tarmoqalar
                </p>

                <div className="space-y-5">
                  <input
                    type="url"
                    max={31}
                    placeholder="Instagram"
                    className={cn({
                      "input | m-0 | w-full | input-bordered": true,
                      "input-error": formState.errors.first_name,
                    })}
                    {...register("instagram")}
                  />
                  <input
                    type="url"
                    max={12}
                    placeholder="Telegram"
                    className={cn({
                      "input | m-0 | w-full | input-bordered": true,
                      "input-error": formState.errors.first_name,
                    })}
                    {...register("telegram")}
                  />
                  <input
                    type="url"
                    max={2}
                    placeholder="Facebook"
                    className={cn({
                      "input | m-0 | w-full | input-bordered": true,
                      "input-error": formState.errors.first_name,
                    })}
                    {...register("facebook")}
                  />
                </div>
              </div>
            </div>
            <hr className="mx-5" />

            <div className="fcc px-5 pb-5">
              <button
                className={cn({
                  "fc | btn btn-outline btn-block bg-bluish hover:bg-bluish-600 font-bold border-none text-white | outline-none |": true,
                  loading: isLoading,
                })}
                onClick={handleSubmit(onNext)}
              >
                Keyingisi <ArrowRightIcon className="h-4 | ml-4" />
              </button>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <div className="w-full | py-2">
              <a
                href="/auth/register"
                className="py-2 | px-5 | inline-flex ifc | cursor-pointer | duration-300 hover:bg-gray-50 | rounded-md click:scale"
              >
                <ChevronLeftIcon className="h-6" />
                <h1 className="textgray-900 text-lg font-medium pl-5">
                  Orqaga
                </h1>
              </a>
              <div className="px-5 py-5 | space-y-5">
                <div className="head | pb-7 fcc">
                  <p className="font-bold text-gray-900 text-xl">
                    Qaysi kurs o'quvchisi:
                  </p>
                </div>
                {data && (
                  <div className="w-full | space-y-7">
                    <Select
                      options={data.data}
                      by={`name`}
                      onSelect={(e) => {
                        setSelectOne(e);
                      }}
                    />

                    {selectOne.numbers && (
                      <Select
                        options={selectOne.numbers}
                        by={`number`}
                        onSelect={(e) => {
                          setSelectTwo(e);
                        }}
                      />
                    )}
                    {selectTwo.groups && (
                      <SelectTable
                        options={selectTwo.groups}
                        by={`number`}
                        onSelect={setSelectFinal}
                      />
                    )}

                    <div>
                      <p className="py-2">
                        <span className="text-bluish-500">
                          +{userData?.phone_number}
                        </span>{" "}
                        raqamiga yuborilgan kodni kiriting:
                      </p>

                      {formState.errors.sms_code && (
                        <p className="text-sm font-bold text-red-500 | py-2">
                          Kodni kiriting:
                        </p>
                      )}
                      <InputMask
                        mask="99999"
                        {...register("sms_code", {
                          required: true,
                        })}
                      >
                        {(inputProps) => (
                          <input
                            name="sms_code"
                            id="sms_code"
                            placeholder="_ _ _ _ _"
                            className={cn({
                              "input | w-1/4 | input-bordered | text-center": true,
                              "input-error": formState.errors.sms_code,
                            })}
                          />
                        )}
                      </InputMask>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <hr className="mx-5" />

            <div className="fcc px-5 pb-5">
              <button
                className={cn({
                  "fc | btn btn-outline btn-block bg-bluish hover:bg-bluish-600 font-bold border-none text-white | outline-none |": true,
                  loading: isLoading,
                })}
                onClick={handleSubmit(onRegister)}
              >
                Yakunlash <ArrowRightIcon className="h-4 | ml-4" />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );

  function onRegister(p) {
    setAsLoading(true);

    if (selectFinal.length == 0) {
      setAsLoading(false);

      alert.error("Gruppa Tanlanmadi!");

      return;
    }

    const newFullData = {
      ...userData,
      sms_code: p.sms_code,
      group_id: selectFinal.id,
    };

    const data = new FormData();

    data.append("first_name", newFullData.first_name);
    data.append("last_name", newFullData.last_name);
    data.append("middle_name", newFullData.middle_name);
    data.append("phone_number", newFullData.phone_number);
    data.append("email", newFullData.email);
    data.append("birthday", newFullData.birthday);
    data.append("image", newFullData.image);
    data.append("password", newFullData.password);
    data.append("password2", newFullData.password2);
    data.append("sms_code", newFullData.sms_code);
    data.append("group_id", newFullData.group_id);

    HTTP.post("profile/register/", data)
      .then((res) => {
        setTimeout(() => {
          history.push("/auth/complete");
        }, 1500);
      })
      .catch((res) => {
        alert.error(
          "Xatolik yuz berdi! Iltimos ma'lumotlarni tekshirib qaytadan kiriting!"
        );
      });
  }

  function onNext(e) {
    const newData = {
      ...userData,
      ...e,
      phone_number: e.phone_number.split(" ").join("").substring(1),
      birthday: e.birthday.toISOString().split("T")[0],
      image: e.image[0],
    };

    setUserData(newData);

    HTTP.post("profile/register/send-code/", {
      phone_number: newData.phone_number,
    }).catch((res) => {
      alert.error(
        "Xatolik yuz berdi! Iltimos ma'lumotlarni tekshirib qaytadan kiriting!"
      );
    });

    setStep(step + 1);
  }

  function registerImage() {
    return register("image", {
      required: true,
    });
  }

  function numbToArray(num) {
    return Array.from({ length: num }, (_, i) => i + 1);
  }
}

export default Register;
