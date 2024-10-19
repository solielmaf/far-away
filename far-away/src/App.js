import "./index.css";

function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackageList />
      <Stats />
    </div>
  );
}
function Logo() {
  return <h1>🌴 Far Away 💼</h1>;
}
function Form() {
  return (
    <div className="add-form">
      <h3>What do you need for your 😍 trip</h3>
    </div>
  );
}
function PackageList() {
  return <div className="list">List</div>;
}
function Stats() {
  return (
    <footer className="stats">
      <em>💼 You have x on your list, and you already packed x(%)</em>
    </footer>
  );
}

export default App;
