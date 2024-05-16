"use client";
import { useState } from "react";
import Image from "next/image";

export default function navbar() {

    return (
        <>

            <nav className="flex navbar transparent blur backdrop  bg-slate-100">
                <div className="">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content ">
                        {/* Page content here */}
                        <label htmlFor="my-drawer" className="btn md:hidden ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16">
                                </path>
                            </svg>
                        </label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                        {/* Sidebar content here */}
                        <ul className="menu p-4 w-60 min-h-full bg-base-200 text-base-content ">
                            <div className="btn btn-ghost ">
                                <Image width={100} height={100} className="w-10 h-10 rounded-full" src="/1563.jpg" alt="" ></Image>
                            </div>
                            <div className="pt-10 ">
                                <li>
                                    <a className=" btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-ghost xl:text-xl text-xs  xl:border-b-8 border-b-4 border-red-300">Home</a>
                                </li>
                                <li>
                                    <a className=" btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-ghost xl:text-xl text-xs">Profile</a>
                                </li>
                                <li>
                                    <a className=" btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-ghost xl:text-xl text-xs">performance</a>
                                </li>
                                <li>
                                    <a className=" btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-ghost xl:text-xl text-xs">Contact</a>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>

                <div className="flex-1 btn btn-ghost text-xl ">
                    <Image width={100} height={100} className="w-10 h-10 rounded-full" src="/726056.png" alt="" ></Image>
                    {/* <a className="xl:text-xl text-xs">Sulaiman Cheming</a> */}
                    <a className="xl:text-xl text-xs">my portfolio</a>
                </div>
                <div className="flex-1 justify-center xl:gap-3 xl:pr-5 md:block hidden">
                    <a className=" btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-ghost xl:text-xl text-xs  border-b-8 border-red-300">Home</a>
                    <a className=" btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-ghost xl:text-xl text-xs">Profile</a>
                    <a className=" btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-ghost xl:text-xl text-xs">performance</a>
                    <a className=" btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-ghost xl:text-xl text-xs">Contact</a>
                </div>
            </nav>

        </>
    );
}