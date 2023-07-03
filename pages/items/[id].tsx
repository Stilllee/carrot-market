import Layout from "@/components/layout";
import type { NextPage } from "next";

const ItemDetail: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="px-4 py-4">
        <div className="mb-8">
          <div className="h-96 bg-slate-100" />
          <div className="flex items-center py-3 space-x-3 border-t border-b border-gray-400 cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-slate-100" />
            <div>
              <p className="text-sm text-gray-300">Steve Jebs</p>
              <p className="text-xs text-gray-400">View profile &rarr;</p>
            </div>
          </div>
          <div className="mt-5">
            <h1 className="text-3xl font-bold">Galaxy S50</h1>
            <span className="block mt-3 text-3xl">$140</span>
            <p className="my-6 text-gray-300">
              My money&apos;s in that office, right? If she start giving me some
              bullshit about it ain&apos;t there, and we got to go someplace
              else and get it, I&apos;m gonna shoot you in the head then and
              there. Then I&apos;m gonna shoot that bitch in the kneecaps, find
              out where my goddamn money is. She gonna tell me too. Hey, look at
              me when I&apos;m talking to you, motherfucker. You listen: we go
              in there, and that ni**a Winston or anybody else is in there, you
              the first motherfucker to get shot. You understand?
            </p>
            <div className="flex items-center justify-between space-x-2">
              <button className="flex-1 py-3 transition-colors rounded-md bg-main-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-main-blue hover:bg-hover-blue">
                Talk to seller
              </button>
              <button className="flex items-center justify-center p-3 text-gray-500 transition-colors rounded-md hover:bg-white hover:text-main-blue">
                <svg
                  className="w-6 h-6 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Similar items</h2>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4, 5, 6].map((_, i) => (
              <div key={i}>
                <div className="w-full h-56 mt-6 mb-4 bg-slate-100" />
                <h3 className="-mb-1 text-gray-300">Galaxy S60</h3>
                <span className="text-mss">$6</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ItemDetail;
