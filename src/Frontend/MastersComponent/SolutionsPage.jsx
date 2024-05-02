import { useEffect, useState } from 'react';
import Event from '../../models/event';
import Question from '../../models/question';
import { useNavigate } from 'react-router-dom'; 


const SolutionsPage = ()=> {

    const [explnText, setExplnText] = useState('');
    const [currEvent, setCurrEvent] = useState(null);

    const navigate = useNavigate();

    const nextBtnHandler = async ()=>{ 
        try {
        currEvent.Status = "question";
        
        currEvent.Current_Qu += 1 ; 

        if(currEvent.Current_Qu > 5)
        {
            currEvent.Status = "end";
            currEvent.Current_Qu = 1 ; 
            await currEvent.update(); 
           navigate("/end"); 
        }

        await currEvent.update(); 
        
        navigate("/masterQuestion");
        }catch (error) {
                  console.error('Error launching quiz:', error);
                }
    };

    useEffect(() => {
        const fetchData = async () => {
          try {
            // Fetch the current running event
            const runningEvent = await Event.getRunningEvent(1); // Assuming event id is 1
            // Fetch the question based on the event's current question id
            setCurrEvent(runningEvent); 
            const question = await Question.get(runningEvent.Current_Qu, runningEvent.Qz_Id);
            // Update the state with the fetched question's text
            setExplnText(question.Expln);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);


    return (
        <div className="flex justify-center items-center px-12 py-12 bg-gray-800 max-md:px-5">
        <div class="w-[430px] rounded-md relative h-screen bg-black flex-col justify-start items-start inline-flex">
            <div className='flex space-x-40 mb-10 '>
            <div class="w-[233px] h-[35px] text-center text-neutral-400 text-[25px] font-normal font-['Comic Sans MS']">Entry Code: 1234</div>
    <img class="w-12 h-12 ml-80 " src="utils/icons/questionList.png" />
            </div>
    
    {/* <div class="w-[7px] h-[41px] bg-neutral-400 rounded-[20px]"></div> */}
    <div class="w-[385px] h-[393px] mx-6 mb-10   relative">
        <div class="w-[385px] h-[393px] left-0 top-0 absolute bg-sky-400 rounded-[40px]"></div>
        <div class="w-[311.72px] h-[59px] left-[22px] top-[289px] absolute">
            <div class="w-[311.72px] h-[58.60px] left-0 top-0 absolute bg-neutral-800 bg-opacity-40 rounded-[20px]"></div>
            <div class="w-[120px] h-[59px] left-0 top-0 absolute bg-black bg-opacity-50 rounded-[20px]"></div>
            <div class="w-[124px] h-[39px] left-[15px] top-[6px] absolute text-stone-300 text-3xl font-normal font-['Comic Sans MS']">Option 4</div>
        </div>
        <div class="w-[311.72px] h-[59px] left-[22px] top-[213px] absolute">
            <div class="w-[311.72px] h-[58.60px] left-0 top-0 absolute bg-neutral-800 bg-opacity-40 rounded-[20px]"></div>
            <div class="w-[179px] h-[59px] left-0 top-0 absolute bg-black rounded-[20px]"></div>
            <div class="w-[124px] h-[39px] left-[15px] top-[6px] absolute text-stone-300 text-3xl font-normal font-['Comic Sans MS']">Option 3</div>
        </div>
        <div class="w-[311.72px] h-[125px] left-[22px] top-[137px] absolute">
            <div class="w-[311.72px] h-[58.60px] left-0 top-0 absolute bg-neutral-800 bg-opacity-40 rounded-[20px]"></div>
            <div class="w-[229px] h-[59px] left-0 top-0 absolute bg-black bg-opacity-50 rounded-[20px]"></div>
            <div class="w-[124px] h-[39px] left-[15px] top-[6px] absolute text-stone-300 text-3xl font-normal font-['Comic Sans MS']">Option 2</div>
            <img class="w-10 h-10 left-[262px] top-[85px] absolute" src="utils/icons/correctIcon.png" />
        </div>
        <div class="w-[311.72px] h-[59px] left-[22px] top-[61px] absolute">
            <div class="w-[311.72px] h-[58.60px] left-0 top-0 absolute bg-neutral-800 bg-opacity-40 rounded-[20px]"></div>
            <div class="w-[154px] h-[59px] left-0 top-0 absolute bg-black bg-opacity-50 rounded-[20px]"></div>
            <div class="w-[124px] h-[39px] left-[15px] top-[6px] absolute text-stone-300 text-3xl font-normal font-['Comic Sans MS']">Option 1</div>
        </div>
        <div class="w-[51px] h-[39px] left-[333px] top-[71px] absolute text-center text-black text-base font-normal font-['Comic Sans MS']">5%</div>
        <div class="w-[51px] h-[39px] left-[334px] top-[150px] absolute text-center text-black text-base font-normal font-['Comic Sans MS']">10%</div>
        <div class="w-[51px] h-[39px] left-[334px] top-[221px] absolute text-center text-black text-base font-normal font-['Comic Sans MS']">7%</div>
        <div class="w-[51px] h-[39px] left-[333px] top-[299px] absolute text-center text-black text-base font-normal font-['Comic Sans MS']">100%</div>
    </div>
    <div class="w-56 h-[58px] text-center ml-20 mb-6 text-stone-300 text-[40px] font-normal font-['Comic Sans MS']">Explanation</div>
    <div  onClick = {nextBtnHandler} className="bg-[#222222] border-solid h-20 w-full p-3 rounded-md mt-12 mx-0">
            <img src="utils/icons/nextBtn.png" className="w-14 my-1 ml-80 mr-0 cursor-pointer" alt="NextBtn" />
    </div>
</div>
</div>

    );
};

export default SolutionsPage;