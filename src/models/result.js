import { db } from '../firebase/firebase'; // Import the Firestore instance

// Import the necessary Firestore functions
import { addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";


import { db } from "../firebase/firebase"; 
const colRef = collection(db , 'Result')

class Result {
    constructor(rsltId, evId, sIdArray, sNameArray, scoreArray) {
      this.Rslt_ID = rsltId;
      this.Ev_Id = evId;
      this.S_Id_Array = sIdArray;
      this.S_Name_Array = sNameArray;
      this.Score_Array = scoreArray;
    }
  
    static add(result) {
      return firebase.database().ref('RESULT').push(result);
    }
  
    static update(rsltId, updates) {
      return firebase.database().ref('RESULT/' + rsltId).update(updates);
    }
  
    static delete(rsltId) {
      return firebase.database().ref('RESULT/' + rsltId).remove();
    }
  }
  