import Layout from "@/components/layout";
import type { NextPage } from "next";
import Button from "@/components/button";
import TextArea from "@/components/textarea";

const Write: NextPage = () => {
  return (
    <Layout canGoBack title="Write Post">
      <form className="px-4 py-4 space-y-4">
        <TextArea required placeholder="Ask a question!" />
        <Button text="Submit" />
      </form>
    </Layout>
  );
};

export default Write;
