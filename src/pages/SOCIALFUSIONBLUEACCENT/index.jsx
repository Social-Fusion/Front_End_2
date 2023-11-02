// console.log('hello');
import React from "react";

import { Navbar } from '../../components/Navbar';
import { Header } from '../../components/Header';
// import { Posts } from '../../components/Posts';
import { Description } from "../../components/Description";

import SelectPost from "../../components/SelectPost";

import { Img, Input, List, Text } from "components";
import { CloseSVG } from "../../assets/images";

const SOCIALFUSIONBLUEACCENTPage = () => {
  const [serachvalue, setSerachvalue] = React.useState("");

  return (
    <>

      {/* This is the outermost div just to give the background color to the whole page */}
      <div className="bg-gradient flex flex-col font-poppins items-center justify-end mx-auto pt-9 sm:px-5 px-9 w-full" id="outer_div_giving_bg">

        {/* This is the div that contains the whole page */}
        <div className="flex flex-col gap-[22px] items-center justify-end mx-auto md:px-5 w-full" id="Main_content">

          {/* This is the header section that contains the Logo, search bar and profile */}
          < Header />

          {/* Navigation Pane and About Post*/}
          <div className="flex ml-[3.4rem] md:flex-col flex-row md:gap-5 items-start justify-start w-[99%] md:w-full">

            {/* This is the outer div that contains the navigation pane */}
            <div className="flex flex-col items-center justify-start md:mt-0 mt-[8px] w-[13%] md:w-full">

              {/* This is the inner div that contains the navigation pane */}
              <div className="flex flex-col gap-5 items-start justify-start w-full">

                {/* This div navbar which is in the left most part */}
                < Navbar />

              </div>
            </div>

            {/* Posts pane coms here */}

            <SelectPost />

            {/* Post Description Starts */}
            <div className="bg-blue-500_0a flex flex-col items-center justify-start mb-[600px] md:ml-[0] ml-[23px] p-[27px] sm:px-5 rounded-[30px] w-[29%] md:w-full">

              {/* This div contains the profile picture and name */}
              < Description />
            </div>
          </div>
        </div>
      </div >
    </>
  );
};

export default SOCIALFUSIONBLUEACCENTPage;