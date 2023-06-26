import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="grid min-h-screen gap-10 px-20 py-20 font-semibold text-black bg-slate-400">
      <div className="p-6 bg-white shadow-xl rounded-3xl ">
        <span className="text-3xl ">Select Item</span>
        <div className="flex justify-between my-2">
          <span className="text-gray-500">Grey Chair</span>
          <span>$19</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Tooly Table</span>
          <span>$80</span>
        </div>
        <div className="flex justify-between pt-2 mt-2 border-t-2 border-dashed">
          <span>Total</span>
          <span>$99</span>
        </div>
        <button className="w-2/4 p-3 mx-auto mt-5 text-center text-white bg-blue-500 rounded-xl hover:bg-teal-500 hover:text-black active:bg-yellow-500 focus:bg-red-500 ">
          Checkout
        </button>
      </div>
      <div className="overflow-hidden bg-white shadow-xl rounded-3xl">
        <div className="p-6 bg-blue-500 pb-14">
          <span className="text-2xl text-white">Profile</span>
        </div>
        <div className="relative p-6 bg-white rounded-3xl -top-5">
          <div className="relative flex items-end justify-between -top-16">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-400">Orders</span>
              <span>340</span>
            </div>
            <div className="w-24 h-24 bg-gray-300 rounded-full" />
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-400">Spent</span>
              <span>$2,310</span>
            </div>
          </div>
          <div className="relative flex flex-col items-center -mt-10 -mb-5">
            <span className="text-lg ">Tony Molloy</span>
            <span className="text-sm text-gray-500">미국</span>
          </div>
        </div>
      </div>
      <div className="p-6 bg-white shadow-xl rounded-3xl ">
        <div className="flex items-center justify-between mb-5">
          <span className="text-2xl">&larr;</span>
          <div className="space-x-3">
            <span>⭐4.9</span>
            <span className="p-2 rounded-md shadow-lg">❤️</span>
          </div>
        </div>
        <div className="bg-zinc-400 h-72" />
        <div className="flex flex-col">
          <span className="text-xl ">Swoon Lounge</span>
          <span className="text-xs text-gray-500">Chair</span>
          <div className="flex items-center justify-between mt-3 mb-5">
            <div className="space-x-2">
              <button className="w-5 h-5 bg-yellow-500 rounded-full" />
              <button className="w-5 h-5 bg-indigo-500 rounded-full" />
              <button className="w-5 h-5 bg-teal-500 rounded-full" />
            </div>
            <div className="flex items-center space-x-5">
              <button className="rounded-lg p-1.5 bg-blue-100 flex justify-center items-center aspect-square w-10 text-xl text-gray-500">
                -
              </button>
              <span>1</span>
              <button className="rounded-lg p-1.5 bg-blue-100 flex justify-center items-center aspect-square w-10 text-xl text-gray-500">
                +
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-2xl">$450</span>
            <button className="px-8 py-2 text-xs text-center text-white bg-blue-500 rounded-lg">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
