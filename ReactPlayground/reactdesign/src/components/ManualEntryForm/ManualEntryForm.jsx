import React, { useState } from "react";

const ManualEntryForm = ({onHandleCreateActivity}) => {
    const [userName, setUserName] = useState();
    const [userDescription, setUserDescription] = useState();
    
	const handleFormSubmit = (event) => {
		event.preventDefault();
        let userData = {
            userName: userName,
            userDescription: userDescription
        }
        onHandleCreateActivity(userData);
    };

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
