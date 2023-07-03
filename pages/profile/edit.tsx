import Button from "@/components/button";
import Input from "@/components/input";
import Layout from "@/components/layout";
import type { NextPage } from "next";

const EditProfile: NextPage = () => {
  return (
    <Layout canGoBack title="Edit Profile">
      <form className="px-4 py-4 space-y-4">
        <div className="flex items-center space-x-3">
          <div className="rounded-full w-14 h-14 bg-slate-500" />
          <label
            htmlFor="picture"
            className="px-3 py-2 text-sm text-gray-300 border border-gray-700 rounded-md shadow-sm cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-main-blue"
          >
            Change
            <input
              id="picture"
              type="file"
              className="hidden"
              accept="image/*"
            />
          </label>
        </div>
        <Input required label="Email address" name="email" type="email" />
        <Input
          required
          label="Phone number"
          name="phone"
          type="number"
          kind="phone"
        />
        <Button text="Update profile" />
      </form>
    </Layout>
  );
};

export default EditProfile;
