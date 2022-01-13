import Card from "./components/Card";

function App() {
  const people = [
    { id: 1, name: "Adam", detail: "Something" },
    { id: 2, name: "Csaba", detail: "Anything" },
    { id: 3, name: "Ferenc", detail: "Nothing" },
  ];
  return (
    <div className="App">
      {people.map((item) => {
        return <Card name={item.name} detail={item.detail} key={item.id} />;
      })}
    </div>
  );
}

export default App;
