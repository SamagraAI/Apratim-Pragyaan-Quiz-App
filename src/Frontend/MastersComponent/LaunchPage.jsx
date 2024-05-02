import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import Event from '../../models/event'; // Import the Event model

const LaunchPage = () => {
  const [event, setEvent] = useState(null); // State to hold the event data
  const navigate = useNavigate(); // Get the navigation function from useNavigate hook

  useEffect(() => {
    // Fetch the running event when the component mounts
    const fetchRunningEvent = async () => {
      try {
        // Fetch the running event using the Event model
        const runningEvent = await Event.getRunningEvent(1);
        setEvent(runningEvent);
      } catch (error) {
        console.error('Error fetching running event:', error);
      }
    };

    fetchRunningEvent(); // Call the fetchRunningEvent function
  }, []); // Run this effect only once when the component mounts

  const handleLaunchQuiz = async () => {
    try {
      // Update the event status to "questions"
      event.Status = 'question';
      await event.update();
      // After updating the status, navigate to the QuestionsPage
      navigate('/masterQuestion');
    } catch (error) {
      console.error('Error launching quiz:', error);
    }
  };

  // If event data is not loaded yet, return null or a loading indicator
  if (!event) return null;

  // Render the LaunchPage content once event data is loaded
  return (
    <div className="flex justify-center items-center px-12 py-12 bg-gray-800 max-md:px-5">
      <div className="bg-black flex h-screen flex-col px-0 py-0 mt-8 rounded-3xl w-[386px] max-md:px-0 max-md:mt-0`">
        <div className="text-white text-3xl ml-3 font-normal font-['Comic Sans MS']">Quiz Code</div>
        <div className="w-[350px] h-[100px] mt-20 ml-5 mb-10  relative">
          <div className="w-[350px] h-[100px] left-0 top-0 absolute  bg-black rounded-[20px] border-2 border-neutral-400"></div>
          <div className="left-[117px] top-[22px] absolute text-white text-[40px] font-normal font-['Comic Sans MS']">XXXX</div>
        </div>
        <div className="w-[233px] h-[142px] text-center ml-20 mb-10  text-stone-300 text-[40px] font-normal font-['Comic Sans MS']">Waiting students 25</div>
        <div onClick={handleLaunchQuiz} className="w-[242px] h-[100px] relative my-17 ml-20 ">
          <div className="w-[242px] h-[100px] left-0 top-0 absolute  bg-zinc-300 rounded-[50px]"></div>
          <div className="w-[142px] left-[23px] top-[22px] absolute text-center  text-black text-[40px] font-normal font-['Comic Sans MS']" >Launch</div>
          <img className="w-12 h-12 left-[176px] top-[26px] absolute" src="utils/icons/launchBtn.png"/>
        </div>
        <div className="mt-20">
          <div className="bg-[#222222] border-solid h-20 rounded-md mt-10 p-2 mb-0 mx-0">
            <img className="w-14 ml-80  cursor-pointer" src="public/utils/icons/nxtBtn.png"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchPage;
