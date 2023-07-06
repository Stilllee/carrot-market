import Layout from "@/components/layout";
import type { NextPage } from "next";
import Link from "next/link";

const Chats: NextPage = () => {
  return (
    <Layout title="채팅" hasTabBar>
      <div className="dark:divide-gray-800 divide-y-[1px]">
        {[1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <Link
            href={`/chats/${i}`}
            key={i}
            className="flex items-center px-4 py-3 space-x-3 cursor-pointer dark:border-gray-400"
          >
            <div className="w-12 h-12 rounded-full bg-slate-100" />
            <div>
              <p className="dark:text-gray-300 ">Steve Jebs</p>
              <p className="text-sm dark:text-gray-400">
                See you tomorrow in the corner at 2pm!
              </p>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default Chats;
