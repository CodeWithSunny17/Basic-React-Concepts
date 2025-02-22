import React, { useState } from "react";
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

const components = {
  "Sidebar Tree View": <SidebarTreeView />,
  "Search AutoComplete": <SearchAutoComplete />,
  "Star Rating": <StarRating />,
  "To-Do List": <Todolist />,
  "Multiple Returns": <MultipleReturns />,
  "Plus Minus": <Plusminus />,
  Form: <Form />,
  Fetch: <Fetch />,
  Calculator: <Calculator />,
  "Form using useState": <Form2 />,
  "Form Using UseForm": <Form2UsingUseForm />,
  "Expense Tracker": <ExpenseTracker />,
  "Random Color": <RandomColor />,
  Accordion: <Accordion />,
  "Image Slider": <ImageSlider />,
  "Load More Items": <LoadMoreItems />,
  "Github Profile Finder": <GithubProfileFinder />,
};

export default function TabNavigation() {
  const [activeTab, setActiveTab] = useState("Sidebar Tree View");

  return (
    <div>
      <h1 className="fixed bottom-0 py-1 px-2 text-lg bg-yellow-300">
        Please select any Component to render
      </h1>
      <div className="flex flex-wrap gap-2 justify-center items-center border-b border-gray-300 pt-4 pb-4">
        {Object.keys(components).map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 text-sm rounded-md transition-all duration-300 ${
              activeTab === tab
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-black hover:bg-gray-300"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      {components[activeTab]}
    </div>
  );
}
