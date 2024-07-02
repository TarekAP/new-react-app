import ButtonComponent from "./components/ButtonComponent";
import Like from "./components/Like";
import State from "./components/State";

function App() {
  return (
    <>
      <div>
        {/* <ButtonComponent colorName="red">Click me</ButtonComponent> */}
        {/* <Like colorName="red" click={() => console.log("cliked")}>
          Like me
        </Like> */}
        <State onClick={() => console.log("clicked")}>Press</State>
      </div>
    </>
  );
}

export default App;
