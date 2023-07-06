import Layout from "@/components/layout";
import type { NextPage } from "next";
import Link from "next/link";
import FloatingButton from "@/components/floating-button";

const Live: NextPage = () => {
  return (
    <Layout title="라이브" hasTabBar>
      <div className="space-y-4 divide-y-2 dark:divide-gray-800">
        {[1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <Link href={`/live/${i}`} className="block px-4 pt-4" key={i}>
            <div className="w-full rounded-md shadow-sm bg-slate-300 aspect-video" />
            <h1 className="mt-4 text-2xl font-bold dark:text-gray-300">
              Galaxy S50
            </h1>
          </Link>
        ))}
        <FloatingButton href="/live/create">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
            ></path>
          </svg>
        </FloatingButton>
      </div>
    </Layout>
  );
};

export default Live;
