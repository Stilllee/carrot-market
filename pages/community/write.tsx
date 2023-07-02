import type { NextPage } from "next";

const Write: NextPage = () => {
  return (
    <form className="px-4 py-10">
      <textarea
        className="w-full mt-1 bg-black border-gray-500 rounded-md shadow-sm shadow-white focus:ring-main-blue focus:border-mainring-main-blue"
        rows={4}
        placeholder="Ask a question!"
      />
      <button className="w-full px-4 py-2 mt-2 text-sm transition-colors border-transparent rounded-md shadow-sm bg-main-blue ring-main-blue hover:bg-hover-blue shadow-white focus:ring-2 focus:ring-offset-black focus:ring-offset-2 focus:ring-main-blue focus:outline-none">
        Submit
      </button>
    </form>
  );
};

export default Write;
