//dependencies
import React from "react";
import { collection, getDocs, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase"; //to be changed

//css
import "./css/AllCirculars.css";

//code
const AllCirculars = () => {
    //states
    const [data, setData] = useState([]);
    const [tempData,setTempData]=useState([]);
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

                    setData(list);
                    setTempData(list);
                    return;
                }
            );
            return () => {
                unsub();
            };
        };
        fetchData();
    }, []);

    const filterHandler = async (value) => {
        console.log(value);
        if (value.length > 0) {
            const q = query(
                collection(db, "circulars"),
                where("searchKeywords", "array-contains", value)
            );
            const snap = await getDocs(q);

            console.log(snap);
            const newData = [];
            snap.docs.forEach((doc) => {
                newData.push(doc.data());
            });
            setData(newData);
        }
        if (value.length <= 0) {
            setData(tempData);
        }
    };
    return (

        //circulars
        <div className="all-circulars-outer-container text-center">
            {/* circulars header */}
            <div className="circulars-header-container">
                <h2 className="circulars-title">All Circulars</h2>
            </div>

            <input
                type="text"
                className="form-control blogs-search-input mb-5"
                placeholder="search for circulars..."
                onChange={(e) => {
                    filterHandler(e.target.value);
                }}
            />
            <div className="circulars-container">
                {data
                    .slice(0)
                    .reverse()
                    .map((d) => {
                        return (
                            <a
                                href={d["circular-url"]}
                                key={d["timeStamp"]}
                                className="all-circulars-link "
                            >
                                <p className="circular mb-4">
                                    {d["circular-name"]}
                                </p>
                            </a>
                        );
                    })}
            </div>
        </div>
    );
};

export default AllCirculars;
