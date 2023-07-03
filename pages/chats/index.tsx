import Layout from "@/components/layout";
import type { NextPage } from "next";

const Chats: NextPage = () => {
  return (
    <Layout title="채팅" hasTabBar>
      <div className="divide-gray-800 divide-y-[1px]">
        {[1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <div
            key={i}
            className="flex items-center px-4 py-3 space-x-3 border-gray-400 cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full bg-slate-100" />
            <div>
              <p className="text-gray-300 ">Steve Jebs</p>
              <p className="text-sm text-gray-400">
                See you tomorrow in the corner at 2pm!
              </p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Chats;
