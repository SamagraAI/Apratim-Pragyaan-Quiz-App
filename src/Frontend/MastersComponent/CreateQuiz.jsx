const CreateQuiz= ()=>{
    return (
        <div className="flex justify-center items-center px-12 py-12 bg-gray-800 max-md:px-5">
        <div className="w-[430px] h-[1020px] relative bg-black flex-col justify-start items-start inline-flex">
    <div className="text-white text-3xl font-normal font-['Comic Sans MS']">Enter Quiz details </div>
    <div className="w-[406px] h-[118px] relative">
        <div className="w-[88px] left-0 top-0 absolute text-stone-300 text-3xl font-normal font-['Comic Sans MS']">Title :</div>
        <div className="w-[395px] h-[55px] left-0 top-[42px] absolute bg-black rounded-[20px] border-2 border-neutral-400"></div>
        {/* <div className="w-[392px] left-[14px] top-[97px] absolute text-red-800 text-[15px] font-normal font-['Comic Sans MS']">can not leave field empty / Title already taken*</div> */}
    </div>
    <div className="w-[395px] h-[181px] relative">
        <div className="w-[184px] left-0 top-0 absolute text-stone-300 text-3xl font-normal font-['Comic Sans MS']">Description :</div>
        {/* <div className="w-[202px] left-[14px] top-[160px] absolute text-red-800 text-[15px] font-normal font-['Comic Sans MS']">can not leave field empty*</div> */}
        <div className="w-[395px] h-[118px] left-0 top-[42px] absolute text-clip bg-black rounded-[20px] border-2 border-neutral-400"></div>
    </div>
    <div className="w-[395px] h-[309px] relative">
        <div className="w-[395px] h-[309px] left-0 top-0 absolute bg-black bg-opacity-0 rounded-[20px] border-2 border-neutral-400"></div>
        <div className="w-[229px] left-[85px] top-[128px] absolute text-center text-stone-300 text-[25px] font-normal font-['Comic Sans MS']">Upload your file here</div>
        <img className="w-[82px] h-[82px] left-[157px] top-[46px] absolute" src="https://via.placeholder.com/82x82" />
        <div className="w-[172px] h-14 left-[117px] top-[211px] absolute">
            <div className="w-[172px] h-14 left-0 top-0 absolute bg-white rounded-[50px]"></div>
            <div className="w-[72px] left-[50px] top-[14px] absolute text-center text-black text-xl font-normal font-['Comic Sans MS']">Upload</div>
        </div>
    </div>
    <img className="w-12 h-12" src="https://via.placeholder.com/48x48" />
    <div className="w-12 h-12"></div>
    <div className="w-[363px] text-center text-stone-300 text-xl font-normal font-['Comic Sans MS']">Allow participation after quiz start</div>
    <div className="w-[111px] text-center text-black text-3xl font-normal font-['Comic Sans MS']">Submit</div>
    <div className="w-[172px] h-14 relative">
        <div className="w-[172px] h-14 left-0 top-0 absolute bg-white rounded-[50px]"></div>
        <div className="w-[72px] left-[50px] top-[14px] absolute text-center text-black text-xl font-normal font-['Comic Sans MS']">Submit</div>
    </div>
    <div className="w-[430px] h-[74px] relative">
        <div className="w-[430px] h-[74px] left-0 top-0 absolute bg-neutral-800"></div>
        <img className="w-[60px] h-[52.49px] left-[22px] top-[5.16px] absolute" src="src/utils/icons/home.png" />
    </div>
</div>
</div>

    )
}

export default CreateQuiz