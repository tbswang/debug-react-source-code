function App() {
    return <div>Hello, React Source Code!
      <AddBtn />
    </div>
}

ReactDOM.render(<App/>, document.querySelector('#app'))

function AddBtn(){
  const [ count, setCount] = React.useState(0);
  function handleClick(){
    setCount(count +1);
  }
  return (
    <div>
    <div>{count}</div>
    <button onClick={handleClick}>add</button>
    </div>
  );
}