const Alert = ({ options, message }) => (
  <>
    {options.type === "info" && (
      <div class="alert alert-info | rounded-md | shadow-200 | my-2 | z-[1000]">
        <div class="flex-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="w-5 h-5 mx-2 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>

          <label className="text-sm">{message}</label>
        </div>
      </div>
    )}
    {options.type === "success" && (
      <div class="alert alert-success bg-green-50 | rounded-md | shadow-200 | my-2 | z-[1000]">
        <div class="flex-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mx-2 stroke-current"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>

          <label className="text-sm">{message}</label>
        </div>
      </div>
    )}
    {options.type === "error" && (
      <div class="alert alert-error bg-red-50 | rounded-md | shadow-200 | my-2 | z-[1000]">
        <div class="flex-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="w-5 h-5 mx-2 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
            ></path>
          </svg>
          <label className="text-sm">{message}</label>
        </div>
      </div>
    )}
  </>
);

export default Alert;
