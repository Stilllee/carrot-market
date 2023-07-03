import Layout from "@/components/layout";
import type { NextPage } from "next";

const ChatDetail: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="px-4 py-4 pb-16 space-y-4">
        <div className="flex items-start space-x-2">
          <div className="w-8 h-8 rounded-full bg-slate-400" />
          <div className="w-1/2 p-2 text-sm text-gray-300 border border-gray-700 rounded-md">
            <p>Hi how much are you selling them for?</p>
          </div>
        </div>
        <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
          <div className="w-8 h-8 rounded-full bg-slate-400" />
          <div className="w-1/2 p-2 text-sm text-gray-300 border border-gray-700 rounded-md">
            <p>I want ￦20,000</p>
          </div>
        </div>
        <div className="flex items-start space-x-2">
          <div className="w-8 h-8 rounded-full bg-slate-400" />
          <div className="w-1/2 p-2 text-sm text-gray-300 border border-gray-700 rounded-md">
            <p>미쳤어</p>
          </div>
        </div>
        <div className="fixed inset-x-0 w-full max-w-md mx-auto bottom-2">
          <div className="relative flex items-center">
            <input
              type="text"
              className="w-full pr-12 bg-black border-gray-700 rounded-full shadow-sm focus:ring-main-blue focus:outline-none focus:border-main-blue"
            />
            <div className="absolute inset-y-0 flex py-1.5 pr-1.5 right-0">
              <button className="flex items-center px-3 text-sm rounded-full hover:bg-hover-blue bg-main-blue focus:ring-2 focus:ring-offset-black focus:ring-offset-2 focus:ring-main-blue focus:outline-none">
                &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ChatDetail;
