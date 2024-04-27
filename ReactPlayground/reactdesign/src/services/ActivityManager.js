import React, {Fragment} from 'react';
import { db, auth, storage, getCurrentUserId } from '../firebase/firebase';
import { collection,doc, addDoc } from 'firebase/firestore';
import ManualEntryForm from '../components/ManualEntryForm/ManualEntryForm';

const ActivityManager = () => {
    
    const handleCreateActivity = async (activity) => { 
        try {
            const activitiesCollection = collection(db, "activities");
            const docRef = await addDoc(activitiesCollection, { ...activity });
            const createdActivity = { ...activity, id: docRef.id }
            console.log("createdActivity: ", createdActivity);
            return createdActivity;
        } catch (e) { 
            console.error("Error adding document: ", e);
        }
    }

    return (
        <Fragment>
            <ManualEntryForm onHandleCreateActivity={handleCreateActivity} />
        </Fragment>
    )
}

export default ActivityManager;