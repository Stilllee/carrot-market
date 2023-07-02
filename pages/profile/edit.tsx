import type { NextPage } from "next";

const EditProfile: NextPage = () => {
  return (
    <div className="px-4 py-10 space-y-4">
      <div className="flex items-center space-x-3">
        <div className="rounded-full w-14 h-14 bg-slate-500" />
        <label
          htmlFor="picture"
          className="px-3 py-2 text-sm text-gray-300 border border-gray-700 rounded-md shadow-sm cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-main-blue"
        >
          Change
          <input id="picture" type="file" className="hidden" accept="image/*" />
        </label>
      </div>
      <div className="space-y-1">
        <label htmlFor="email" className="text-sm">
          Email address
        </label>
        <input
          id="email"
          type="email"
          className="w-full px-3 py-2 placeholder-gray-400 bg-black border border-gray-100 rounded-md shadow-sm appearance-none focus:ring-main-blue focus:outline-none focue:border-main-blue"
          required
        />
      </div>
      <div className="space-y-1">
        <label htmlFor="phone" className="text-sm">
          Phone number
        </label>
        <div className="flex rounded-md shadow-sm ">
          <span className="flex items-center justify-center px-3 text-sm text-gray-400 border border-r-0 shadow-sm select-none rounded-l-md ">
            +82
          </span>
          <input
            id="phone"
            className="w-full px-3 py-2 placeholder-gray-400 bg-black border border-gray-100 rounded-md rounded-l-none shadow-sm appearance-none focus:ring-main-blue focus:outline-none focue:border-main-blue"
            type="number"
            required
          />
        </div>
      </div>
      <button className="w-full px-4 py-2 mt-5 text-sm transition-colors border-transparent rounded-md shadow-sm bg-main-blue hover:bg-hover-blue focus:ring-2 focus:ring-offset-black focus:ring-offset-2 focus:ring-main-blue focus:outline-none">
        Update profile
      </button>
    </div>
  );
};

export default EditProfile;
