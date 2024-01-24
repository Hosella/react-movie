import { InputsItem } from "../InputsItem";
import './style.scss'

export const InputsList = ({ addNewMovie }) => {
  return (
    <div className="InputsList">
      <span className="InputsList__title">Add a new movie</span>
      <InputsItem addNewMovie={addNewMovie} />
    </div>
  );
}