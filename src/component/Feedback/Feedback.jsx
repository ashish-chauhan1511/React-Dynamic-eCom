import React from "react";
import Head from "../Heading/Heading";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import user1 from "../../assets/user1.jpg";
import user2 from "../../assets/user2.jpg";
import user3 from "../../assets/user3.jpg";


const Feedback = () => {
    return (
        <div className="feedback">
            <div className="cate-head">
                <Head colored="Customer" normal="Feedback" />
            </div>
            <div className="feedback-child">
                {feedbackdata.slice(0, 3).map(feedback => {
                    return (
                        <div key={feedback.id}>
                            <div className="feedback-sub-child">
                                <div className="feedback-identity">
                                    <div className="feedback-img"><img src={feedback.image} height={100} width={100} /></div>
                                    <div className="feedback-text">
                                        <h1>{feedback.name}</h1>
                                        <p>{feedback.ctype}</p>
                                        <div className="staricon">
                                            {Array.from({ length: 5 }, (_, index) => (
                                                <FaStar key={`${feedback.id}-${index}`}  style={{ color: index < feedback.rating ? "gold" : "grey" }}/>
                                            ))}

                                        </div>
                                    </div>
                                </div>
                                <div><p>{feedback.comment}</p></div>
                            </div>
                        </div>
                    );
                })}

            </div>
        </div>
    );
};
export default Feedback


const feedbackdata = [
    {
        id: 1,
        image: user1,
        name: "hallo",
        ctype: "costomer",
        comment: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        rating: 3,

    },
    {
        id: 2,
        image: user2,
        name: "hallo2",
        ctype: "costomer",
        comment: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        rating: 2,

    },
    {
        id: 3,
        image: user3,
        name: "hallo3",
        ctype: "costomer",
        comment: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        rating: 3,

    }];