import "./App.css";

function MyCreateComponents() {
  return (
    <div>
      <h2>Заголовок Reusable Components</h2>
      <button> click </button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <MyCreateComponents />
      <MyCreateComponents />
      <MyCreateComponents />
    </div>
  );
}

export default App;
