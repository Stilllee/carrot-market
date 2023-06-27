import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col h-screen p-5 space-y-2 text-black bg-white">
      <p className="first-letter:text-7xl first-letter:hover:text-purple-400">
        Hello everyone!
      </p>
    </div>
  );
};

export default Home;
