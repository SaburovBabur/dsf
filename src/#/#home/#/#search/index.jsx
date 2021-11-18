function Search(props) {
  return (
    <div>
      <div className="search | fc w-full">
        <div className="relative w-full | mt-7 mb-7 px-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 | absolute left-7 top-2 | text-gray-400 | pointer-events-none"
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
            placeholder="Qidirish..."
            className="w-full px-12 input input-primary border-gray-300 input-bordered rounded-md py-1 h-auto"
          />
        </div>
        <div className="filter | bg-blue-50 hover:bg-blue-100 p-2 ml-2 | rounded-md | cursor-pointer | click:scale">
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
    </div>
  );
}

export default Search;
