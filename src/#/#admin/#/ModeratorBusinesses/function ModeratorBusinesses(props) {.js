function ModeratorBusinesses(props) {
  const business = [
    {
      id: 1,
      name: "JK Xo'jaligi",
      owner: "Saburov Babur",
      email: "algorithmgatway@gmail.uz",
      image:
        "https://media.gettyimages.com/photos/closeup-smiling-male-leader-wearing-eyeglasses-picture-id1179627340?s=612x612",
      sphere: "Konsulting Firm",
      address: "Toshkent SH. Oliygoh 11",
    },

    {
      id: 2,
      name: "JK Xo'jaligi",
      owner: "Saburov Babur",
      email: "algorithmgatway@gmail.uz",
      image:
        "https://media.gettyimages.com/photos/closeup-smiling-male-leader-wearing-eyeglasses-picture-id1179627340?s=612x612",
      sphere: "Konsulting Firm",
      address: "Toshkent SH. Oliygoh 11",
    },
    {
      id: 3,
      name: "JK Xo'jaligi",
      owner: "Saburov Babur",
      email: "algorithmgatway@gmail.uz",
      image:
        "https://media.gettyimages.com/photos/closeup-smiling-male-leader-wearing-eyeglasses-picture-id1179627340?s=612x612",
      sphere: "Konsulting Firm",
      address: "Toshkent SH. Oliygoh 11",
    },
    {
      id: 4,
      name: "JK Xo'jaligi",
      owner: "Saburov Babur",
      email: "algorithmgatway@gmail.uz",
      image:
        "https://media.gettyimages.com/photos/closeup-smiling-male-leader-wearing-eyeglasses-picture-id1179627340?s=612x612",
      sphere: "Konsulting Firm",
      address: "Toshkent SH. Oliygoh 11",
    },
    {
      id: 5,
      name: "JK Xo'jaligi",
      owner: "Saburov Babur",
      email: "algorithmgatway@gmail.uz",
      image:
        "https://media.gettyimages.com/photos/closeup-smiling-male-leader-wearing-eyeglasses-picture-id1179627340?s=612x612",
      sphere: "Konsulting Firm",
      address: "Toshkent SH. Oliygoh 11",
    },
    {
      id: 6,
      name: "JK Xo'jaligi",
      owner: "Saburov Babur",
      email: "algorithmgatway@gmail.uz",
      image:
        "https://media.gettyimages.com/photos/closeup-smiling-male-leader-wearing-eyeglasses-picture-id1179627340?s=612x612",
      sphere: "Konsulting Firm",
      address: "Toshkent SH. Oliygoh 11",
    },
  ];

  return (
    <div className="px-12 py-12">
      <div className="fcb">
        <h1 className="font-bold text-xl">Bizneslarni tasdiqlash</h1>

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
            placeholder="Egasi | Nomi | Manzili  -  orqali qidirish..."
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

      <div className="flex flex-col | my-12">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 | overflow-auto">
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
                      Biznes Egasi
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Biznes nomi
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Faoliyat turi
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Manzil
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    ></th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {business.map((b) => (
                    <tr key={b.id}>
                      <td className="px-6 py-4 whitespace-nowrap | text-gray-500">
                        {b.id}
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-full object-cover rounded-full"
                              src={b.image}
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {b.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {b.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{b.address}</div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {b.sphere}{" "}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {b.address}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium | fc space-x-3">
                        <a
                          href=""
                          className="fcc | bg-blue-50 hover:bg-bluish-100 p-2 mr-2 | rounded-full"
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
}

export default ModeratorBusinesses;