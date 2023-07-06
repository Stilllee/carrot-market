import Layout from "@/components/layout";
import type { NextPage } from "next";
import Message from "@/components/message";

const LiveDetail: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="px-4 py-10 space-y-4">
        <div className="w-full rounded-md shadow-sm bg-slate-300 aspect-video" />
        <div className="mt-5">
          <h1 className="text-3xl font-bold dark:text-gray-50">Galaxy S50</h1>
          <span className="block mt-3 text-3xl dark:text-gray-200">$140</span>
          <p className="my-6 dark:text-gray-300">
            My money&apos;s in that office, right? If she start giving me some
            bullshit about it ain&apos;t there, and we got to go someplace else
            and get it, I&apos;m gonna shoot you in the head then and there.
            Then I&apos;m gonna shoot that bitch in the kneecaps, find out where
            my goddamn money is. She gonna tell me too. Hey, look at me when
            I&apos;m talking to you, motherfucker. You listen: we go in there,
            and that ni**a Winston or anybody else is in there, you the first
            motherfucker to get shot. You understand?
          </p>
        </div>
        <h2 className="mt-2 text-2xl font-semibold dark:text-gray-200">
          Live Chat
        </h2>
        <div className="px-4 h-[50vh] overflow-y-scroll pb-16 py-10 space-y-4">
          <Message message="Hi how much are you selling them for?" />
          <Message message="I want ￦20,000" reversed />
          <Message message="미쳤어" />
        </div>
        <div className="fixed inset-x-0 bottom-0 py-2">
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
        </div>
      </div>
    </Layout>
  );
};

export default LiveDetail;
