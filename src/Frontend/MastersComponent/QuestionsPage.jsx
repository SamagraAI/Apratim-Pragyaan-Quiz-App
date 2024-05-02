import { useEffect, useState } from 'react';
import Event from '../../models/event';
import Question from '../../models/question';
import { useNavigate } from 'react-router-dom'; 



const QuestionsPage = ()=>{
    const [questionText, setQuestionText] = useState('');
    const [currEvent, setCurrEvent] = useState(null);

    const navigate = useNavigate();

    const solutionBtnHandler = async ()=>{ 
        try {
        currEvent.Status = "solution";
        await currEvent.update(); 
        navigate("/masterSolution");
        }catch (error) {
                  console.error('Error launching quiz:', error);
                }
    };

    
//   const handleLaunchQuiz = async () => {
//     try {
//       // Update the event status to "questions"
//       event.Status = 'questions';
//       await event.update();
//       // After updating the status, navigate to the QuestionsPage
//       navigate('/questions');
//     } catch (error) {
//       console.error('Error launching quiz:', error);
//     }
//   };
    useEffect(() => {
        const fetchData = async () => {
          try {
            // Fetch the current running event
            const runningEvent = await Event.getRunningEvent(1); // Assuming event id is 1
            // Fetch the question based on the event's current question id
            setCurrEvent(runningEvent); 
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
                <div className="bg-black flex h-screen flex-col px-0 py-0 mt-8 rounded-3xl w-[386px] max-md:px-0 max-md:mt-0`">
    <div className="w-[233px] h-[35px] text-center text-neutral-400 text-[25px] font-normal font-['Comic Sans MS']">Entry Code: 1234</div>
    <img className="w-12 h-12 ml-80 " src="utils/icons/idea.png" />
    <div className="w-[233px] h-[68px] text-center text-stone-300 text-[40px] font-normal font-['Comic Sans MS']">Timer : 25</div>
    <div className="w-[385px] h-[222px] relative">
        <div className="w-[350px] h-[100px] left-0 m-6 top-0 flex justify-center content-center bg-neutral-800 rounded-[40px] border border-neutral-400"></div>
        {/* <div className="w-[7px] h-[41px] left-[372px] top-[42px] mt-10 absolute bg-neutral-400 rounded-[20px]"></div> */}
        <div className="w-30 h-[82.04px] left-[90px] top-[40px] absolute text-center text-stone-300 text-[30px] font-normal font-['Comic Sans MS']">{questionText}</div>
    </div>
    <div className="w-[340px] h-screen relative">
        <div className="w-[385px] h-[350px] left-0 top-0 flex bg-red-500 rounded-[40px]"></div>
        <div className="w-[311.72px] h-[267.86px] left-[26px] top-[62px] absolute">
            <div className="w-[311.72px] h-[58.60px] left-0 top-0 absolute">
                <div className="w-[311.72px] h-[58.60px] left-0 top-0 absolute bg-black rounded-[20px]"></div>
                <div className="w-[161px] h-[39.06px] left-[22.84px] top-[6.51px] absolute text-stone-300 text-3xl font-normal font-['Comic Sans MS']">Option 1</div>
            </div>
            <div className="w-[311.72px] h-[58.60px] left-0 top-[209.27px] absolute">
                <div className="w-[311.72px] h-[58.60px] left-0 top-0 absolute bg-black rounded-[20px]"></div>
                <div className="w-[161px] h-[39.06px] left-[22.84px] top-[6.51px] absolute text-stone-300 text-3xl font-normal font-['Comic Sans MS']">Option 4</div>
            </div>
            <div className="w-[311.72px] h-[58.60px] left-0 top-[139.51px] absolute">
                <div className="w-[311.72px] h-[58.60px] left-0 top-0 absolute bg-black rounded-[20px]"></div>
                <div class="w-[161px] h-[39.06px] left-[22.84px] top-[6.51px] absolute text-stone-300 text-3xl font-normal font-['Comic Sans MS']">Option 3</div>
            </div>
            <div className="w-[311.72px] h-[58.60px] left-0 top-[69.76px] absolute">
                <div className="w-[311.72px] h-[58.60px] left-0 top-0 absolute bg-black rounded-[20px]"></div>
                <div className="w-[161px] h-[39.06px] left-[22.84px] top-[6.51px] absolute text-stone-300 text-3xl font-normal font-['Comic Sans MS']">Option 2</div>
            </div>
        </div>
    </div>
    <div onClick = {solutionBtnHandler} className="bg-[#222222] border-solid h-20 rounded-md mt-5 mb- mx-0">
            <img  src="utils/icons/nextBtn.png" className="w-14 my-2 mr-0 ml-80 cursor-pointer" alt="NextBtn" />
    </div>
</div>


        </div>
    );
;}

export default QuestionsPage;