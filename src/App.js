export default App;
import Card from "./components/Card";
import Cardwithclass from "./components/Cardwclass";

function App() {
  const peoples = [
    { id: 0, name: "Gergo", details: "Something" },
    { id: 1, name: "Laci", details: "Anything" },
    { id: 2, name: "Feri", details: "Nothing" },
  ];

  return (
    <div className="App">
      {peoples.map((people) => {
        return (
          <Card name={people.name} details={people.details} key={people.id} />
        );
      })}
      {peoples.map((people) => {
        return (
          <Cardwithclass
            name={people.name}
            details={people.details}
            key={people.id}
          />
        );
      })}
    </div>
  );
}

export default App;