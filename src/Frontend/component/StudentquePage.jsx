import { useEffect, useState } from 'react';
import Event from '../../models/event';
import Question from '../../models/question';

const StudentQuestionsPage = () => {
  const [questionText, setQuestionText] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the current running event
        const runningEvent = await Event.getRunningEvent(1); // Assuming event id is 1
        // Fetch the question based on the event's current question id
        const question = await Question.get(runningEvent.Current_Qu, runningEvent.Qz_Id);
        // Update the state with the fetched question's text
        setQuestionText(question.Text);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex justify-center items-center px-12 py-12 bg-gray-800 max-md:px-5">
    <div class="w-[430px] h-[932px] relative bg-black flex-col justify-start items-start inline-flex">
<img class="w-12 h-12" src="https://via.placeholder.com/48x48" />
<div class="w-[233px] h-[68px] text-center text-stone-300 text-[40px] font-normal font-['Comic Sans MS']">Timer : 25</div>
<div class="w-[385px] h-[222px] mx-5 mb-10 relative">
    <div class="w-[385px] h-[222px] left-0 top-0 absolute bg-neutral-800 rounded-[40px] border border-neutral-400"></div>
    <div class="w-[7px] h-[41px] left-[372px] top-[42px] absolute bg-neutral-400 rounded-[20px]"></div>
    <div class="w-56 h-[82.04px] left-[81px] top-[70px] absolute text-center text-stone-300 text-[40px] font-normal font-['Comic Sans MS']">{questionText}</div>
</div>
<div class="w-[385px] h-[439px] mx-5 mb-10 relative">
    <div class="w-[385px] h-[439px] left-0 top-0 absolute bg-green-400 rounded-[40px]"></div>
    <div class="w-[339.58px] h-[51.15px] left-[20px] top-[12px] absolute text-center text-stone-300 text-xl font-normal font-['Comic Sans MS']">Please select the option before the time expires<br/></div>
    <div class="w-[311.72px] h-[267.86px] left-[37px] top-[85px] absolute">
        <div class="w-[311.72px] h-[58.60px] left-0 top-0 absolute">
            <div class="w-[311.72px] h-[58.60px] left-0 top-0 absolute bg-black bg-opacity-50 rounded-[20px]"></div>
            <div class="w-[161px] h-[39.06px] left-[22.84px] top-[6.51px] absolute text-stone-300 text-3xl font-normal font-['Comic Sans MS']">Option 1</div>
        </div>
        <div class="w-[311.72px] h-[58.60px] left-0 top-[209.27px] absolute">
            <div class="w-[311.72px] h-[58.60px] left-0 top-0 absolute bg-black bg-opacity-50 rounded-[20px]"></div>
            <div class="w-[161px] h-[39.06px] left-[22.84px] top-[6.51px] absolute text-stone-300 text-3xl font-normal font-['Comic Sans MS']">Option 2</div>
        </div>
        <div class="w-[311.72px] h-[58.60px] left-0 top-[139.51px] absolute">
            <div class="w-[311.72px] h-[58.60px] left-0 top-0 absolute bg-black rounded-[20px]"></div>
            <div class="w-[161px] h-[39.06px] left-[22.84px] top-[6.51px] absolute text-stone-300 text-3xl font-normal font-['Comic Sans MS']">Option 3</div>
        </div>
        <div class="w-[311.72px] h-[58.60px] left-0 top-[69.76px] absolute">
            <div class="w-[311.72px] h-[58.60px] left-0 top-0 absolute bg-black bg-opacity-50 rounded-[20px]"></div>
            <div class="w-[161px] h-[39.06px] left-[22.84px] top-[6.51px] absolute text-stone-300 text-3xl font-normal font-['Comic Sans MS']">Option 4</div>
        </div>
    </div>
    <div class="w-[154.47px] h-14 left-[116px] top-[368px] absolute">
        <div class="w-[154.47px] h-14 left-0 top-0 absolute bg-black rounded-[50px]"></div>
        <div class="w-[64.66px] left-[44.90px] top-[14px] absolute text-center text-white text-xl font-normal font-['Comic Sans MS']">Clear</div>
    </div>
</div>
<div class="w-[430px] h-[77px] relative">
    <div class="w-[430px] h-[77px] left-0 top-0 absolute bg-neutral-800"></div>
    <img class="w-12 h-12 left-[19px] top-[14px] absolute" src="https://via.placeholder.com/48x48" />
</div>
</div>
</div>
);
};

export default StudentQuestionsPage;


/**
 * const StudentQuestionsPage = ()=>{
    return (
        <div className="flex justify-center items-center px-12 py-12 bg-gray-800 max-md:px-5">
        <div class="w-[430px] h-[932px] relative bg-black flex-col justify-start items-start inline-flex">
    <img class="w-12 h-12" src="https://via.placeholder.com/48x48" />
    <div class="w-[233px] h-[68px] text-center text-stone-300 text-[40px] font-normal font-['Comic Sans MS']">Timer : 25</div>
    <div class="w-[385px] h-[222px] mx-5 mb-10 relative">
        <div class="w-[385px] h-[222px] left-0 top-0 absolute bg-neutral-800 rounded-[40px] border border-neutral-400"></div>
        <div class="w-[7px] h-[41px] left-[372px] top-[42px] absolute bg-neutral-400 rounded-[20px]"></div>
        <div class="w-56 h-[82.04px] left-[81px] top-[70px] absolute text-center text-stone-300 text-[40px] font-normal font-['Comic Sans MS']">Question text</div>
    </div>
    <div class="w-[385px] h-[439px] mx-5 mb-10 relative">
        <div class="w-[385px] h-[439px] left-0 top-0 absolute bg-green-400 rounded-[40px]"></div>
        <div class="w-[339.58px] h-[51.15px] left-[20px] top-[12px] absolute text-center text-stone-300 text-xl font-normal font-['Comic Sans MS']">Please select the option before the time expires<br/></div>
        <div class="w-[311.72px] h-[267.86px] left-[37px] top-[85px] absolute">
            <div class="w-[311.72px] h-[58.60px] left-0 top-0 absolute">
                <div class="w-[311.72px] h-[58.60px] left-0 top-0 absolute bg-black bg-opacity-50 rounded-[20px]"></div>
                <div class="w-[161px] h-[39.06px] left-[22.84px] top-[6.51px] absolute text-stone-300 text-3xl font-normal font-['Comic Sans MS']">Option 1</div>
            </div>
            <div class="w-[311.72px] h-[58.60px] left-0 top-[209.27px] absolute">
                <div class="w-[311.72px] h-[58.60px] left-0 top-0 absolute bg-black bg-opacity-50 rounded-[20px]"></div>
                <div class="w-[161px] h-[39.06px] left-[22.84px] top-[6.51px] absolute text-stone-300 text-3xl font-normal font-['Comic Sans MS']">Option 4</div>
            </div>
            <div class="w-[311.72px] h-[58.60px] left-0 top-[139.51px] absolute">
                <div class="w-[311.72px] h-[58.60px] left-0 top-0 absolute bg-black rounded-[20px]"></div>
                <div class="w-[161px] h-[39.06px] left-[22.84px] top-[6.51px] absolute text-stone-300 text-3xl font-normal font-['Comic Sans MS']">Option 3</div>
            </div>
            <div class="w-[311.72px] h-[58.60px] left-0 top-[69.76px] absolute">
                <div class="w-[311.72px] h-[58.60px] left-0 top-0 absolute bg-black bg-opacity-50 rounded-[20px]"></div>
                <div class="w-[161px] h-[39.06px] left-[22.84px] top-[6.51px] absolute text-stone-300 text-3xl font-normal font-['Comic Sans MS']">Option 2</div>
            </div>
        </div>
        <div class="w-[154.47px] h-14 left-[116px] top-[368px] absolute">
            <div class="w-[154.47px] h-14 left-0 top-0 absolute bg-black rounded-[50px]"></div>
            <div class="w-[64.66px] left-[44.90px] top-[14px] absolute text-center text-white text-xl font-normal font-['Comic Sans MS']">Clear</div>
        </div>
    </div>
    <div class="w-[430px] h-[77px] relative">
        <div class="w-[430px] h-[77px] left-0 top-0 absolute bg-neutral-800"></div>
        <img class="w-12 h-12 left-[19px] top-[14px] absolute" src="https://via.placeholder.com/48x48" />
    </div>
</div>
</div>
    )
}
export default StudentQuestionsPage;
 */