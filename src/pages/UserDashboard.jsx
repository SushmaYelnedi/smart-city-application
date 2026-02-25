import { useNavigate } from "react-router-dom";
import "./styles.css";

function UserDashboard() {
  const navigate = useNavigate();

  return (
    <div className="center-container">
      <h2>User Dashboard</h2>

      <button className="btn" onClick={() => navigate("/services")}>
        View Services
      </button>

      <button className="btn" onClick={() => navigate("/report")}>
        Report Issue
      </button>
    </div>
  );
}

export default UserDashboard;