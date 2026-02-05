import React from "react";
import { Link } from "react-router-dom";

export default function BerryList({ berries }) {
  return (
    <ul>
      {berries.map((berry) => (
        <li key={berry.name} style={{ marginBottom: 8 }}>
          <Link to={`/berries/${berry.name}`} style={{ textTransform: "capitalize" }}>
            {berry.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
