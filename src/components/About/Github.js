import React from "react";
// import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
// import GitHubCalendar from "react-github-calendar";

function Github() {
  // const colourTheme = {
  //   background: "transparent",
  //   text: "#ffffff",
  //   grade4: "#8400b8",
  //   grade3: "#b22ff4",
  //   grade2: "#b265f6",
  //   grade1: "#c084f5",
  //   grade0: "#ecd9fc",
  // };

  // const selectLastHalfYear = contributions => {
  //   const currentYear = new Date().getFullYear();
  //   const currentMonth = new Date().getMonth();
  //   const shownMonths = 6;
  
  //   return contributions.filter(day => {
  //     const date = new Date(day.date);
  //     const monthOfDay = date.getMonth();
  
  //     return (
  //       date.getFullYear() === currentYear &&
  //       monthOfDay > currentMonth - shownMonths &&
  //       monthOfDay <= currentMonth
  //     );
  //   });
  // };

  // const [username, setUsername] = useState('fahdrashid');
  // const input = React.createRef();

  // const updateUsername = event => {
  //   event.preventDefault();
  //   if (input.current && String(input.current.value).trim()) {
  //     setUsername(String(input.current.value).trim().toLowerCase());
  //   }
  // };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      {/* <GitHubCalendar
        username={username}
        // blockSize={15}
        // blockMargin={5}
        // theme={colourTheme}
        // fontSize={16}
        transformData={selectLastHalfYear} 
      /> */}
    </Row>
  );
}

export default Github;
