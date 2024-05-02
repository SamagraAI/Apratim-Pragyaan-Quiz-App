import { db } from '../firebase/firebase'; // Import the Firestore instance

// Import the necessary Firestore functions
import { addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";


import { collection, doc, addDoc, getDocs, query, where, updateDoc, deleteDoc } from "firebase/firestore";
import db from "./firebase"; // Assuming you have Firebase initialized as 'db'

// Model class for QUIZ_MASTER
class QuizMaster {
  constructor(Qm_Id, Qm_Name, Dept, Qm_Email) {
    this.Qm_Id = Qm_Id;
    this.Qm_Name = Qm_Name;
    this.Dept = Dept;
    this.Qm_Email = Qm_Email;
  }

  async save() {
    const docRef = await addDoc(collection(db, "QUIZ_MASTER"), {
      Qm_Id: this.Qm_Id,
      Qm_Name: this.Qm_Name,
      Dept: this.Dept,
      Qm_Email: this.Qm_Email
    });
    console.log("QUIZ_MASTER document written with ID: ", docRef.id);
  }
  static async get(quizMasterId) {
    try {
      const quizMasterQuery = query(collection(db, "QUIZ_MASTER"), where("Qm_Id", "==", quizMasterId));
      const quizMasterSnapshot = await getDocs(quizMasterQuery);

      if (!quizMasterSnapshot.empty) {
        const quizMasterData = quizMasterSnapshot.docs[0].data();
        return new QuizMaster(
          quizMasterData.Qm_Id,
          quizMasterData.Qm_Name,
          quizMasterData.Dept,
          quizMasterData.Qm_Email
        );
      } else {
        throw new Error("Quiz Master not found");
      }
    } catch (error) {
      console.error("Error fetching Quiz Master:", error);
      throw error;
    }
  }

  async update() {
    try {
      // Query to find the document based on Qm_Id
      const quizMasterQuery = query(collection(db, "QUIZ_MASTER"), where("Qm_Id", "==", this.Qm_Id));
      const quizMasterSnapshot = await getDocs(quizMasterQuery);

      if (!quizMasterSnapshot.empty) {
        // Since Qm_Id should be unique, we can directly access the first document
        const quizMasterDocRef = quizMasterSnapshot.docs[0].ref;

        // Update the document with the new data
        await updateDoc(quizMasterDocRef, {
          Qm_Name: this.Qm_Name,
          Dept: this.Dept,
          Qm_Email: this.Qm_Email
        });

        console.log("Quiz Master document updated with ID: ", this.Qm_Id);
      } else {
        throw new Error("Quiz Master not found");
      }
    } catch (error) {
      console.error("Error updating Quiz Master:", error);
      throw error;
    }
  }

}