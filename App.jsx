import AddItem from "./app/AddItem";
import Counter from "./app/counter";
import ThemePage from "./app/themePage";
import Todo from "./app/Todo";
import User from "./app/user";

function App() {
  return <div>
    <Counter/>
    <User/>
    <ThemePage/>
    <AddItem/>
    <Todo/>
  </div>;
}

export default App;
