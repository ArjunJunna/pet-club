import React from 'react'

export const Header = () => {
  return (
    <>
      <nav class="sticky top-0 z-20 w-full flex justify-around items-center py-3 border-b-[0.1px] border-gray-700 dark:bg-slate-900">
        <img
          src="../assets/images/petclub.png"
          alt="logo"
          class="mr-auto pl-4 cursor-pointer h-7"
        />
        <div class="bg-slate-800 rounded-full h-9 w-[25rem] border border-gray-600 focus-within:border-orange-700">
          <input
            type="text"
            placeholder="Search people..."
            class="bg-inherit outline-none mt-1 ml-4 text-gray-200 w-[85%]"
          />
          <i class="bi bi-search ml-2.5 cursor-pointer text-orange-600"></i>
        </div>

        <button class="cursor-pointer ml-auto pr-4">
          <img
            src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=432&q=80"
            alt="arjun"
            class="h-10 w-10 sm:h-10 sm:w-10 rounded-full  hover:cursor-pointer"
          />
        </button>
      </nav>
    </>
  );
}
