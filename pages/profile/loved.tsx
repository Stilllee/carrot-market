import Layout from "@/components/layout";
import type { NextPage } from "next";
import Item from "@/components/item";

const Loved: NextPage = () => {
  return (
    <Layout canGoBack title="관심목록">
      <div className="flex flex-col pb-10 space-y-5 divide-y dark:divide-gray-800">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <Item
            key={i}
            id={i}
            title="iPhone 14"
            price={99}
            comments={1}
            hearts={1}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Loved;
