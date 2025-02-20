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
import SidebarTreeView from "./SidebarTreeView/SidebarTreeView";
import GithubProfileFinder from "./Github-profile-tracker/GithubProfileTracker";
import SearchAutoComplete from "./Search-Auto-Complete-with-API/SearchAutoComplete";
import Notes from "./NoteApp/Notes";

function App() {
  return (
    <div className="App">
      {/* <Mobile /> */}
      {/* <Plusminus /> */}
      {/* <Todolist /> */}
      {/* <Form /> */}
      {/* <Fetch /> */}
      {/* <MultipleReturns /> */}
      {/* <Form2 /> */}
      {/* <Form2UsingUseForm /> */}
      {/* <Calculator /> */}
      {/* <ExpenseTracker /> */}
      {/* <Accordion /> */}
      {/* <RandomColor /> */}
      <StarRating />
      <ImageSlider />
      {/* <LoadMoreItems /> */}
      {/* <SidebarTreeView /> */}
      {/* <GithubProfileFinder /> */}
      {/* <SearchAutoComplete /> */}
      {/* <Notes /> */}
    </div>
  );
}

export default App;
