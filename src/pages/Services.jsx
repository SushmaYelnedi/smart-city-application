import "./styles.css";

function Services() {
  const services = [
    { name: "Government Hospital", type: "Hospital" },
    { name: "City Police Station", type: "Police" },
    { name: "Main Bus Stop", type: "Transport" }
  ];

  return (
    <div className="container">
      <h2>Public Services</h2>

      {services.map((s, i) => (
        <div key={i} className="card">
          <h4>{s.name}</h4>
          <p>{s.type}</p>
        </div>
      ))}
    </div>
  );
}

export default Services;