import type { NextPage } from "next";

const CommunityPostDetail: NextPage = () => {
  return (
    <div>
      <span className="ml-4 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs bg-gray-900 my-2.5 ">
        동네질문
      </span>
      <div className="flex items-center px-4 py-3 space-x-3 border-b border-gray-400 cursor-pointer">
        <div className="w-10 h-10 rounded-full bg-slate-100" />
        <div>
          <p className="text-sm text-gray-300">Steve Jebs</p>
          <p className="text-xs text-gray-400">View profile &rarr;</p>
        </div>
      </div>
      <div>
        <div className="px-4 mt-2 text-gray-300">
          <span className="text-main-blue">Q.</span> What is the best mandu
          restaurant?
        </div>
        <div className="px-4 flex mt-3 space-x-5 text-gray-300 py-2.5 border-t border-b-[2px] border-gray-400">
          <span className="flex items-center space-x-2 text-sm">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>궁금해요 1</span>
          </span>
          <span className="flex items-center space-x-2 text-sm">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              ></path>
            </svg>
            <span>답변 1</span>
          </span>
        </div>
      </div>
      <div className="px-4 my-5 space-y-5">
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 rounded-full bg-slate-200" />
          <div>
            <span className="block text-sm text-gray-300">Steve Jebs</span>
            <span className="block text-xs text-gray-400">2시간 전</span>
            <p className="mt-2 text-gray-300">
              The best mandu restaurant is the one next to my house.
            </p>
          </div>
        </div>
      </div>
      <div className="px-4">
        <textarea
          className="w-full mt-1 bg-black border-gray-500 rounded-md shadow-sm focus:ring-main-blue focus:border-mainring-main-blue"
          rows={4}
          placeholder="Answer this question!"
        />
        <button className="w-full px-4 py-2 mt-2 text-sm transition-colors border-transparent rounded-md shadow-sm bg-main-blue ring-main-blue hover:bg-hover-blue focus:ring-2 focus:ring-offset-black focus:ring-offset-2 focus:ring-main-blue focus:outline-none">
          Reply
        </button>
      </div>
    </div>
  );
};

export default CommunityPostDetail;
