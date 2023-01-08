import React from 'react'

export const Footer = () => {
  return (
    <>
      <footer className="w-full flex justify-around items-center py-3 border-b-[0.1px] mt-3 border-gray-700 dark:bg-slate-900">
        <img
          src="../assets/images/petclub.png"
          alt="logo"
          className="pl-4 cursor-pointer h-7"
        />
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-500">
          © 2022 Pet Club™. All Rights Reserved.
        </span>
        <div className="flex flex-col">
          <h1 className="text-sm text-gray-500 sm:text-center dark:text-gray-500">
            Get in Touch?
          </h1>
          <div className="flex justify-between text-gray-500">
            <a
              href="https://twitter.com/Arjun_R_A"
              className="hover:text-gray-900 dark:hover:text-white"
              target="”_blank”"
            >
              <i className="fab fa-twitter" aria-hidden="true"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/arjun-r-a-3362aa147/"
              className="hover:text-gray-900 dark:hover:text-white"
              target="”_blank”"
            >
              <i className="fab fa-linkedin" aria-hidden="true"></i>
            </a>
            <a
              href="https://github.com/ArjunJunna"
              className="hover:text-gray-900 dark:hover:text-white"
              target="”_blank”"
            >
              <i className="fab fa-github" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

