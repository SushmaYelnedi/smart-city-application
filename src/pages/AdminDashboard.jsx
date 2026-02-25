import "./styles.css";

function AdminDashboard() {
  const complaints = [
    "Garbage not collected",
    "Street light not working",
    "Road damage issue"
  ];

  return (
    <div className="container">
      <h2>Admin Dashboard</h2>

      {complaints.map((c, i) => (
        <div key={i} className="complaint">
          {c}
        </div>
      ))}
    </div>
  );
}

export default AdminDashboard;