import Layout from "@/components/layout";
import Message from "@/components/message";
import type { NextPage } from "next";

const ChatDetail: NextPage = () => {
  return (
    <Layout canGoBack title="Steve">
      <div className="px-4 py-10 pb-16 space-y-4">
        <Message message="Hi how much are you selling them for?" />
        <Message message="I want ￦20,000" reversed />
        <Message message="미쳤어" />
        <form className="fixed inset-x-0 bottom-0 py-2">
          <div className="relative flex items-center w-full max-w-md mx-auto">
            <input
              type="text"
              className="w-full pr-12 border-gray-700 rounded-full shadow-sm dark:bg-black focus:ring-main-blue focus:outline-none focus:border-main-blue"
            />
            <div className="absolute inset-y-0 flex py-1.5 pr-1.5 right-0">
              <button className="flex items-center px-3 text-sm text-white rounded-full hover:bg-hover-blue bg-main-blue focus:ring-2 dark:focus:ring-offset-black focus:ring-offset-2 focus:ring-main-blue focus:outline-none">
                &rarr;
              </button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default ChatDetail;
