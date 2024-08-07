import React from "react";
import { CgProfile } from "react-icons/cg";

const feedbacks = [
  {
    name: "Jenny Wilson",
    stars: 3,
    feedback: "The food was excellent and so was the service...",
    avatar: "",
  },
  {
    name: "Dianne Russell",
    stars: 4,
    feedback: "We enjoyed the Eggs Benedict served on homemade focaccia...",
    avatar: "",
  },
  {
    name: "Devon Lane",
    stars: 5,
    feedback:
      "Normally, wines are wines, but theirs are lean meaty and tender...",
    avatar: "",
  },
];

const CustomerFeedback = () => {
  return (
    <div className="feedback-container">
      <h2 style={{ fontWeight: 600 }}>Customer's Feedback</h2>
      {feedbacks.map((feedback, index) => (
        <div key={index} className="feedback-item">
          {feedback.avatar ? (
            <img src={feedback.avatar} alt={feedback.name} className="avatar" />
          ) : (
            <CgProfile
              className="avatar-icon"
              style={{
                height: "35px",
                width: "25px",
                marginRight: "10px",
              }}
            />
          )}
          <div className="feedback-content">
            <h3 style={{ margin: 0 }}>{feedback.name}</h3>
            <div className="stars">
              {"★".repeat(feedback.stars)}
              {"☆".repeat(5 - feedback.stars)}
            </div>
            <p>{feedback.feedback}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomerFeedback;
