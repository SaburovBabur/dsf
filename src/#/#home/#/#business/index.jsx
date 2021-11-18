import {
  InformationCircleIcon,
  LocationMarkerIcon,
  PhoneIcon,
  PlusIcon,
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";

function Business(props) {
  return (
    <div className="px-3">
      <div className="listing | py-5">
        <div className="business | shadow-300 px-5 py-5 | mb-7">
          <div className="title | fc">
            <div className="w-20 h-20 | shadow-300 overflow-hidden rounded-lg | flex-shrink-0">
              <img
                src="https://allcloud.io/wp-content/uploads/2019/12/Veev_Logo_Final_TM-1-300x162.png"
                alt=""
                className="h-full object-contain object-center"
              />
            </div>

            <div className="info | w-full">
              <h1 className="font-bold text-lg | pl-7">Veev LLC</h1>
              <div className="flex flex-wrap">
                <div className="fc | pl-7 | pt-3">
                  <InformationCircleIcon className="h-5 text-gray-300" />
                  <h3 className="pl-2 | text-gray-500 text-sm">O'quv Markaz</h3>
                </div>

                <div className="fc | pl-7 | pt-3">
                  <LocationMarkerIcon className="h-5 text-gray-300" />
                  <h3 className="pl-2 | text-gray-500 text-sm">Tashkent</h3>
                </div>

                <div className="fc | pl-7 | pt-3">
                  <PhoneIcon className="h-5 text-gray-300" />
                  <h3 className="pl-2 | text-gray-500 text-xs">
                    +998 90 727 77 77
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="business | shadow-300 px-5 py-5 | mb-7">
          <div className="title | fc">
            <div className="w-20 h-20 | shadow-300 overflow-hidden rounded-lg | flex-shrink-0">
              <img
                src="https://isic.uz/wp-content/uploads/2019/04/logo-2.jpg"
                alt=""
                className="h-full object-contain object-center"
              />
            </div>

            <div className="info | w-full">
              <h1 className="font-bold text-lg | pl-7">Cambridge</h1>
              <div className="flex flex-wrap">
                <div className="fc | pl-7 | pt-3">
                  <InformationCircleIcon className="h-5 text-gray-300" />
                  <h3 className="pl-2 | text-gray-500 text-sm">O'quv Markaz</h3>
                </div>

                <div className="fc | pl-7 | pt-3">
                  <LocationMarkerIcon className="h-5 text-gray-300" />
                  <h3 className="pl-2 | text-gray-500 text-sm">Tashkent</h3>
                </div>

                <div className="fc | pl-7 | pt-3">
                  <PhoneIcon className="h-5 text-gray-300" />
                  <h3 className="pl-2 | text-gray-500 text-xs">
                    +998 90 727 77 77
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="business | shadow-300 px-5 py-5 | mb-7">
          <div className="title | fc">
            <div className="w-20 h-20 | shadow-300 overflow-hidden rounded-lg | flex-shrink-0">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Akfa_logo.png/320px-Akfa_logo.png"
                alt=""
                className="h-full object-contain object-center"
              />
            </div>

            <div className="info | w-full">
              <h1 className="font-bold text-lg | pl-7">Akfa OOO</h1>
              <div className="flex flex-wrap">
                <div className="fc | pl-7 | pt-3">
                  <InformationCircleIcon className="h-5 text-gray-300" />
                  <h3 className="pl-2 | text-gray-500 text-sm">Zavod</h3>
                </div>

                <div className="fc | pl-7 | pt-3">
                  <LocationMarkerIcon className="h-5 text-gray-300" />
                  <h3 className="pl-2 | text-gray-500 text-sm">Tashkent</h3>
                </div>

                <div className="fc | pl-7 | pt-3">
                  <PhoneIcon className="h-5 text-gray-300" />
                  <h3 className="pl-2 | text-gray-500 text-xs">
                    +998 90 727 77 77
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full pb-24">
          <Link to={`/home/business/add`}>
            <div className="uppercase | border-2 border-dotted text-sm border-bluish-200 text-bluish font-bold hover:border-bluish-300 | block | rounded-md fcc py-3 | click:scale">
              <PlusIcon className="h-12 | text-bluish-400" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Business;
