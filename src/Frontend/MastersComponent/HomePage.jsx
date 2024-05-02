import Tile from './tile';
import React from 'react';
const HomePage = ()=>{
    return (
        <div className="flex justify-center items-center px-12 py-12 bg-gray-800 max-md:px-5">
      <div className="bg-black flex h-screen flex-col px-0 py-0 mt-8 rounded-3xl w-[386px] max-md:px-0 max-md:mt-0`">
        <div className="bg-[#61B88F] mt-6 mx-2 border-solid h-screen rounded-lg justify-between p-2" >
            <Tile/>
            <Tile/>
            <Tile/>
            <Tile/>

           
        </div>
        <div className="bg-[#222222] border-solid h-20 rounded-md mt-5 mb- mx-0">
            <img src="src/utils/icons/LogOut.png" className="w-14 my-2 mr-0 ml-80 cursor-pointer" alt="LogOutbutton" />
        </div>
        </div>
    </div>
    );
};

export default HomePage; 