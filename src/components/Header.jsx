// console.log('hello');
import React from "react";
import { Img, Input, Text } from "components";
import { CloseSVG } from "../assets/images";

const Header = () => {
    const [serachvalue, setSerachvalue] = React.useState("");

    return (
        <>

            {/* This is the outermost div just to give the background color to the whole page */}

            {/* This is the div that contains the whole page */}


            {/* This is the div that contains the Logo, search bar and profile */}
            <header className="flex mb-5 md:flex-col flex-row md:gap-5 items-center justify-center w-full" id="logo_sbar_profile">

                {/* Logo Comes Here */}
                <Img
                    className="md:flex-1 h-[51px] sm:h-auto md:mt-0 my-1 object-cover w-[18%] md:w-full"
                    src="images/img_sflogo.png"
                    alt="sflogo"
                    id="logo_social_fusion"
                />

                {/* Search Bar Comes Here */}
                <Input
                    id="search_bar"
                    name="serach"
                    placeholder="Search "
                    value={serachvalue}
                    onChange={(e) => setSerachvalue(e)}
                    className="font-bold leading-[normal] p-0 placeholder:text-blue_gray-50 sm:pr-5 text-blue_gray-50 text-left text-sm w-full"
                    wrapClassName="bg-blue-500_0a flex md:flex-1 ml-12 md:ml-[0] md:mt-0 my-1 pl-5 pr-[35px] py-[13px] rounded-[25px] w-[49%] md:w-full"
                    prefix={
                        // This is the search icon
                        <Img
                            className="cursor-pointer h-6 mr-3 my-auto"
                            src="images/img_search.svg"
                            alt="search"
                        />
                    }
                    suffix={
                        <CloseSVG
                            fillColor="#f1f1f1"
                            className="cursor-pointer h-6 my-auto"
                            onClick={() => setSerachvalue("")}
                            style={{
                                visibility: serachvalue?.length <= 0 ? "hidden" : "visible",
                            }}
                            height={24}
                            width={24}
                            viewBox="0 0 24 24"
                        />
                    }
                ></Input>


                {/* Profile Comes Here */}

                {/* This div contains the spacing between the items. */}
                <div className="flex md:flex-1 flex-col items-center justify-start ml-4 md:ml-[0] w-[29%] md:w-full" id="">

                    {/* This div just gives the margin between the  */}
                    <div className="bg-blue-500_0a flex flex-row items-center justify-start p-[5px] rounded-[30px] w-full">

                        {/* Profile Picture */}
                        <div className="flex flex-col h-[50px] items-center justify-start ml-0.5 w-[50px]">

                            {/* Profile Picture for the user */}
                            <Img
                                className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                                src="images/img_captainamerica.png"
                                alt="captainamerica"
                            />
                        </div>

                        {/* Profile Name */}
                        <div className="flex flex-col items-start justify-start ml-[5px]">

                            {/* Profile Name for the user */}
                            <Text
                                className="text-sm text-white-A700"
                                size="txtRobotoBold14"
                            >
                                <span className="text-white-A700 font-poppins text-left font-bold">
                                    Soban Shaikh
                                </span>
                                <span className="text-white-A700 font-roboto text-left font-bold">
                                    {" "}
                                </span>
                            </Text>

                            {/* user Id of the user */}
                            <Text
                                className="mt-[3px] text-[10px] text-cyan-300"
                                size="txtPoppinsRegular10"
                            ><a href="#">
                                    @soban_1103
                                </a>
                            </Text>
                        </div>

                        {/* Settings Logo*/}
                        <a href="#">
                            <Img
                                className="h-4 ml-[115px] w-[17px]"
                                src="images/img_settings.svg"
                                alt="settings"
                            />
                        </a>
                    </div>
                </div>
            </header>
        </>
    );
};

export { Header };