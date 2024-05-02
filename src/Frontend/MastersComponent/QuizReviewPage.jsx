const QuizReview = ()=>{
    return (
<div className="flex justify-center items-center px-12 py-12 bg-gray-800 max-md:px-5">
        <div class="w-[430px] h-[900    px] relative bg-black flex-col justify-start items-start inline-flex rounded-md">
    <div class="text-white text-3xl font-normal font-['Comic Sans MS']">Quiz Title</div>
    <div class="w-[430px] h-[712.47px] relative">
        <div class="w-[385px] h-[712.47px] left-[28px] top-0 absolute">
            <div class="w-[385px] h-[712px] left-0 top-0 absolute bg-red-500 bg-opacity-50 rounded-[40px]"></div>
            <div class="w-[385px] h-[393px] left-0 top-[319.47px] absolute bg-red-500 rounded-[40px]">  </div>
            <div class="w-[311.72px] h-[267.86px] left-[38px] top-[382px] absolute">
                <div class="w-[311.72px] h-[58.60px] left-0 top-0 absolute">
                    <div class="w-[311.72px] h-[58.60px] left-0 top-0 absolute bg-black bg-opacity-60 rounded-[20px]"></div>
                    <div class="w-[161px] h-[39.06px] left-[22.84px] top-[6.51px] absolute text-stone-300 text-3xl font-normal font-['Comic Sans MS']">Option 1</div>
                </div>
                <div class="w-[311.72px] h-[58.60px] left-0 top-[209.27px] absolute">
                    <div class="w-[311.72px] h-[58.60px] left-0 top-0 absolute bg-black bg-opacity-60 rounded-[20px]"></div>
                    <div class="w-[161px] h-[39.06px] left-[22.84px] top-[6.51px] absolute text-stone-300 text-3xl font-normal font-['Comic Sans MS']">Option 4</div>
                </div>
                <div class="w-[311.72px] h-[58.60px] left-0 top-[139.51px] absolute">
                    <div class="w-[311.72px] h-[58.60px] left-0 top-0 absolute bg-black rounded-[20px]"></div>
                    <img class="w-10 h-10 left-[262px] top-[9.49px] absolute" src="src/utils/icons/correctIcon.png" />
                    <div class="w-[161px] h-[39.06px] left-[22.84px] top-[6.51px] absolute text-stone-300 text-3xl font-normal font-['Comic Sans MS']">Option 3</div>
                </div>
                <div class="w-[311.72px] h-[58.60px] left-0 top-[69.76px] absolute">
                    <div class="w-[311.72px] h-[58.60px] left-0 top-0 absolute bg-black bg-opacity-60 rounded-[20px]"></div>
                    <div class="w-[161px] h-[39.06px] left-[22.84px] top-[6.51px] absolute text-stone-300 text-3xl font-normal font-['Comic Sans MS']">Option 2</div>
                </div>
            </div>
            <div class="w-[7px] h-[41px] left-[371px] top-[89.47px] absolute bg-neutral-400 rounded-[20px]"></div>
        </div>
        <div class="w-[350px] h-[78px] left-[45px] top-[227.47px] absolute">
            <div class="w-[350px] h-[78px] left-0 top-0 absolute bg-black rounded-[40px]"></div>
            <div class="w-[241.64px] h-[23.25px] left-[40.36px] top-[2px] absolute text-center text-stone-300 text-[40px] font-normal font-['Comic Sans MS']">Explanation</div>
            <img class="w-[43.64px] h-9 left-[289.09px] top-[21.36px] absolute" src="src/utils/icons/expand.png" />
        </div>
        <div class="w-[430px] h-44 left-0 top-[42px] absolute text-center text-white text-[40px] font-normal font-['Comic Sans MS']">Question<br/>description</div>
    </div>
    <div class="w-[430px] h-[77px] relative mb-0 mt-20">
        <div class="w-[430px] h-[77px] left-0 top-0 absolute bg-neutral-800"></div>
        <img class="w-12 h-12 left-[22px] top-[17px] absolute" src="src/utils/icons/home.png" />
        <img class="w-12 h-12 left-[361px] top-[17px] absolute" src="src/utils/icons/leaderBoard.png" />
        <img class="w-12 h-12 left-[180px] top-[17px] absolute" src="src/utils/icons/launchIcon2.png" />
        
    </div>
    
</div>
</div>
    );
}

export default QuizReview;