//dependencies
import {
    collection,
    getDocs,
    onSnapshot,
    query,
    where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import React from "react";
import BlogModal from "../components/Blogs/BlogModal";

//components
import UseImages from "../UseImages";

//css
import "./css/Blogs.css";

//code
const Blogs = () => {
    //states
    const [data, setData] = useState([]);
    const [coverImagesData, setCoverImagesData] = useState([]);
    const [containerImagesData, setContainerImagesData] = useState([]);
    const coverImages = UseImages(coverImagesData);
    const containerImages = UseImages(containerImagesData);
    const [tempData, setTempData] = useState();
    const [modalData, setModalData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const unsub = onSnapshot(collection(db, "blogs"), (snapShot) => {
                let list = [];
                let coverImageUrl = [];
                let containerImageUrl = [];
                snapShot.docs.forEach((doc) => {
                    list.push({ id: doc.id, ...doc.data() });
                    if (doc.data().coverurl)
                        coverImageUrl.push(doc.data().coverurl);
                    if (doc.data().containerurl)
                        containerImageUrl.push(doc.data().containerurl);
                });
                setData(list);
                setTempData(list);
                setCoverImagesData(coverImageUrl);
                setContainerImagesData(containerImageUrl);
                console.log(coverImageUrl);
                return;
            });
            return () => {
                unsub();
            };
        };
        fetchData();
    }, []);

    //filters
    const filterHandler = async (value) => {
        console.log(value);
        if (value.length > 0) {
            const q = query(
                collection(db, "blogs"),
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
        <div className="blogs-outer-container text-center ">
            <div
                className="blogs-search-filter "
                style={{ margin: "7% 0 2% 0" }}
            >
                <input
                    type="text"
                    className="blogs-search-input form-control"
                    placeholder="Search for blogs..."
                    onChange={(e) => {
                        filterHandler(e.target.value);
                    }}
                />
            </div>
            <div className="row">
                <div className="blogs column ">
                    <ul className="cards">
                        {data
                            .slice(0)
                            .reverse()
                            .map((d) => (
                                <li className="cards_item">
                                    <div className="card blog-card">
                                        <div className="card_image">
                                            <img
                                                src={
                                                    containerImages[
                                                        d.containerurl
                                                    ]
                                                }
                                                alt=""
                                                width="100%"
                                            />
                                        </div>
                                        <div className="card-content">
                                            <p>{d["blog-date"]}</p>
                                            <h3 className="mt-2">
                                                {d["blog-title"]}
                                            </h3>
                                            <p className="blog-content">
                                                {d["blog-content"]}
                                            </p>
                                            <button
                                                className="btn read-more-btn btn-open-modal mb-3"
                                                data-toggle="modal"
                                                data-target="#modal-fullscreen-xl"
                                                onClick={() => {
                                                    setModalData({
                                                        containerurl:
                                                            containerImages[
                                                                d.containerurl
                                                            ],
                                                        coverurl:
                                                            coverImages[
                                                                d.coverurl
                                                            ],
                                                        blogtitle:
                                                            d["blog-title"],
                                                        blogcontent:
                                                            d["blog-content"],
                                                        location:
                                                            d[
                                                                "blog-event-location"
                                                            ],
                                                    });
                                                }}
                                            >
                                                Read More
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
            <BlogModal id="modal-fullscreen-xl" modalData={modalData} />
        </div>
    );
};

export default Blogs;
