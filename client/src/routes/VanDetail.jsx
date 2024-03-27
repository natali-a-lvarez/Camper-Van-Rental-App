import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./VanDetail.css";

export default function VanDetail() {
  const [van, setVan] = useState({});
  const { vanId } = useParams();

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/vans/${vanId}`)
      .then((res) => res.json())
      .then((data) => setVan(data));
  }, []);

  return (
    <>
      <Navigation />
      <div className="van-detail-container">
        <Link to="..">&larr; Back to all pages</Link>
        <img src={van.imgUrl} alt={van.name} />
      </div>
    </>
  );
}
