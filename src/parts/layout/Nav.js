import React from 'react';
import logo from "../../images/logo.png"
export default function Nav() {
    return (
        <nav class="mb-8 flex items-center justify-between py-4 md:mb-12 md:py-8 xl:mb-16">
      
      <a href="/" class="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl" aria-label="BillBox">
        <img src={logo} alt="" width={100}/>
      </a>
      

      
      <nav class="hidden gap-12 lg:flex">
        <a href="#" class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-sky-500 active:text-indigo-700">特徴</a>
        <a href="#" class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-sky-500 active:text-indigo-700">料金プラン</a>
        <a href="#" class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-sky-500 active:text-indigo-700">Pricing</a>
        <a href="#" class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-sky-500 active:text-indigo-700">About</a>
      </nav>
      {/* <!-- nav - end --> */}

      {/* <!-- buttons - start --> */}
      <div>
      {/* <a href="#" class="hidden rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:inline-block mx-5">
        ログイン
        </a> */}
      <a href="#" class="hidden rounded-xl bg-sky-600 px-8 py-3 text-center text-sm font-semibold text-gray-100 outline-none ring-indigo-300 transition duration-100 hover:bg-sky-600 focus-visible:ring active:text-gray-700 md:text-base lg:inline-block">
        お問い合わせ
        </a>
      </div>

      {/* <button type="button" class="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
        </svg>

        Menu
      </button> */}
      {/* <!-- buttons - end --> */}
    </nav>
    )}

