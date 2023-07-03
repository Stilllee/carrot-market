import Layout from "@/components/layout";
import type { NextPage } from "next";

const Write: NextPage = () => {
  return (
    <Layout canGoBack>
      <form className="px-4 py-4">
        <textarea
          className="w-full mt-1 bg-black border-gray-500 rounded-md shadow-sm focus:ring-main-blue focus:border-mainring-main-blue"
          rows={4}
          placeholder="Ask a question!"
        />
        <button className="w-full px-4 py-2 mt-2 text-sm transition-colors border-transparent rounded-md shadow-sm bg-main-blue ring-main-blue hover:bg-hover-blue focus:ring-2 focus:ring-offset-black focus:ring-offset-2 focus:ring-main-blue focus:outline-none">
          Submit
        </button>
      </form>
    </Layout>
  );
};

export default Write;
