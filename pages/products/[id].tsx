import Button from "@/components/button";
import Layout from "@/components/layout";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import useSWR from "swr";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Link from "next/link";

const ItemDetail: NextPage = () => {
  const router = useRouter();
  console.log(router.query);
  const { data } = useSWR(
    router.query.id ? `/api/products/${router.query.id}` : null
  );
  console.log(data);

  return (
    <Layout canGoBack>
      <div className="px-4 py-4">
        <div className="mb-8">
          <div className="h-96 bg-slate-100" />
          <div className="flex items-center py-3 space-x-3 border-t border-b cursor-pointer dark:border-gray-800">
            <div className="w-12 h-12 rounded-full bg-slate-100" />
            <div>
              <p className="text-sm dark:text-gray-300">
                {data?.product?.user?.name || <Skeleton />}
              </p>
              <Link
                href={`/users/profiles/${data?.product?.user?.id}`}
                className="text-xs dark:text-gray-400"
              >
                View profile &rarr;
              </Link>
            </div>
          </div>
          <div className="mt-5">
            <h1 className="text-3xl font-bold dark:text-gray-300">
              {data?.product?.name || <Skeleton />}
            </h1>
            <span className="block mt-3 text-3xl dark:text-gray-400">
              \{data?.product?.price || <Skeleton />}
            </span>
            <p className="my-6 dark:text-gray-300">
              {data?.product?.description || <Skeleton />}
            </p>
            <div className="flex items-center justify-between space-x-2">
              <Button large text="Talk to seller" />
              <button className="flex items-center justify-center p-3 text-gray-500 transition-colors rounded-md dark:hover:bg-white hover:bg-gray-200 hover:text-main-blue">
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
                <h3 className="-mb-1 dark:text-gray-300">Galaxy S60</h3>
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
