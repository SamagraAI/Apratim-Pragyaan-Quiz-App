import { useEffect, useState } from "react";
import Event from "../../models/event";
import StudentHomePage from "./studentHomePage";
import StudentQuestionsPage from "./StudentquePage";
import StudentSolutionsPage from "./StudentSolutionPage";
import WaitingPage from "./WaitingPage";




const StudentEventComponent = () => {
  const [event, setEvent] = useState(new Event(1,1,1,1,1,1,1,1,1));

  useEffect(() => {
    const fetchRunningEvent = async () => {
      try {
        const runningEvent = await Event.getRunningEvent(1); // Change the event ID accordingly
        setEvent(runningEvent);
      } catch (error) {
        console.error("Error fetching event:", error);
      }
    };
  
    fetchRunningEvent();
  
    // No need for cleanup function
  
  }, [event]);

  if (!event) {
    return <div>Loading...</div>;
  }

  let ComponentToRender;

  switch (event.Status) {
    case "homePage":
      ComponentToRender = StudentHomePage;
      break;
    case "waiting":
      ComponentToRender = WaitingPage;
      break;
    case "question":
      ComponentToRender = StudentQuestionsPage;
      break;
    case "solution":
      ComponentToRender = StudentSolutionsPage;
      break;
    case "end":
      ComponentToRender = End;
      break 
    default:
      return (
        <div>
          <h1>There is a problem with the server...</h1>
          <p>Status mismatch in student event component</p>
        </div>
      )
  }

  return <ComponentToRender />;
};

export default StudentEventComponent;
