import { db } from '../firebase/firebase'; // Import the Firestore instance

// Import the necessary Firestore functions
import { addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";


import { db } from "../firebase/firebase"; 
const colRef = collection(db , 'Response')

class Response {
    constructor(respId, quId, sId, ans, crAns, time, evId) {
      this.Resp_ID = respId;
      this.Qu_Id = quId;
      this.S_Id = sId;
      this.Ans = ans;
      this.Cr_ans = crAns;
      this.Time = time;
      this.Ev_Id = evId;
    }
  
    static add(response) {
      return firebase.database().ref('RESPONSE').push(response);
    }
  
    static update(respId, updates) {
      return firebase.database().ref('RESPONSE/' + respId).update(updates);
    }
  
    static delete(respId) {
      return firebase.database().ref('RESPONSE/' + respId).remove();
    }
  }
  