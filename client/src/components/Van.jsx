import "./Van.css";
import { render } from "react-dom";
import { Speedometer, Location } from "react-ionicons";

export default function Van({ van }) {
  return (
    <div className="van-card">
      <img
        className="card-img"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIpwxyEV6eLbiQinBe1s0zQ55YAoJ7P0hlWE5_wpChbA&s"
        alt={van.name}
      />
      <div className="card-body">
        <div className="card-titles">
          <h3 className="card-title">{van.name}</h3>
          <h3 className="card-title">
            ${van.price.toFixed(2)}
            <span className="light-text"> /night</span>
          </h3>
        </div>
        <p className="card-features">
          Sleeps {van.sleeps} • Seats {van.seats} • Length: {van.length}" •
          Kitchen: {van.kitchen ? "yes" : "no"} • Bathroom:{" "}
          {van.bathroom ? "yes" : "no"}
        </p>
        <div className="card-miles">
          <Speedometer color="#3e3e3e" />
          <p className="card-icon_text">
            {" "}
            {van.miles} miles included per night
          </p>
        </div>
        <div className="card-location">
          <Location color="#3e3e3e" />
          <p className="card-icon_text"> {van.location}</p>
        </div>
        <button className="card-btn">Book now!</button>
      </div>
    </div>
  );
}