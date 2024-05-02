import { db } from '../firebase/firebase'; // Import the Firestore instance

// Import the necessary Firestore functions
import { collection, doc, addDoc, getDocs,getDoc, query, where, updateDoc, deleteDoc } from "firebase/firestore";

// Model class for EVENT
export default class Event {
  constructor(Ev_Id, Qz_Id, Jn_Code, Evnt_Date, Evnt_Time, Total_Active, Round, Current_Qu, Status) {
    this.Ev_Id = Ev_Id;
    this.Qz_Id = Qz_Id;
    this.Jn_Code = Jn_Code;
    this.Evnt_Date = Evnt_Date;
    this.Evnt_Time = Evnt_Time;
    this.Total_Active = Total_Active;
    this.Round = Round;
    this.Current_Qu = Current_Qu;
    this.Status = Status;
  }

  async save() {
    const docRef = await addDoc(collection(db, "EVENT"), {
      Ev_Id: this.Ev_Id,
      Qz_Id: this.Qz_Id,
      Jn_Code: this.Jn_Code,
      Evnt_Date: this.Evnt_Date,
      Evnt_Time: this.Evnt_Time,
      Total_Active: this.Total_Active,
      Round: this.Round,
      Current_Qu: this.Current_Qu,
      Status: this.Status
    });
    console.log("EVENT document written with ID: ", docRef.id);
  }

  async update() {
    try {
      // Query to find the document based on Ev_Id
      const eventQuery = query(collection(db, "EVENT"), where("Ev_Id", "==", this.Ev_Id));
      const eventSnapshot = await getDocs(eventQuery);
      
      if (!eventSnapshot.empty) {
        // Since Ev_Id should be unique, we can directly access the first document
        const eventDocRef = eventSnapshot.docs[0].ref;
        
        // Update the document with the new data
        await updateDoc(eventDocRef, {
          Evnt_Date: this.Evnt_Date,
          Evnt_Time: this.Evnt_Time,
          Total_Active: this.Total_Active,
          Round: this.Round,
          Current_Qu: this.Current_Qu,
          Status: this.Status
        });
        
        console.log("EVENT document updated with ID: ", this.Ev_Id);
      } else {
        throw new Error("Event not found");
      }
    } catch (error) {
      console.error("Error updating event:", error);
      throw error;
    }
  }
  

  async delete() {
    const eventDocRef = doc(db, "EVENT", this.Ev_Id);
    await deleteDoc(eventDocRef);
    console.log("EVENT document deleted with ID: ", this.Ev_Id);
  }
  static async getRunningEvent(eventId) {
    try {
      const eventQuery = query(collection(db, "EVENT"), where("Ev_Id", "==", eventId));
      const eventSnapshot = await getDocs(eventQuery);
      
      if (!eventSnapshot.empty) {
        // Since eventId should be unique, we can directly access the first document
        const eventData = eventSnapshot.docs[0].data();
        
        return new Event(
          eventData.Ev_Id,
          eventData.Qz_Id,
          eventData.Jn_Code,
          eventData.Evnt_Date,
          eventData.Evnt_Time,
          eventData.Total_Active,
          eventData.Round,
          eventData.Current_Qu,
          eventData.Status
        );
      } else {
        throw new Error("Event not found");
      }
    } catch (error) {
      console.error("Error fetching event:", error);
      throw error;
    }
  }
  
}
