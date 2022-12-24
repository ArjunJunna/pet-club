import React from 'react'

export const SuggestedUsers = () => {
  return (
    <>
      <div class="w-64 sticky top-20 h-full">
        <div class="flex flex-col h-auto bg-slate-800 rounded p-3 tracking-wide gap-2">
          <h1 class="font-bold">Who to Follow</h1>
          <div class="flex gap-2 cursor-pointer">
            <span class="cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=432&q=80"
                alt="arjun"
                class="h-8 w-8 sm:h-8 sm:w-8 rounded-full hover:cursor-pointer"
              />
            </span>
            <div class="flex flex-col grow -mt-0.5">
              <span class="text-sm font-semibold">Prabhas</span>
              <span class="text-sm text-gray-500">@pabsu</span>
            </div>
            <button class="bg-orange-600 rounded-full px-3 font-medium h-7">
              Follow
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

