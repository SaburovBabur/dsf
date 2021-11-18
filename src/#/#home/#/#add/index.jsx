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
import API from "config/API";
import useSWR from "swr";

function Business() {
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

  const { data, error } = useSWR("profile/coaching-type/", API, {
    focusThrottleInterval: 5000 * 12 * 2,
  });

  const [selectOne, setSelectOne] = useState([]);
  const [selectTwo, setSelectTwo] = useState([]);
  const [selectFinal, setSelectFinal] = useState([]);

  return (
    <>
      <h1 className="py-7 px-5 | font-bold text-xl text-center">
        Biznesingiz xaqida ko'proq ma'lumot.
      </h1>
      <div className="px-3 mx-2">
        <div className="upload  | fc | py-5 px-5 | rounded-md | bg-white | h-1/3 w-full | hover:border-2 border-2 border-gray-300 border-dashed hover:border-[#30A8F7] | cursor-pointer | duration-200 ease-in">
          <SvgImage className="h-12" />

          <p className="pl-7 | font-semibold ">Logotipni yuklang</p>
        </div>
      </div>

      <div className="register | px-5">
        <div className="form | space-y-6 | pt-5">
          <input
            type="text"
            placeholder="* Biznesingiz nomi"
            className="input | m-0 | w-full | input-bordered"
          />

          <Select
            name={`Faoliyat Turi:`}
            options={[
              { name: "It" },
              { name: "Bo'gbonchilik" },
              { name: "Davlat" },
              { name: "Bozor" },
            ]}
          />

          <input
            type="text"
            placeholder="* Lavozimingiz"
            className="input | m-0 | w-full | input-bordered"
          />

          <Select
            name={`Turar Joy:`}
            options={[
              { name: "Toshkent" },
              { name: "Namangan" },
              { name: "Andijon" },
              { name: "Samarqand" },
              { name: "Buxoro" },
              { name: "Qoraqolpog'iston Respublikasi" },
              { name: "Xorazm" },
            ]}
          />

          <input
            type="url"
            placeholder="* Websaytingiz"
            className="input | m-0 | w-full | input-bordered"
          />

          <p className="text-xs text-gray-500 | pt-10">
            Бизнесингизнинг ижтимоий тармоқлардаги саҳифалар ҳаволасини киритинг{" "}
            <br /> (* агар бўлса)
          </p>
          <div className="space-y-5">
            <input
              type="url"
              max={31}
              placeholder="Instagram"
              className="input | m-0 | w-full | input-bordered"
            />
            <input
              type="url"
              max={12}
              placeholder="Telegram"
              className="input | m-0 | w-full | input-bordered"
            />
            <input
              type="url"
              max={2}
              placeholder="Facebook"
              className="input | m-0 | w-full | input-bordered"
            />
          </div>

          <p className="text-xs text-gray-500 | pt-10">
            Biznesingiz bo'yicha qo'shimcha rasmlar
            <br /> (* Agar bo'lsa)
          </p>

          <div>
            <div className="upload  | fcc | py-5 px-5 | rounded-md | bg-white | h-1/3 w-full | hover:border-2 border-2 border-gray-300 border-dashed hover:border-[#30A8F7] | cursor-pointer | duration-200 ease-in">
              <SvgImage className="h-12" />
            </div>
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
      </div>
      <hr className="mx-5" />

      <div className="fcc px-5 pb-5">
        <button
          className={cn({
            "fc | btn btn-outline btn-block bg-bluish hover:bg-bluish-600 font-bold border-none text-white | outline-none |": true,
            loading: isLoading,
          })}
          onClick={() => {
            setAsLoading(true);
            // alert.error("Tizim ishga tushmadi!");

            setTimeout(() => {
              history.push(`/auth/complete`);
            }, 1250);
          }}
        >
          Yakunlash
        </button>
      </div>
    </>
  );
}

export default Business;
