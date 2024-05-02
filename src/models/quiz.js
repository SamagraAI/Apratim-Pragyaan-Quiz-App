import { db } from '../firebase/firebase'; // Import the Firestore instance

// Import the necessary Firestore functions



// Import the necessary Firestore functions
import { collection, doc, addDoc, getDoc,getDocs, query, where, updateDoc, deleteDoc } from "firebase/firestore";
// Model class for QUIZ
export default class Quiz {
  constructor(Qz_Id, Qm_Id, Last_Evnt, Allow_Late, Qz_Name, Create_Date, Desc) {
    this.Qz_Id = Qz_Id;
    this.Qm_Id = Qm_Id;
    this.Last_Evnt = Last_Evnt;
    this.Allow_Late = Allow_Late;
    this.Qz_Name = Qz_Name;
    this.Create_Date = Create_Date;
    this.Desc = Desc;
  }

  async save() {
    const docRef = await addDoc(collection(db, "QUIZ"), {
      Qz_Id: this.Qz_Id,
      Qm_Id: this.Qm_Id,
      Last_Evnt: this.Last_Evnt,
      Allow_Late: this.Allow_Late,
      Qz_Name: this.Qz_Name,
      Create_Date: this.Create_Date,
      Desc: this.Desc
    });
    console.log("QUIZ document written with ID: ", docRef.id);
  }
  static async getQuizDescription(quizId) {
    try {
      const quizQuery = query(collection(db, "QUIZ"), where("Qz_Id", "==", quizId));
      const quizSnapshot = await getDocs(quizQuery);
      
      if (!quizSnapshot.empty) {
        // Since quizId should be unique, we can directly access the first document
        const quizData = quizSnapshot.docs[0].data();
        
        return new Quiz(
          quizData.Qz_Id,
          quizData.Desc
        );
      } else {
        throw new Error("Quiz not found");
      }
    } catch (error) {
      console.error("Error fetching quiz:", error);
      throw error;
    }
    


  }
  static async get(quizId) {
    try {
      const quizQuery = query(collection(db, "QUIZ"), where("Qz_Id", "==", quizId));
      const quizSnapshot = await getDocs(quizQuery);
      
      if (!quizSnapshot.empty) {
        // Since quizId should be unique, we can directly access the first document
        const quizData = quizSnapshot.docs[0].data();
        
        return new Quiz(
          quizData.Qz_Id,
          quizData.Qm_Id,
          quizData.Last_Evnt,
          quizData.Allow_Late,
          quizData.Qz_Name,
          quizData.Create_Date,
          quizData.Desc
        );
      } else {
        throw new Error("Quiz not found");
      }
    } catch (error) {
      console.error("Error fetching quiz:", error);
      throw error;
    }
  }
 
  
  async update() {
    try {
      // Query to find the document based on Qz_Id
      const quizQuery = query(collection(db, "QUIZ"), where("Qz_Id", "==", this.Qz_Id));
      const quizSnapshot = await getDocs(quizQuery);

      if (!quizSnapshot.empty) {
        // Since Qz_Id should be unique, we can directly access the first document
        const quizDocRef = quizSnapshot.docs[0].ref;

        // Update the document with the new data
        await updateDoc(quizDocRef, {
          Qm_Id: this.Qm_Id,
          Last_Evnt: this.Last_Evnt,
          Allow_Late: this.Allow_Late,
          Qz_Name: this.Qz_Name,
          Create_Date: this.Create_Date,
          Desc: this.Desc
        });

        console.log("QUIZ document updated with ID: ", this.Qz_Id);
      } else {
        throw new Error("Quiz not found");
      }
    } catch (error) {
      console.error("Error updating quiz:", error);
      throw error;
    }
  }

}

