import logo from "./logo.svg";
import "./App.css";
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";

function App() {
  const onDelete = () => {
    console.log("I am onDelete");
  };

  let todos = [
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market to get this job done1",
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: "You need to go to the market to get this job done2",
    },
    {
      sno: 3,
      title: "Go to the office",
      desc: "You need to go to the market to get this job done3",
    },
  ];
  return (
    <>
      <Header title="My Todos List" />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
