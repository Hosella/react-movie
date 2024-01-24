import { v4 as uuid } from "uuid";
import './style.scss'
import { useState } from "react";

const defaultDataForm = {
  title: '',
  description: '',
  imgUrl: '',
  imdbUrl: '',
};

export const InputsItem = ({ addNewMovie }) => {
  const [values, setValues] = useState(defaultDataForm);

  const handleValues = (e) => {
    const { value, name } = e.target;

    switch(name) {
      case 'name': {
        setValues((prev) => ({...prev, title: value}));
        break;
      }

      case 'description': {
        setValues((prev) => ({...prev, description: value}));
        break;
      }

      case 'img': {
        setValues((prev) => ({...prev, imgUrl: value}));
        break;
      }

      case 'url': {
        setValues((prev) => ({...prev, imdbUrl: value}));
        break;
      }

      default: {
        break;
      }
    }
  }
  
  const resetForm = () => {
    setValues(defaultDataForm)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    addNewMovie({...values, imdbId: uuid()});
    console.log(values);

    resetForm();
  }
  
  // const newMovie = {imdbId: uuid()};

  return (
    <div className="InputsItem">
      <form onSubmit={onSubmit} className="InputsItem__inputs">
        <label>
          Movie name
          <br />
          <input type="text" value={values.title} name="name" required onChange={(e) => handleValues(e)} />
        </label>

        <label>
          Description
          <br />
          <input type="text" value={values.description} name="description" required onChange={(e) => handleValues(e)} />
        </label>

        <label>
          Image URL
          <br />
          <input type="text" value={values.imgUrl} name="img" required onChange={(e) => handleValues(e)} />
        </label>

        <label>
          Imdb URL
          <br />
          <input type="text" value={values.imdbUrl} name="url" required onChange={(e) => handleValues(e)} />
        </label>

        <button className="InputsItem__button">Add</button>
      </form>

    </div>
  );
}