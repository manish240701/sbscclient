//dependencies
import React from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase"; //to be changed
import { Link } from "react-router-dom";


//css
import "./Circulars.css";

//code
const Circulars = () => {
    //states
    const [data, setData] = useState([]);

    //handlers
    useEffect(() => {
        const fetchData = async () => {
            const unsub = onSnapshot(
                collection(db, "circulars"),
                (snapShot) => {
                    let list = [];
                    snapShot.docs.forEach((doc) => {
                        list.push({ id: doc.id, ...doc.data() });
                    });
                    list.reverse()
                    let count = 0;
                    let tempList = []
                    tempList = list.filter((l) => {
                        count += 1;
                        return count <= 10;
                    });

                    setData(tempList.reverse());
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

        //circulars
        <div className="circulars-container text-center mt-3 mb-5">
            <div className="circulars-header text-center">
                <h2 className="circulars-title mb-3">CIRCULARS</h2>
            </div>
            <div className="circulars-right text-start">
                <div id="scroll-container">
                    <div id="scroll-text">
                        {data
                            .slice(0)
                            .reverse()
                            .map((d) => {
                                return (
                                    <a
                                        href={d["circular-url"]}
                                        key={d["timeStamp"]}
                                        className="circularlink"
                                    >
                                        <p className="circular">
                                            {d["circular-name"]}
                                        </p>
                                    </a>
                                );
                            })}
                    </div>
                </div>
                <Link to="/circulars">
                    <button className="btn btn-primary mt-3 circular-viewall-btn">
                        View all
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Circulars;
