import type { NextPage } from "next";

const Upload: NextPage = () => {
  return (
    <div className="px-4 py-16">
      <div>
        <label className="cursor-pointer flex items-center justify-center w-full h-48 text-gray-400 border-2 border-gray-400 border-dashed rounded-md hover:text-[#0984e3] hover:border-[#0984e3]">
          <svg
            className="w-12 h-12"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <input className="hidden" type="file" />
        </label>
      </div>
      <div className="my-5">
        <label htmlFor="price" className="block mb-1 text-sm">
          Price
        </label>
        <div className="relative flex items-center rounded-md shadow-sm shadow-white">
          <div className="absolute left-0 flex items-center justify-center pl-3 pointer-events-none ">
            <span className="text-sm text-gray-300">$</span>
          </div>
          <input
            id="price"
            className="pl-7 w-full px-3 py-2 placeholder-gray-400 bg-black border border-gray-100 rounded-md shadow-sm shadow-white appearance-none focus:ring-[#0984e3] focus:outline-none focue:border-[#0984e3]"
            type="text"
            placeholder="0.00"
          />
          <div className="absolute right-0 flex items-center pr-3 pointer-events-none">
            <span className="text-gray-300">USD</span>
          </div>
        </div>
      </div>
      <div>
        <label className="block mb-1 text-sm">Description</label>
        <textarea
          className="w-full mt-1 bg-black shadow-sm shadow-white focus:ring-[#0984e3] rounded-md border-gray-500 focus:border-[#0984e3]"
          rows={4}
        />
      </div>
      <button className="w-full transition-colors mt-5 bg-[#0984e3] py-2 px-4 hover:bg-[#0069b9] border-transparent rounded-md shadow-sm shadow-white text-sm focus:ring-2 focus:ring-offset-black focus:ring-offset-2 focus:ring-[#0984e3] focus:outline-none">
        Upload product
      </button>
    </div>
  );
};

export default Upload;
