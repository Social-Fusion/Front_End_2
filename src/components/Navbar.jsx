import React, { useState } from 'react'
import { Img, Text } from "components";


const Navbar = () => {
    return (
        <div className='pl-2 pt-[5.5rem] flex flex-col gap-[17px] items-start justify-start md:w-full ' >
            <a href="/">
                <div className="flex flex-row gap-[17px] items-end justify-start md:w-full" id="home_button">

                    {/* Home icon */}
                    <Img
                        className="h-[30px] w-[30px]"
                        src="images/img_icon.svg"
                        alt="icon"
                    />

                    {/* Text --> Home */}
                    <Text
                        className="mt-1.5 text-base active:text-cyan-300 text-blue_gray-50 hover:text-cyan-300"
                        size="txtPoppinsBold16"
                    >
                        Home
                    </Text>
                </div>
            </a>

            {/* Anchor tag for Youtube */}
            {/* I have a youtube.jsx file I want to render it when youtube is clicked */}
            {/*  To do this I have to use the Link tag from react-router-dom */}
            {/* <Link to="/youtube"> */}
            {/* <a href="youtube"> */}

            <a href='/youtube'>
                <div className="flex flex-row gap-[15px] items-center justify-start md:w-full">

                    {/* YouTube Icon */}
                    <Img
                        className="h-[30px] w-[30px]"
                        src="images/img_frame2.svg"
                        alt="frameTwo"
                    />

                    {/* You Tube --> Text */}
                    <Text
                        className="text-base text-blue_gray-50 hover:text-cyan-300 active:text-cyan-300"
                        size="txtPoppinsBold16Bluegray50"
                    >
                        YouTube
                    </Text>
                </div>
            </a>

            {/* Anchor tag for Instagram Page */}
            <a href="instagram" className="">
                <div className="flex flex-row gap-[15px] items-end justify-start md:w-full ">

                    {/* Instagram Icon */}
                    <Img
                        className="h-[30px] w-[30px]"
                        src="images/img_frame1.svg"
                        alt="frameOne"
                    />

                    {/* Instagram --> Text */}
                    <Text
                        className="mt-[5px] text-base text-blue_gray-50 hover:text-cyan-300 active:text-cyan-300"
                        size="txtPoppinsBold16Bluegray50"
                    >
                        Instagram
                    </Text>
                </div>
            </a>

            {/* Anchor tag for Twitter Page */}
            <a href="#">
                <div className="flex flex-row gap-[15px] items-start justify-start md:w-full">

                    {/* Analytics Icon */}
                    <Img
                        className="h-[30px] w-[30px]"
                        src="images/img_frame.svg"
                        alt="frame"
                    />

                    {/* Text --> Analytics */}
                    <Text
                        className="mt-1 text-base text-blue_gray-50 hover:text-cyan-300 active:"
                        size="txtPoppinsBold16Bluegray50"
                    >
                        Analytics
                    </Text>
                </div>
            </a>

            {/* Anchor tag for Notification Page */}
            <a href="#">
                <div className="flex flex-row gap-4 items-center justify-start w-full">

                    {/* Notifications Icon */}
                    <Img
                        className="h-[30px] w-[30px]"
                        src="images/img_frame_blue_gray_50.svg"
                        alt="frame_One"
                    />

                    {/* Text --> Notification */}
                    <Text
                        className="text-base text-blue_gray-50 hover:text-cyan-300 active:text-cyan-300"
                        size="txtPoppinsBold16Bluegray50"
                    >
                        Creator
                    </Text>
                </div>
            </a>

            {/* Anchor tag for Profile Page */}
            <a href="#">
                <div className="flex flex-row gap-[15px] items-center justify-start w-[69%] md:w-full">

                    {/* Profile Icon */}
                    <Img
                        className="h-[30px] w-[30px]"
                        src="images/img_frame_30x30.svg"
                        alt="frame_Three"
                    />

                    {/* Text --> Profile */}
                    <Text
                        className="text-base text-blue_gray-50 hover:text-cyan-300 active:text-cyan-300"
                        size="txtPoppinsBold16Bluegray50"
                    >
                        Profile
                    </Text>
                </div>
            </a>
        </div>

    )
}
// console.log(Navbar);
export { Navbar };