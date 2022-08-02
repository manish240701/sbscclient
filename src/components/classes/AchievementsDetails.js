//dependencies
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import React from "react";
import { useParams } from "react-router-dom";

//components

import "../Blogs/BlogModal.css";
import "./AchievementsDetails.css";


//code
const AchievementsDetails = () => {
    //states
    const [data, setData] = useState([]);
    const { id } = useParams();

    //handlers
    useEffect(() => {
        const fetchData = async () => {
            const unsub = onSnapshot(
                collection(db, `achievements/${id}/persons`),
                (snapShot) => {
                    let list = [];
                    snapShot.docs.forEach((doc) => {
                        list.push({ id: doc.id, ...doc.data() });
                    });
                    setData(list);
                    console.log(list);
                    return;
                }
            );
            return () => {
                unsub();
            };
        };
        fetchData();
    }, []);

    return (
        //achievements
        <div className="achievements-modal-outer-container ">
            <div className="achievement-header mt-5">
                <h3 className="achievements-title text-dark ">{`${id.toUpperCase()}  ACHIEVEMENTS`}</h3>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Name/Team Name</th>
                        <th>Game</th>
                        <th>Event Name</th>
                        <th>Position</th>
                    </tr>
                </thead>
                <tbody>
                    {data
                        .slice(0)
                        .reverse()
                        .map((d) => {
                            return (
                                <tr key={d["timeStamp"]}>
                                    <td>{d["name"]}</td>
                                    <td>{d["game"]}</td>
                                    <td>{d["eventname"]}</td>
                                    <td>{d["position"]}</td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </div>
    );
};

export default AchievementsDetails;
