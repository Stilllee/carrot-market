import Layout from "@/components/layout";
import type { NextPage } from "next";

const Create: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="px-4 py-4 space-y-5">
        <div>
          <label htmlFor="name" className="block mb-1 text-sm">
            Name
          </label>
          <div className="relative flex items-center rounded-md shadow-sm ">
            <input
              id="name"
              className="w-full px-3 py-2 placeholder-gray-400 bg-black border border-gray-100 rounded-md shadow-sm   appearance-none focus:ring-[#0984e3] focus:outline-none focue:border-[#0984e3]"
              type="text"
            />
          </div>
        </div>
        <div>
          <label htmlFor="price" className="block mb-1 text-sm">
            Price
          </label>
          <div className="relative flex items-center rounded-md shadow-sm ">
            <div className="absolute left-0 flex items-center justify-center pl-3 pointer-events-none ">
              <span className="text-sm text-gray-300">$</span>
            </div>
            <input
              id="price"
              className="pl-7 w-full px-3 py-2 placeholder-gray-400 bg-black border border-gray-100 rounded-md shadow-sm   appearance-none focus:ring-[#0984e3] focus:outline-none focue:border-[#0984e3]"
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
            className="w-full mt-1 bg-black border-gray-500 rounded-md shadow-sm focus:ring-main-blue focus:border-mainring-main-blue"
            rows={4}
          />
        </div>
        <button className="w-full px-4 py-2 mt-5 text-sm transition-colors border-transparent rounded-md shadow-sm bg-main-blue ring-main-blue hover:bg-hover-blue focus:ring-2 focus:ring-offset-black focus:ring-offset-2 focus:ring-main-blue focus:outline-none">
          Go live
        </button>
      </div>
    </Layout>
  );
};

export default Create;
