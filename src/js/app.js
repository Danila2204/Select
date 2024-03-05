import { Select } from "./select.js";

const select = new Select("#select", {
  placeholder: "Выбери пожалуйста элемент",
  selectedId: "4",
  data: [
    {id: "1", value: "React"},
    {id: "2", value: "React Native"},
    {id: "3", value: "Vue"},
    {id: "4", value: "Angular"},
    {id: "5", value: "Swelte"},
    {id: "6", value: "JQuery"},
    {id: "7", value: "JavaScript"},
  ],
  onSelect(item) {
    console.log("Selected item", item);
  }
});

window.s = select;