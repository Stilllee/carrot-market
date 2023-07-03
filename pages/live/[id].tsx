import type { NextPage } from "next";

const LiveDetail: NextPage = () => {
  return (
    <div className="px-4 py-10 space-y-4">
      <div className="w-full rounded-md shadow-sm bg-slate-300 aspect-video" />
      <h3 className="mt-2 text-2xl font-semibold text-gray-200">
        Let&apos;s try potatos
      </h3>
      <div className="px-4 h-[50vh] overflow-y-scroll pb-16 py-10 space-y-4">
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
            <p>Hi how much are you selling them for?</p>
          </div>
        </div>
        <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
          <div className="w-8 h-8 rounded-full bg-slate-400" />
          <div className="w-1/2 p-2 text-sm text-gray-300 border border-gray-700 rounded-md">
            <p>I want ￦20,000</p>
          </div>
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
  );
};

export default LiveDetail;
