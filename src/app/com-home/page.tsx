"use client";
import { useState } from "react";
import Image from "next/image";
export default function navbar() {
    return (
        <>
            <section className="bg-gradient-to-r from-red-900 via-white to-blue-900 w-full h-screen">
                <title>my portfolio</title>
                {/* <div >
                    <Image width={100} height={100} className="w-10 h-10 rounded-full" src="/726056.png" alt="" ></Image>
                </div> */}
                <div className="flex justify-around items-center " >
                    <div className="card w-96 glass shadow-xl top-10">
                        <figure><Image width={500} height={500} className="w-full h-auto" src="/IMG_20220710_212143.jpg" alt="people" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-white">Hello</h2>
                            <p className="text-white">
                                I am Sulaiman Cheming. I am looking for job about web devloper,<br />
                                programming. I am willing to learn more about working and willing to gain new experience.
                            </p>
                            <div className="card-actions justify-end">
                                {/* <button className="btn btn-primary">Learn now!</button> */}
                            </div>
                        </div>
                    </div>

                    <div className="card card-side bg-base-100 shadow-xl">
                        <figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">New movie is released!</h2>
                            <p>Click the button to watch on Jetflix app.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Watch</button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}
