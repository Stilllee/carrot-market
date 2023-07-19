import Button from "@/components/button";
import Layout from "@/components/layout";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import useSWR, { useSWRConfig } from "swr";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Link from "next/link";
import { Product, User } from "@prisma/client";
import useMutation from "@/libs/client/useMutation";
import { cls } from "@/libs/client/utils";
import useUser from "@/libs/client/useUser";

interface ProductWithUser extends Product {
  user: User;
}

interface ItemDetailResponse {
  ok: boolean;
  product: ProductWithUser;
  relatedProducts: Product[];
  isLiked: boolean;
}

const ItemDetail: NextPage = () => {
  const { user, isLoading } = useUser();
  const router = useRouter();
  const { mutate } = useSWRConfig();
  const { data, mutate: boundMutate } = useSWR<ItemDetailResponse>(
    router.query.id ? `/api/products/${router.query.id}` : null
  );
  const [toggleFav] = useMutation(`/api/products/${router.query.id}/fav`);
  const onFavClick = () => {
    if (!data) return;
    boundMutate((prev) => prev && { ...prev, isLiked: !prev?.isLiked }, false);
    // mutate("/api/users/me", (prev: any) => ({ ok: !prev.ok }), false);
    toggleFav({});
  };
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
            <span className="mt-3 text-3xl dark:text-gray-400">
              {data?.product?.price ? `₩${data?.product?.price}` : <Skeleton />}
            </span>
            <p className="my-6 dark:text-gray-300">
              {data?.product?.description || <Skeleton />}
            </p>
            <div className="flex items-center justify-between space-x-2">
              <Button large text="Talk to seller" />
              <button
                onClick={onFavClick}
                className={cls(
                  "flex items-center justify-center p-3  transition-colors rounded-md dark:hover:bg-white hover:bg-gray-200 ",
                  data?.isLiked
                    ? "text-main-blue hover:text-gray-500"
                    : "text-gray-500 hover:text-main-blue"
                )}
              >
                <svg
                  className="w-6 h-6 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill={data?.isLiked ? "currentColor" : "none"}
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
            {data ? (
              data?.relatedProducts.map((product) => (
                <div key={product.id}>
                  <div className="w-full h-56 mt-6 mb-4 bg-slate-100" />
                  <h3 className="-mb-1 font-bold dark:text-gray-300">
                    {product.name}
                  </h3>
                  <span className="text-sm font-bold dark:text-gray-100">
                    ₩{product.price}
                  </span>
                </div>
              ))
            ) : (
              <>
                <div>
                  <Skeleton height={224} className="w-full mt-6 mb-4" />
                  <Skeleton className="-mb-1" />
                  <Skeleton />
                </div>
                <div>
                  <Skeleton height={224} className="w-full mt-6 mb-4" />
                  <Skeleton className="-mb-1" />
                  <Skeleton />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ItemDetail;
