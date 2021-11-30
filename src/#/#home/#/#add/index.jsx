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
import Spinner from "cmp/Spinner";

function Business() {
  const [isLoading, setAsLoading] = useState(false);

  const alert = useAlert();
  const history = useHistory();

  const { register, handleSubmit, watch, formState } = useForm();
  const [image, setImage] = useState(false);
  const [galleries, setGalleries] = useState(false);
  const [userData, setUserData] = useState({
    logo: "",
    name: "",
    activity_type: "",
    galleries: [],
    lat_long: "",
    position: "",
    region: "",

    instagram: "",
    telegram: "",
    facebook: "",
    website: "",
  });

  const { data: businessData, error: businessError } = useSWR(
    ["profile/business-activity/", getCookie("ACCESS_TOKEN")],
    API
  );
  const { data: addressData, error: addressError } = useSWR(
    ["profile/business-region/", getCookie("ACCESS_TOKEN")],
    API
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

  return (
    <div className="pb-20">
      <h1 className="py-7 px-5 | font-bold text-xl text-center">
        Biznesingiz xaqida ko'proq ma'lumot.
      </h1>
      <label htmlFor="logo">
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
          id="logo"
          accept=".png, .jpg, .jpeg"
          className="h-0 w-0 p-0 m-0 opacity-0"
          {...registerImage("logo")}
          onChange={(e) => {
            registerImage("logo").onChange(e);

            setImage(URL.createObjectURL(e?.target?.files[0]));
          }}
        />
      </label>

      <div className="register | px-5">
        <div className="form | space-y-6 | pt-5">
          {formState.errors.name && (
            <p className="text-sm font-bold text-red-500 | py-2">
              Kiritish shart:
            </p>
          )}
          <input
            type="text"
            placeholder="* Biznesingiz nomi"
            className={cn({
              "input | m-0 | w-full | input-bordered": true,
              "input-error": formState.errors.name,
            })}
            {...register("name", {
              required: true,
              maxLength: 100,
            })}
          />

          <Select
            name={`Faoliyat Turi:`}
            by={`name`}
            options={businessData?.data || []}
            onSelect={(e) => setType(e)}
          />

          {formState.errors.position && (
            <p className="text-sm font-bold text-red-500 | py-2">
              Kiritish shart:
            </p>
          )}
          <input
            type="text"
            placeholder="* Lavozimingiz"
            className={cn({
              "input | m-0 | w-full | input-bordered": true,
              "input-error": formState.errors.position,
            })}
            {...register("position", {
              required: true,
              maxLength: 100,
            })}
          />

          <Select
            name={`Manzil:`}
            by={`name`}
            options={addressData?.data || []}
            onSelect={(e) => setAddress(e)}
          />

          {formState.errors.website && (
            <p className="text-sm font-bold text-red-500 | py-2">
              Kiritish shart:
            </p>
          )}
          <input
            type="text"
            placeholder="* Websaytingiz"
            className={cn({
              "input | m-0 | w-full | input-bordered": true,
              "input-error": formState.errors.website,
            })}
            {...register("website", {
              required: true,
              maxLength: 50,
            })}
          />

          <p className="text-xs text-gray-500 | pt-10">
            Бизнесингизнинг ижтимоий тармоқлардаги саҳифалар ҳаволасини киритинг{" "}
            <br /> (* агар бўлса)
          </p>

          <div className="space-y-5">
            <input
              type="url"
              placeholder="Instagram"
              {...register("instagram", {
                maxLength: 50,
              })}
              className="input | m-0 | w-full | input-bordered"
            />
            <input
              type="url"
              {...register("telegram", {
                maxLength: 50,
              })}
              placeholder="Telegram"
              className="input | m-0 | w-full | input-bordered"
            />
            <input
              type="url"
              {...register("facebook", {
                maxLength: 50,
              })}
              placeholder="Facebook"
              className="input | m-0 | w-full | input-bordered"
            />
          </div>

          <p className="text-xs text-gray-500 | pt-10">
            Biznesingiz bo'yicha qo'shimcha rasmlar
            <br /> (* Agar bo'lsa)
          </p>

          <div>
            <label htmlFor="galleries">
              {galleries && (
                <div className="h-32">
                  <div className="upload  | fc | py-2 px-3 | rounded-md | bg-white | h-full w-full | hover:border-2 border-2 border-gray-300 border-dashed hover:border-[#30A8F7] | cursor-pointer | duration-200 ease-in">
                    <img
                      src={galleries}
                      alt="sd"
                      className="object-contain h-full | mx-auto"
                    />
                  </div>
                </div>
              )}
              {!galleries && (
                <>
                  <div className="">
                    {formState.errors.galleries && (
                      <p className="text-sm font-bold text-red-500 | py-2">
                        Rasm yuklash shart:
                      </p>
                    )}
                    <div
                      className={cn({
                        "upload  | fc | py-5 px-5 | rounded-md | bg-white | h-1/3 w-full | border-2 border-gray-300 border-dashed hover:border-[#30A8F7] | cursor-pointer | duration-200 ease-in": true,
                        "border-red-500": formState.errors.galleries,
                      })}
                    >
                      <SvgImage className="h-12" />

                      <p className="pl-7 | font-semibold ">Qo'shimcha rasm</p>
                    </div>
                  </div>
                </>
              )}
              <input
                type="file"
                id="galleries"
                name="galleries"
                accept=".png, .jpg, .jpeg"
                className="h-0 w-0 p-0 m-0 opacity-0"
                {...registerImage("galleries")}
                onChange={(e) => {
                  registerImage("galleries").onChange(e);

                  setGalleries(URL.createObjectURL(e?.target?.files[0]));
                }}
              />
            </label>
          </div>
          <p className="text-xs text-gray-500 | pt-10">
            Kartadan joyingizni aniqlash
          </p>

          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.659536797769!2d72.35743541495147!3d40.7475165433797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bceb29cca19bcf%3A0x551869ecfaf99e00!2sAlgorithm%20Gateway%20LLC!5e0!3m2!1sen!2s!4v1634567630385!5m2!1sen!2s"
              width="100%"
              height="200"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="fcc px-5 pb-5">
          <button
            className={cn({
              "fc | btn btn-outline btn-block bg-bluish hover:bg-bluish-600 font-bold border-none text-white | outline-none |": true,
              loading: isLoading,
            })}
            onClick={handleSubmit(onAdd)}
          >
            Yakunlash
          </button>
        </div>
      </div>
      <hr className="mx-5" />
    </div>
  );

  function registerImage(name, props) {
    return register(name || "image", {
      required: true,
      ...props,
    });
  }

  function onAdd(e) {
    setAsLoading(true);

    console.log(selectType);
    console.log(selectAddress);

    if (selectAddress.length == 0 || selectType.length == 0) {
      setAsLoading(false);
      alert.error("Gruppa Tanlanmadi!");

      return;
    }

    const data = new FormData();

    data.append("logo", e.logo[0]);
    data.append("name", e.name);
    data.append("position", e.position);
    data.append("activity_type", selectType.id);
    data.append("galleries", e.galleries);
    data.append("about", e.about);
    data.append("website", e.website);
    data.append("region", selectAddress.id);
    data.append("instagram", e.instagram);
    data.append("telegram", e.telegram);
    data.append("facebook", e.facebook);
    data.append(
      "lat_long",
      data?.lat_long || `41.33916880214932:69.20007812109371`
    );

    HTTP.post("profile/user-business/", data, {
      headers: {
        Authorization: `Bearer ${getCookie("ACCESS_TOKEN")}`,
      },
    })
      .then((res) => {
        console.log(res);

        alert.success("Muvaffaqiyatli qo'shildi.");

        setTimeout(() => {
          history.push("/home/business");
        }, 500);
      })
      .catch((res) => {
        console.log(res);
        alert.error(
          "Xatolik yuz berdi! Iltimos ma'lumotlarni tekshirib qaytadan kiriting!"
        );
      });
  }
}

export default Business;
