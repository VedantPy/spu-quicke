// eslint-disable-next-line react/prop-types
const Card = ({ name, desc, image, url }) => {
    return (
      <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-5
                      w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5
                      h-auto">
        <div className="flex justify-center items-center overflow-hidden">
          <a href={url}>
            <img
              className="rounded-t-lg p-5 object-contain w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80"
              src={image}
              alt={name}
            />
          </a>
        </div>
        <div className="p-5">
          <a href={url}>
            <h5 className="mb-2 text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-sm sm:text-base">
            {desc}
          </p>
          <a
            href={url}
            className="inline-flex items-center px-3 py-2 text-sm sm:text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              className="ml-2 w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    );
  };
  
  export default Card;