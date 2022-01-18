import "../styles/App.scss";

function App() {
  const handlerFunction = (eve) => {
    eve.preventDefault();
    console.log(eve.key);
  };

  return (
    <div className="app">
      <form>
        <input type="text" className="js-input" onKeyUp={handlerFunction} />
      </form>
    </div>
  );
}

export default App;
