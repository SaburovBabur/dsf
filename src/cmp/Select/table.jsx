import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import ChevronDown from "@heroicons/react/outline/ChevronDownIcon";
import { useAlert } from "react-alert";

function Select(props) {
  const [selected, setSelected] = useState(props.options[0]);
  const alert = useAlert();

  function onSelect(option) {
    setSelected(option);

    props.onSelect(option);
  }

  useEffect(() => {
    setSelected(props.options[0]);

    if (props.options.length == 0) {
      alert.error("Tanlash uchun ma'lumotlar kiritilmadi.");

      props.onSelect([]);
    }
  }, [props.options]);

  if (props.options.length == 0) {
    return (
      <p className="text-red-500 text-lg | bg-red-100 px-3 py-2 | rounded-md">
        Bo'sh :(
      </p>
    );
  }

  return (
    <Listbox value={selected} onChange={onSelect}>
      <div className="relative mt-1">
        <Listbox.Button className="relative w-full py-4 | pl-4 pr-10 text-left bg-white rounded-md shadow-250 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
          {selected && (
            <span className="block truncate font-bold">
              {selected[props.by]}
            </span>
          )}
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <ChevronDown className="h-5 pr-2" />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute z-[1000000] w-full py-3 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm | flex flex-wrap items-center | px-2">
            {props.options.map((option, personIdx) => (
              <Listbox.Option
                key={personIdx}
                className={({ active }) =>
                  `${active ? "text-amber-900 bg-gray-100" : "text-gray-900"}
                      outline-none cursor-pointer select-none relative py-2 px-5 pr-4 w-1/4 fcc text-lg rounded-md`
                }
                value={option}
              >
                {({ selected, active }) => (
                  <>
                    <span
                      className={`${
                        selected ? "text-primary-400 font-bold" : "font-normal"
                      } block truncate`}
                    >
                      {option[props.by]}
                    </span>
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}

export default Select;
