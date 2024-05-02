import { db } from '../firebase/firebase';
import { collection, doc, addDoc, getDoc, getDocs, query, where, updateDoc, deleteDoc } from "firebase/firestore";

class Question {
  constructor(Qu_Id, Qz_Id, Text, Expln, Pos_Marks, Neg_Marks, Type) {
    this.Qu_Id = Qu_Id;
    this.Qz_Id = Qz_Id;
    this.Text = Text;
    this.Expln = Expln;
    this.Pos_Marks = Pos_Marks;
    this.Neg_Marks = Neg_Marks;
    this.Type = Type;
  }

  async save() {
    const docRef = await addDoc(collection(db, "QUESTION"), {
      Qu_Id: this.Qu_Id,
      Qz_Id: this.Qz_Id,
      Text: this.Text,
      Expln: this.Expln,
      Pos_Marks: this.Pos_Marks,
      Neg_Marks: this.Neg_Marks,
      Type: this.Type
    });
    console.log("QUESTION document written with ID: ", docRef.id);
  }

  async update() {
    try {
      // Query to find the document based on Qu_Id
      const questionQuery = query(collection(db, "QUESTION"), where("Qu_Id", "==", this.Qu_Id));
      const questionSnapshot = await getDocs(questionQuery);
      
      if (!questionSnapshot.empty) {
        // Since Qu_Id should be unique, we can directly access the first document
        const questionDocRef = questionSnapshot.docs[0].ref;
        
        // Update the document with the new data
        await updateDoc(questionDocRef, {
          Qz_Id: this.Qz_Id,
          Text: this.Text,
          Expln: this.Expln,
          Pos_Marks: this.Pos_Marks,
          Neg_Marks: this.Neg_Marks,
          Type: this.Type
        });
        
        console.log("QUESTION document updated with ID: ", this.Qu_Id);
      } else {
        throw new Error("Question not found");
      }
    } catch (error) {
      console.error("Error updating question:", error);
      throw error;
    }
  }


  async delete() {
    const questionDocRef = doc(db, "QUESTION", this.Qu_Id);
    await deleteDoc(questionDocRef);
    console.log("QUESTION document deleted with ID: ", this.Qu_Id);
  }

  static async get(questionId) {
    try {
      const questionQuery = query(collection(db, "QUESTION"), where("Qu_Id", "==", questionId));
      const questionSnapshot = await getDocs(questionQuery);

      if (!questionSnapshot.empty) {
        const questionData = questionSnapshot.docs[0].data();

        return new Question(
          questionData.Qu_Id,
          questionData.Qz_Id,
          questionData.Text,
          questionData.Expln,
          questionData.Pos_Marks,
          questionData.Neg_Marks,
          questionData.Type
        );
      } else {
        throw new Error("Question not found");
      }
    } catch (error) {
      console.error("Error fetching question:", error);
      throw error;
    }
  }
}

export default Question;
