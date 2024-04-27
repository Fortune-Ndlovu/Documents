import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

const Read = () => {
	const [userActivityData, setUserActivityData] = useState([]);
	console.log(userActivityData);
	useEffect(() => {
		const fetchActivity = async () => {
			const docRef = collection(db, "activities");
			const querySnapshot = await getDocs(docRef);
			let docArray = [];
			querySnapshot.forEach((doc) => {
				let docObj = { ...doc.data(), id: doc.id };
				docArray.push(docObj);
			});
			setUserActivityData(docArray);
		};
		fetchActivity();
	}, []);

	return (
		<div>
			<h1>Read</h1>
			{(userActivityData && userActivityData.length) > 0 ? (
				<>
					{userActivityData.map((userActivity) => (
						<div key={userActivity.id}>
							<ul>
								<li>{userActivity.userName}</li>
								<li>{userActivity.userDescription}</li>
							</ul>
						</div>
					))}
				</>
			) : (
				<> try again</>
			)}
		</div>
	);
};

export default Read;
