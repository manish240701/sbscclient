//dependencies
import { db } from "../../firebase";
import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import React from "react";

//components
import UseImages from "../../UseImages";

//css
import "./Gallery.css";

//code
const Gallery = () => {
    //states
    const [imagesData, setImagesData] = useState([]);
    const images = UseImages(imagesData);
    const imageDoc = doc(db, "gallery-uploads", "images");
    
    //handlers
    useEffect(() => {
        let unsub = onSnapshot(imageDoc, (snap) => {
            setImagesData(snap.data().images);
        });

        return () => unsub();
    }, []);
    
    return (
        <div className="gallery-outer-container text-center">
            <div className="gallery-header mt-5 mb-5">
                <h2 className="gallery-title">GALLERY</h2>
            </div>

            {/* imagedisplay */}
            <div className="row">
                <div className="gallery column">
                    {Object.keys(images).map((img) => {
                        return (
                            <div className="text-center gallery-individual-container">
                                <img src={images[img]} width="100%" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
