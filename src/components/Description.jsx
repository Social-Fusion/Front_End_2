import React from "react";
import { Img, Text } from "components";

const Description = () => {
    return (

        <div className="flex flex-col items-end justify-start w-[98%] md:w-full">

            {/* This div contains the profile picture and name */}
            <div className="flex flex-row items-start justify-start w-full">

                {/* Profile Picture */}
                <div className="flex flex-col h-6 items-center justify-start p-[3px] w-6">

                    {/* Profile Picture */}
                    <div className="flex flex-col h-[18px] items-center justify-start w-[18px]">

                        {/* Profile Picture */}
                        <Img
                            className="h-[18px] w-[18px]"
                            src="images/img_fibrinterrogation.svg"
                            alt="fibrinterrogati"
                        />
                    </div>
                </div>

                {/* Profile Name */}
                <Text
                    className="ml-0.5 text-base text-cyan-300"
                    size="txtPoppinsBold16"
                >
                    About Post
                </Text>
                <Text
                    className="ml-[77px] mt-1.5 text-[10px] text-cyan-300"
                    size="txtPoppinsRegular10"
                >
                    #INSTAGRAM
                </Text>
            </div>
            <div className="flex flex-col items-center justify-start mt-[26px] w-[98%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                    <Text
                        className="text-blue_gray-50 text-xs"
                        size="txtPoppinsSemiBold12"
                    >
                        <>
                            HEY BLINKs! 🖤💖
                            <br />
                            <br />
                            In my performance videos, I pour my heart into every
                            beat and move. It&#39;s all about embracing my love for
                            rap and dance, sharing my passion with you. Get ready
                            for an explosive mix of energy, style, and pure emotion!
                            Thank you for supporting me always. <br />
                            <br />
                            ~Lisa
                        </>
                    </Text>
                </div>
            </div>

            <div className="flex flex-col items-center justify-start mt-[15px]">
                <a href="#">
                    <Text
                        className="text-cyan-300 text-sm"
                        size="txtPoppinsSemiBold14"
                    >

                        Show More
                    </Text>
                </a>
            </div>
        </div>

    );
}

export { Description };