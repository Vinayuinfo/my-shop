import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-100 border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/">
            <Image
              src="/shopping-logo.svg"
              className="h-20 w-20"
              alt="My-Store"
              height={100}
              width={100}
            />
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex space-x-6">
              <li className="text-xl font-medium tracking-wide hover:text-red-500 cursor-pointer font-Oswald">
                <Link href="/product"> Our Product </Link>
              </li>
              <li className="text-xl font-medium tracking-wide hover:text-red-500 cursor-pointer font-Oswald">
                <Link href="/addproduct">Add Product</Link>
              </li>
              <li className="text-xl font-medium tracking-wide hover:text-red-500 cursor-pointer font-Oswald">
                <Link href="/aboutus">About us</Link>
              </li>
              <li className="text-xl font-medium tracking-wide hover:text-red-500 cursor-pointer font-Oswald">
                <Link href="/privacypolicy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
