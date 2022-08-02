//dependencies
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase"; //need to change
import React from "react";

//css
import "./UpcomingEvents.css";

//code
const Upcomingevents = () => {
    //states
    const [data, setData] = useState([]);
    const [now, setNow] = useState();
    const [t, setT] = useState();
    const [days, setDays] = useState();
    const [hours, setHours] = useState();
    const [minutes, setMinutes] = useState();
    const [seconds, setSeconds] = useState();
    const [deadline, setDeadline] = useState();

    //handlers
    useEffect(() => {
        const fetchData = async () => {
            const unsub = onSnapshot(
                collection(db, "upcomingevents"),
                (snapShot) => {
                    let list = [];
                    snapShot.docs.forEach((doc) => {
                        list.push({ id: doc.id, ...doc.data() });
                    });
                    setData(list);
                    return;
                }
            );
            return () => {
                unsub();
            };
        };
        fetchData();
    }, []);

    //deadline handler
    const x = setTimeout(function () {
        setNow(new Date().getTime());
        setDeadline(new Date(data[0].future_date).getTime());
        setT(deadline - now);
        setDays(Math.floor(t / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        setMinutes(Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)));
        setSeconds(Math.floor((t % (1000 * 60)) / 1000));

        if (t < 0) {
            clearTimeout(x);
        }
    }, 1000);

    return (
        t > 0 && (
            <div className="upcoming-events-container">
                {/* header */}
                <div className="upcoming-events-header text-center">
                    <h3 className="upcoming-events-header">UPCOMING EVENTS</h3>
                </div>

                {/* count down */}
                {data.map((d) => {
                    return (
                        <>
                            <div className="upcoming-events-countdown-container">
                                <div className="col-3 upcoming-events-individual-container  p-5">
                                    {/* days */}
                                    <h1 className="upcoming-events-value">
                                        {days}
                                    </h1>
                                    <p className="upcoming-events-value-label ps-3 mt-3">
                                        Days
                                    </p>
                                </div>
                                <div className="col-3 upcoming-events-individual-container p-5">
                                    {/* hours */}
                                    <h1 className="upcoming-events-value">
                                        {hours}
                                    </h1>
                                    <p className="upcoming-events-value-label ps-3 mt-3">
                                        Hrs
                                    </p>
                                </div>
                                <div className="col-3 upcoming-events-individual-container p-5">
                                    {/* minutes */}
                                    <h1 className="upcoming-events-value">
                                        {minutes}
                                    </h1>
                                    <p className="upcoming-events-value-label ps-3 mt-3">
                                        Mins
                                    </p>
                                </div>
                            </div>

                            {/* button links */}
                            <div className="upcoming-events-button-group">
                                <a href={d["events-details-link"]} target="_blank">
                                    <button className="btn upcoming-events-btn upcoming-events-details-btn">
                                        View Details
                                    </button>
                                </a>
                                <a href={d["events-download-link"]} target="_blank">
                                    <button className="btn upcoming-events-btn upcoming-events-download-btn">
                                        Download form
                                    </button>
                                </a>
                            </div>
                        </>
                    );
                })}
            </div>
        )
    );
};

export default Upcomingevents;
