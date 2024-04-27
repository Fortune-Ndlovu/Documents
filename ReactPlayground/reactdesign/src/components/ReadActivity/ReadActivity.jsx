import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

const ReadActivity = () => {
    const { createdActivityId } = useParams();
    const [activities, setActivities] = useState();
    
    useEffect(() => { 
        const fetchActivity = async () => { 
            const docRef = doc(db, "activities", createdActivityId);
            const activityDoc = await getDoc(docRef);
            if (activityDoc.exists()) {
                const activityData = { ...activityDoc.data(), id: activityDoc.id };
                setActivities(activityData);
            } else { 
                console.log("No such document!");
            }
        }
        fetchActivity();
    },[]);

    return (
        <div>
            <h1>ReadActivity</h1>
            {activities && (
                <div>
                    <h3>{activities.userName}</h3>
                    <h3>{activities.userDescription}</h3>
                </div>
            )}
    </div>

    )
};

export default ReadActivity;
