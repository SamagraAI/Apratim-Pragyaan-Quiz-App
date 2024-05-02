import { db } from '../firebase/firebase'; // Import the Firestore instance

// Import the necessary Firestore functions
import { addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

import { db } from "../firebase/firebase"; 
const colRef = collection(db , 'Personality')

class Personality {
    constructor(ansId, quId, pName) {
      this.Ans_Id = ansId;
      this.Qu_Id = quId;
      this.P_Name = pName;
    }
  
    static add(personality) {
      return firebase.database().ref('PERSONALITY').push(personality);
    }
  
    static update(ansId, updates) {
      return firebase.database().ref('PERSONALITY/' + ansId).update(updates);
    }
  
    static delete(ansId) {
      return firebase.database().ref('PERSONALITY/' + ansId).remove();
    }
  }
  
  