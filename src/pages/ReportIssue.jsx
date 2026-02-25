import { useState } from "react";
import "./styles.css";

function ReportIssue() {
  const [issue, setIssue] = useState("");
  const [desc, setDesc] = useState("");

  const submitIssue = () => {
    if (issue === "" || desc === "") {
      alert("Fill all fields");
      return;
    }

    alert("Issue Submitted Successfully");
    setIssue("");
    setDesc("");
  };

  return (
    <div className="container">
      <h2>Report Issue</h2>

      <input
        className="input-box"
        placeholder="Issue Type"
        value={issue}
        onChange={(e) => setIssue(e.target.value)}
      />

      <textarea
        className="textarea-box"
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />

      <button className="btn" onClick={submitIssue}>
        Submit
      </button>
    </div>
  );
}

export default ReportIssue;