import React, { useEffect, useState} from 'react'
import { db } from '../firebase/firebase';
import { collection, getDocs, doc } from 'firebase/firestore';

const Update = () => {
  const [activities, setActivities] = useState([]);
  useEffect(() => { 
    const fetchActivities = async () => { 
      const activitiesCollection = collection(db, "activities");
      const activitiesDocsRef = await getDocs(activitiesCollection);
      let activitiesArray = [];
      activitiesDocsRef.forEach((doc) => {
        let docObj = { ...doc.data(), id: doc.id }
        activitiesArray.push(docObj);
      });
      setActivities(activitiesArray);
    }
    fetchActivities();
  });

  const handleFormUpdate = (e) => { 
    e.preventDefault();
    
  }

  return (
    <div>
      <h1>Update</h1>
      <form onSubmit={handleFormUpdate}>
        <label>Name: </label>
        <input type='text' /><br></br>
        <label>Description: </label>
        <input type='text' /><br></br>
        <button type='submit'>Update</button>
      </form>
    </div>
  )
}

export default Update