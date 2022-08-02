//dependencies
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import React from "react";

//components
import UseImages from "../../UseImages";

//css
import "./AthleticHonors.css";

//code
const AthleticHonors = () => {
    //states
    const [data, setData] = useState([]);
    const [imagesData, setImagesData] = useState([]);
    const images = UseImages(imagesData);
    const [tempData, setTempData] = useState([]);

    //handlers
    //fetch
    useEffect(() => {
        const fetchData = async () => {
            const unsub = onSnapshot(
                collection(db, "athletichonors"),
                (snapShot) => {
                    let list = [];
                    let imageurl = [];
                    snapShot.docs.forEach((doc) => {
                        list.push({ id: doc.id, ...doc.data() });
                        if (doc.data().imageurl)
                            imageurl.push(doc.data().imageurl);
                    });
                    setData(list);
                    setTempData(list);
                    setImagesData(imageurl);
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
        // athletichonors
        <div className="athletic-honors-outer-container text-center">
            <div className="athletic-honors-title">
                <h2 className="athletic-honors-title">ATHLETIC HONORS</h2>
            </div>
            <div className="row">
                <div className="athletic-honors column ">
                    <ul className="cards">
                        {data
                            .slice(0)
                            .reverse()
                            .map((d) => (
                                <li className="cards_item">
                                    <div className="athletic-honors-card card">
                                        <div className="card_image">
                                            <img
                                                src={images[d.imageurl]}
                                                alt=""
                                            />
                                        </div>
                                        <div className="card_content">
                                            <h3 className="mt-3 mb-4 athlete-name">
                                                {d["athlete-name"]}
                                            </h3>
                                            <p className="event-name">
                                                {
                                                    d[
                                                        "athlete-achievement-event-details"
                                                    ]
                                                }
                                            </p>
                                            <p className="event-prize">
                                                {
                                                    d[
                                                        "athlete-achievement-prize-details"
                                                    ]
                                                }
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AthleticHonors;
