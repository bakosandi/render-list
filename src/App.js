export default App;
import Card from "./components/Card";
import Cardwithclass from "./components/Cardwclass";

function App() {
  const peoples = [
    { id: 0, name: "gergo", details: "rendom valami" },
    { id: 1, name: "laci", details: "random valami" },
    { id: 2, name: "feri", details: "rondom valami" },
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