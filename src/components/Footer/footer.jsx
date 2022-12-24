import React from 'react'

export const Footer = () => {
  return (
    <>
      <footer class="w-full flex justify-around items-center py-3 border-b-[0.1px] mt-3 border-gray-700 dark:bg-slate-900">
        <img
          src="../assets/images/petclub.png"
          alt="logo"
          class="pl-4 cursor-pointer h-7"
        />
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-500">
          © 2022 Pet Club™. All Rights Reserved.
        </span>
        <div class="flex flex-col">
          <h1 class="text-sm text-gray-500 sm:text-center dark:text-gray-500">
            Get in Touch?
          </h1>
          <div class="flex justify-between text-gray-500">
            <a
              href="https://twitter.com/Arjun_R_A"
              class="hover:text-gray-900 dark:hover:text-white"
              target="”_blank”"
            >
              <i class="fab fa-twitter" aria-hidden="true"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/arjun-r-a-3362aa147/"
              class="hover:text-gray-900 dark:hover:text-white"
              target="”_blank”"
            >
              <i class="fab fa-linkedin" aria-hidden="true"></i>
            </a>
            <a
              href="https://github.com/ArjunJunna"
              class="hover:text-gray-900 dark:hover:text-white"
              target="”_blank”"
            >
              <i class="fab fa-github" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

