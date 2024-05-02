import { db } from '../firebase/firebase'; // Import the Firestore instance

// Import the necessary Firestore functions
import { addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";


// Model class for OPTIONS
export default class Option {
  constructor(Option_ID, Qu_Id, Option_Text, Is_Correct) {
    this.Option_ID = Option_ID;
    this.Qu_Id = Qu_Id;
    this.Option_Text = Option_Text;
    this.Is_Correct = Is_Correct;
  }

  async save() {
    const docRef = await addDoc(collection(db, "OPTIONS"), {
      Option_ID: this.Option_ID,
      Qu_Id: this.Qu_Id,
      Option_Text: this.Option_Text,
      Is_Correct: this.Is_Correct
    });
    console.log("OPTIONS document written with ID: ", docRef.id);
  }

  async update() {
    try {
      // Query to find the document based on Option_ID
      const optionDocRef = doc(db, "OPTIONS", this.Option_ID);
      
      // Update the document with the new data
      await updateDoc(optionDocRef, {
        Qu_Id: this.Qu_Id,
        Option_Text: this.Option_Text,
        Is_Correct: this.Is_Correct
      });

      console.log("OPTIONS document updated with ID: ", this.Option_ID);
    } catch (error) {
      console.error("Error updating option:", error);
      throw error;
    }
  }


  async delete() {
    const optionDocRef = doc(db, "OPTIONS", this.Option_ID);
    await deleteDoc(optionDocRef);
    console.log("OPTIONS document deleted with ID: ", this.Option_ID);
  }


  static async get(questionId) {
    try {
      const optionQuery = query(collection(db, "OPTIONS"), where("Qu_Id", "==", questionId));
      const optionSnapshot = await getDocs(optionQuery);

    if (!optionSnapshot.empty) {
      const optionData = optionSnapshot.docs[0].data();
      return new Option(
        optionData.Option_ID,
        optionData.Qu_Id,
        optionData.Option_Text,
        optionData.Is_Correct
      );
    } else {
      throw new Error("Options not found for question: " + questionId);
    }
  } catch (error) {
    console.error("Error fetching option:", error);
    throw error;
  }
 }


 async update() {
  try {
    // Query to find the document based on Option_ID
    const optionQuery = query(collection(db, "OPTIONS"), where("Option_ID", "==", this.Option_ID));
    const optionSnapshot = await getDocs(optionQuery);

    if (!optionSnapshot.empty) {
      // Since Option_ID should be unique, we can directly access the first document
      const optionDocRef = optionSnapshot.docs[0].ref;

      // Update the document with the new data
      await updateDoc(optionDocRef, {
        Qu_Id: this.Qu_Id,
        Option_Text: this.Option_Text,
        Is_Correct: this.Is_Correct
      });

      console.log("Option document updated with ID: ", this.Option_ID);
    } else {
      throw new Error("Option not found");
    }
  } catch (error) {
    console.error("Error updating option:", error);
    throw error;
  }
 }

}

import { db } from '../firebase/firebase'; // Import the Firestore instance
import { collection } from 'firebase/firestore';
// Import the necessary Firestore functions
import { addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";


// Model class for OPTIONS
export class Option {
  constructor(Option_ID, Qu_Id, Option_Text, Is_Correct) {
    this.Option_ID = Option_ID;
    this.Qu_Id = Qu_Id;
    this.Option_Text = Option_Text;
    this.Is_Correct = Is_Correct;
  }

  async save() {
    const docRef = await addDoc(collection(db, "OPTIONS"), {
      Option_ID: this.Option_ID,
      Qu_Id: this.Qu_Id,
      Option_Text: this.Option_Text,
      Is_Correct: this.Is_Correct
    });
    console.log("OPTIONS document written with ID: ", docRef.id);
  }

  async update() {
    const optionDocRef = doc(db, "OPTIONS", this.Option_ID);
    await updateDoc(optionDocRef, {
      Option_Text: this.Option_Text,
      Is_Correct: this.Is_Correct
    });
    console.log("OPTIONS document updated with ID: ", this.Option_ID);
  }

  async delete() {
    const optionDocRef = doc(db, "OPTIONS", this.Option_ID);
    await deleteDoc(optionDocRef);
    console.log("OPTIONS document deleted with ID: ", this.Option_ID);
  }


  static async get(questionId) {
    try {
      const optionQuery = query(collection(db, "OPTIONS"), where("Qu_Id", "==", questionId));
      const optionSnapshot = await getDocs(optionQuery);

    if (!optionSnapshot.empty) {
      const optionData = optionSnapshot.docs[0].data();
      return new Option(
        optionData.Option_ID,
        optionData.Qu_Id,
        optionData.Option_Text,
        optionData.Is_Correct
      );
    } else {
      throw new Error("Options not found for question: " + questionId);
    }
  } catch (error) {
    console.error("Error fetching option:", error);
    throw error;
  }
 }


 async update() {
  try {
    // Query to find the document based on Option_ID
    const optionQuery = query(collection(db, "OPTIONS"), where("Option_ID", "==", this.Option_ID));
    const optionSnapshot = await getDocs(optionQuery);

    if (!optionSnapshot.empty) {
      // Since Option_ID should be unique, we can directly access the first document
      const optionDocRef = optionSnapshot.docs[0].ref;

      // Update the document with the new data
      await updateDoc(optionDocRef, {
        Qu_Id: this.Qu_Id,
        Option_Text: this.Option_Text,
        Is_Correct: this.Is_Correct
      });

      console.log("Option document updated with ID: ", this.Option_ID);
    } else {
      throw new Error("Option not found");
    }
  } catch (error) {
    console.error("Error updating option:", error);
    throw error;
  }
 }

}
