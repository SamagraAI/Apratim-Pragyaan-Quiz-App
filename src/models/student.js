import { db } from '../firebase/firebase'; // Import the Firestore instance

// Import the necessary Firestore functions
import { addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";


import { db } from "../firebase/firebase"; 
const colRef = collection(db , 'Student')

class Student {
    constructor(sId, sName, sSem, branch, sEmail) {
      this.S_Id = sId;
      this.S_Name = sName;
      this.S_Sem = sSem;
      this.Branch = branch;
      this.S_Email = sEmail;
    }
  
    static add(student) {
      return firebase.database().ref('STUDENT').push(student);
    }
  
    static update(sId, updates) {
      return firebase.database().ref('STUDENT/' + sId).update(updates);
    }
  
    static delete(sId) {
      return firebase.database().ref('STUDENT/' + sId).remove();
    }
  }
  
  