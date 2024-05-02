import { useEffect, useState } from 'react';

import Quiz from '../../models/quiz';
import Event from '../../models/event';
const WaitingPage = () => {
    const [currentEvent, setcurrentEvent] = useState(new Event(1,1,1,1,1,1,1,1,1));
    const [currentQuiz, setcurrentQuiz] = useState(new Quiz(1,1,1,1,1,1,1));
    useEffect(() => {
      // Fetch the current running event (assuming event id is 1)
      const fetchRunningEvent = async () => {
        try {
          ////////asdfkoasjkdljk
          const runningEvent = await Event.getRunningEvent(1);
          runningEvent.Total_Active = runningEvent.Total_Active + 1;
          runningEvent.update();
          setcurrentEvent(runningEvent);
          // Fetch the quiz description based on the retrieved event's quiz id
          const quiz = await Quiz.get(runningEvent.Qz_Id);
          console.log(quiz);
          setcurrentQuiz(quiz);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchRunningEvent();
    }, []);
  
    return (
      <div className="flex justify-center items-center px-12 py-12 bg-gray-800 max-md:px-5">
        <div className="bg-black flex h-screen flex-col px-0 py-0 mt-8 rounded-3xl w-[386px] max-md:px-0 max-md:mt-0`">
          <div className="ml-5 mb-5">
            <div className="w-[430px] h-[142px] text-center text-white text-[40px] font-normal font-['Comic Sans MS']">The Quiz is about to start please wait :)</div>
            <div className="w-[430px] h-[142px] text-center  text-stone-300 text-[40px] font-normal font-['Comic Sans MS']">Waiting students {currentEvent.Total_Active}</div>
          </div>
          <div className="w-[391px] h-[472px] mx-5 mb-20  relative">
            <div className="w-[391px] h-[472px] left-0 top-0 absolute bg-red-500 rounded-[40px]"></div>
            <div className="w-[324.96px] h-[293px] left-[33.54px] top-[90px] absolute text-center text-white text-3xl font-normal font-['Comic Sans MS']">{currentQuiz.Desc}</div>
          </div>
          <div className="w-[430px] h-[77px] relative">
            <div className="w-[430px] h-[77px] left-0 top-0 absolute bg-neutral-800"></div>
            <img className="w-12 h-12 left-[19px] top-[14px] absolute" src="https://via.placeholder.com/48x48" alt="Placeholder" />
          </div>
        </div>
      </div>
    );
  }
  
  export default WaitingPage;