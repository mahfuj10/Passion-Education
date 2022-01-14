import React, { useEffect, useState } from "react";
import Team from "./Team";
import "./OurTeam.css";

const OurTeam = () => {
  const [teamMember, setTeamMember] = useState([]);

  useEffect(() => {
    fetch("OurTeam.json")
      .then((res) => res.json())
      .then((data) => setTeamMember(data));
  }, []);

  return (
    <div>
      <p
        style={{
          margin: "0 auto",
          marginBottom: "50px",
          fontSize: "22px",
          color: "grey",
        }}
        className="w-50 text-center ourTeamText"
      >
        Suspendisse ante mi iaculis ac eleifend id venenatis non eros. Sed
        rhoncus gravida eli eu sollicitudin sem iaculis. Mi iaculis ac eleifend
        id venenatis non erossed venenatis non eros sed rhoncus gravida.
      </p>

      <div className="OurTeam">
        {teamMember.map((member) => (
          <Team key={member.id} member={member}></Team>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
