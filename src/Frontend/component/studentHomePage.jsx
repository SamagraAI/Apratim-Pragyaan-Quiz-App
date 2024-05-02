const StudentHomePage = ()=>{
return (
    <div className="flex justify-center items-center px-12 py-12 bg-gray-800 max-md:px-5">
    
    <div className="bg-black flex h-80vh flex-col px-0 py-0 mt-8 rounded-3xl w-[386px] max-md:px-0 max-md:mt-0`">
        <div className="my-20 mx-0">
        <div class="w-16 h-16"></div>
        <div class="w-[350px] h-[100px] mt-20 mx-5 mb-20  relative">
            <div class="w-[350px] h-[100px]  left-0 top-0 absolute bg-black rounded-[20px] border-2 border-neutral-400"></div>
            <div class="left-[70px]  top-[22px] absolute text-stone-300 text-[40px] font-normal font-['Comic Sans MS']">Enter Code</div>
        </div>
        <div class="w-[250px] h-[50px] mt-20 mx-5 mb-20 relative">
            <div class="w-[350px] h-[100px] left-0 top-0 absolute bg-zinc-300 rounded-[50px]"></div>
            <div class="left-[84px] top-[22px] absolute text-black text-[40px] font-normal font-['Comic Sans MS']">Join Quiz</div>
        </div>
        </div>
        
        <div className="bg-[#222222] border-solid h-20 rounded-md mt-20 mb-0 mx-0">
            <img src="src/utils/icons/LogOut.png" className="w-14 my-2 mr-0 ml-80 cursor-pointer" alt="LogOutbutton" />
        </div>
    
    </div>
    
</div>

);
};

export default StudentHomePage;