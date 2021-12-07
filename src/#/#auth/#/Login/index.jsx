import { useState } from "react";
import cn from "clsx";
import InputMask from "react-input-mask";
import Logo from "cmp/Logo";
import { useAlert } from "react-alert";
import { Link } from "react-router-dom";
import API from "config/API";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";

function Login(props) {
  const [isLoading, setAsLoading] = useState(false);
  const alert = useAlert();
  const { register, handleSubmit, formState } = useForm();
  const history = useHistory();
  const [cookies, setCookie, removeCookie] = useCookies();

  return (
    <div className="lg:px-5 | fcc | h-full w-full">
      <div className="flex flex-col | w-full | space-y-7 | lg:shadow-300 | px-5 py-7 | rounded-lg">
        <Logo className="h-14 | mb-5" />

        <InputMask
          mask="+\9\98 99 999 99 99"
          {...register("phone_number", {}, (data) => {
            return data.split(" ").join("");
          })}
        >
          {(inputProps) => (
            <input
              type="text"
              placeholder="+998 (__)  ___-__-__"
              className="input | m-0 | w-full | input-bordered"
              {...inputProps}
            />
          )}
        </InputMask>

        <input
          type="password"
          placeholder="• • •"
          className="input | w-full | input-bordered | placeholder-xs"
          {...register("password")}
        />

        <div>
          <p className="text-xs text-right | text-gray-600 | pb-3">
            Akkountingiz yo'qmi? <span className="mx-1"></span>
            <Link
              to="/auth/register"
              className="text-bluish-500 hover:text-bluish-400 duration-200"
            >
              Ro'yxattan o'tish
            </Link>
          </p>
          <button
            className={cn({
              "btn btn-block | bg-bluish-500 hover:bg-bluish-600 | border-0 outline-none border-white text-white": true,
              "loading bg-blue-300": isLoading,
            })}
            onClick={handleSubmit(login)}
          >
            Kirish
          </button>
        </div>
      </div>
    </div>
  );

  async function login(data) {
    setAsLoading(true);

    const cleanPhone = data.phone_number.split(" ").join("").substring(1);

    const formattedData = {
      ...data,
      phone_number: cleanPhone,
    };

    // Send the formattedData
    try {
      const { data } = await API("").post("profile/token/", formattedData);

      setAsLoading(false);
      setCookie("ACCESS_TOKEN", data.access, {
        maxAge: 86400 * 2,
      });
      setCookie("REFRESH_TOKEN", data.refresh, {
        maxAge: 86400 * 2,
      });
      setCookie("IS_ADMIN", data.admin, {
        maxAge: 86400 * 2,
      });

      alert.success("Ro'yxattan omadli o'tdingiz.");

      if (data.admin) {
        setTimeout(() => {
          history.go(0);
        }, 2500);
        return history.push("/admin");
      }

      setTimeout(() => {
        history.go(0);
      }, 2500);

      return history.push("/home");
    } catch (error) {
      setAsLoading(false);

      alert.error("Iltimos raqam va parolingizni qayta tekshiring");
    }
  }
}

export default Login;
