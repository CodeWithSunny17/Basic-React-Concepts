import "./App.css";
import Mobile from "./MobileList/Mobile";
import Plusminus from "./PlusMinus/Plusminus";
import Todolist from "./ToDoList/Todolist";
import Form from "./Form/Form";
import Fetch from "./Fetch/Fetch";
import Calculator from "./Calculator/Calculator";
import MultipleReturns from "./UseEffect/MultipleReturns/MultipleReturns";
import Form2 from "./Form2/Form2";
import Form2UsingUseForm from "./Form2/Form2UsingUseForm";
import ExpenseTracker from "./ExpenseTracker/ExpenseTracker";
import RandomColor from "./randomColor/RandomColor";
import StarRating from "./StarRating/StarRating";
import Accordion from "./Accordian/Accordian";
import ImageSlider from "./Image-Slider/ImageSlider";
import LoadMoreItems from "./LoadMoreItems/LoadMoreItems";

function App() {
  return (
    <div className="App">
      {/* <section>
        <Mobile />
      </section>
      <section>
        <Plusminus />
      </section>
      <section>
        <Todolist />
      </section>
      <section>
        <Form />
      </section>
      <section>
        <Fetch />
      </section>
      <section>
        <MultipleReturns />
      </section>
      <section>
        <Form2 />
      </section>
      <section>
        <Form2UsingUseForm />
      </section>
      <section>
        <Calculator />
      </section>
      <section>
        <ExpenseTracker />
      </section>
      <section>
        <Accordion />
      </section>
      <section>
        <RandomColor />
      </section>
      <section>
        <StarRating />
      </section> */}
      {/* <section>
        <ImageSlider />
      </section> */}
      <LoadMoreItems />
    </div>
  );
}

export default App;
