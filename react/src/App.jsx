// import Button from "./button";
import sinan from "./assets/download.png";
import Profilecard from "./profilecard.jsx";
// import Sinan from "./class";
function App() {
  const people = [
    { fname: "fidha", role: "developer", avatar: sinan },
    { fname: "sinan", role: "developer", avatar: sinan },
    { fname: "althaf", role: "developer", avatar: sinan },
  ];
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-4">
      {people.map((person, index) => (
        <div>
          <Profilecard
            index={index}
            fname={person.fname}
            role={person.role}
            avatar={person.avatar}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
