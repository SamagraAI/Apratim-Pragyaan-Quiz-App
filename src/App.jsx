import StudentEventComponent from "./Frontend/component/StudentComponent";
import StudentHomePage from "./Frontend/component/studentHomePage";
import Login from "./components/auth/login";
import Question from "./models/question";
import Home from "./components/home";
import Option from "./models/option";

import { AuthProvider } from "./contexts/authContext";
import { useRoutes } from "react-router-dom";

import Event from "./models/event";
import Quiz from "./models/quiz";
import LaunchPage from "./Frontend/MastersComponent/LaunchPage";
import QuestionsPage from "./Frontend/MastersComponent/QuestionsPage";
import StudentSolutionsPage from "./Frontend/component/StudentSolutionPage";
import SolutionsPage from "./Frontend/MastersComponent/SolutionsPage";
import End from "./Frontend/MastersComponent/EndQuiz";
import StudentQuestionsPage from "./Frontend/component/StudentquePage";
import WaitingPage from "./Frontend/component/WaitingPage";
import SuccessPage from "./Frontend/MastersComponent/SuccessPage";
import HomePage from "./Frontend/MastersComponent/HomePage";
function App() {
  const routesArray = [
    {
      path: "*",
      element: <SolutionsPage/>,
    },
    {
      path: "/login",
      element: <Login />,
    },
   
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/masterQuestion",
      element: <QuestionsPage />,
    },
    {
      path: "/masterSolution",
      element: <SolutionsPage/>,
    },
    {
      path: "/studentComponent",
      element: <StudentEventComponent/>,
    },
    {
      path: "/studentQuestion",
      element: <StudentQuestionsPage/>,
    },
    {
      path: "/studentSoltion",
      element: <StudentSolutionsPage/>,
    },
    {
      path: "/succesQuiz",
      element: <SuccessPage/>,
    },
    {
      path: "/launch",
      element: <LaunchPage/>,
    },
    {
      path: "/end",
      element: <End/>,
    },

  ];
  let routesElement = useRoutes(routesArray);
  
  
  
  return (
    <AuthProvider>
      <div className="w-full h-screen flex flex-col">{routesElement}</div>
    </AuthProvider>
  );
}

export default App;


// // Example usage:

// // Create a new event
// const newEvent = new Event(
//   /* Ev_Id */ 1,
//   /* Qz_Id */ 1,
//   /* Jn_Code */ 'some_code',
//   /* Evnt_Date */ '2024-05-01',
//   /* Evnt_Time */ '12:00 PM',
//   /* Total_Active */ 0,
//   /* Round */ 1,
//   /* Current_Qu */ 1,
//   /* Status */ 'waiting'
// );
// newEvent.save();

// // Update an existing event
// const existingEvent = new Event(/* Fill with existing event details */);
// existingEvent.Ev_Id = 'existing_event_id';
// existingEvent.Evnt_Date = '2024-05-02'; // Update date for example
// existingEvent.update();

// // Delete an event
// const eventToDelete = new Event(/* Fill with event details to delete */);
// eventToDelete.Ev_Id = 'event_id_to_delete';
// eventToDelete.delete();

// // Fetch all events
// const fetchAllEvents = async () => {
//   try {
//     const querySnapshot = await getDocs(collection(db, "EVENT"));
//     querySnapshot.forEach((doc) => {
//       console.log(doc.id, " => ", doc.data());
//     });
//   } catch (error) {
//     console.error("Error fetching events: ", error);
//   }
// };
// fetchAllEvents();


// const option = new Option(4, 5, "wq", true);
// option.save(); // Save the option to Firestore

// // Update the option
// option.Option_Text = "Option A (Updated)";
// option.update();

// // Delete the option
// option.delete();





// const question = new Question(2, 1, "What is first alphabet", "apple related", 1, -1, "MCQ");
// question.save(); // Save the question to Firestore

// // Update the question
// question.Expln = "Explanation updated";
// question.update();

// // Delete the question
// question.delete();




// // Similarly, define model classes for other entities (QUESTION, QUESTION_IMAGE, RAPID_ANS, PERSONALITY, OPTIONS, STUDENT, RESPONSE, EVENT, RESULT)

// // Example usage:

// const quizMaster = new QuizMaster("Qm001", "John Doe", "Computer Science", "john.doe@example.com");
// quizMaster.save();

// const quiz = new Quiz("Qz001", "Qm001", "2024-04-30", true, "JavaScript Quiz", "2024-04-25", "A quiz about JavaScript");
// quiz.save();






// const event = new Event("Ev001", "Qz001", "ABC123", "2024-05-01", "09:00", 100, 1, 1, "active");
// event.save(); // Save the event to Firestore

// // Update the event
// event.Evnt_Date = "2024-05-02";
// event.update();

// // Delete the event
// event.delete();
