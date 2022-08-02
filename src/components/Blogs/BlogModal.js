//dependencies
import React from "react";

//css
import "./BlogModal.css";

//code
const BlogModal = ({ modalData }) => {
    return (
        //blog modal
        <div className="blog-modal">
            <div
                class="modal modal-fullscreen-xl"
                id="modal-fullscreen-xl"
                tabindex="-1"
                role="dialog"
                aria-hidden="true"
            >
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-body p-4 text-start">
                            <h3
                                className="blog-title mb-3"
                                style={{ textTransform: "uppercase" }}
                            >
                                {modalData["blogtitle"]}
                            </h3>

                            <img
                                src={modalData["coverurl"]}
                                alt="blog-image"
                                className="blog-image mb-2"
                                width="100%"
                            />

                            <p className=" mb-3 text-start">
                                <span style={{ color: "#00e472" }}>
                                    {modalData["location"]}
                                </span>
                                <br />
                                24/07/2001
                            </p>

                            <p className="blogcontent">
                                {modalData["blogcontent"]}
                            </p>
                        </div>
                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-danger"
                                data-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogModal;
