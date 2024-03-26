import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Van from "../components/Van";

export default function Root() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  console.log(vans);

  return (
    <>
      <Navigation />
      {vans.length === 0 && <p className="error-message">No vans to rent.</p>}
      {vans.map((van) => (
        <Van key={van.id} van={van} />
      ))}
    </>
  );
}
