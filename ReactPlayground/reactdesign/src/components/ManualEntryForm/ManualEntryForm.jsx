import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ManualEntryForm = ({onHandleCreateActivity}) => {
    const [userName, setUserName] = useState();
    const [userDescription, setUserDescription] = useState();
    const navigate = useNavigate();

	const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {

            const userData = {
                userName: userName,
                userDescription: userDescription
            };
            
            const newCreatedActivity = await onHandleCreateActivity(userData);

            if (newCreatedActivity?.id) {
                navigate(`/read/${newCreatedActivity.id}`);
            } else { 
                alert("Error creating activity");
            }

        } catch (e) {
            console.error(e);
        }
    }
        
        return (
            <div>
			<h1>ManualEntryForm</h1>
            <form onSubmit={handleFormSubmit}>
                <label>Name:</label>
				<input type="text" value={userName} onChange={(e) => setUserName(e.target.value)}/><br></br>
                <label>Description:</label>
                <input type="text" value={userDescription} onChange={(e) => setUserDescription(e.target.value)} /><br></br>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default ManualEntryForm;
