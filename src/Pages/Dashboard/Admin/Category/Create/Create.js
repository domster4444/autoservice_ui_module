import React, { useState, useReducer } from "react";
import toastMsg from "library/utilities/toastMsg";
import FormErrorTag from "components/FormErrorTag";
import { CategoryApiService } from "services/category/CategoryService";
const CreateForm = () => {
  const [formErrorMsg, setFormErrorMsg] = useState({
    status: false,
    message: "",
  });

  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_CATEGORY_TITLE":
        return {
          ...state,
          categoryTitle: action.payload,
        };
      case "SET_CATEGORY_DESCRIPTION":
        return {
          ...state,
          categoryDescription: action.payload,
        };

      default:
        return state;
    }
  };

  const initialState = {
    categoryTitle: "",
    categoryDescription: "",
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const { categoryTitle, categoryDescription } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("📝 create service data starts here 📝", state, "📝 create service data ends here 📝");

    const errorMessages = {
      category: "Please enter category name",
      issue: "Please select at least one issue",
    };

    const selectedInputs = {
      category: categoryTitle,
      categoryDescription: categoryDescription,
    };

    const errorMessage = Object.keys(selectedInputs).find((key) => !selectedInputs[key]);

    if (errorMessage) {
      setFormErrorMsg({
        status: true,
        message: errorMessages[errorMessage],
      });
      return;
    }

    setFormErrorMsg({
      status: false,
      message: "",
    });

    CategoryApiService.createCategory(state)
      .then((res) => {
        toastMsg(res.data.message, true);
      })
      .catch((err) => {
        toastMsg(" Something went wrong.", false);
      })
      .finally(() => {
        dispatch({ type: "SET_CATEGORY_TITLE", payload: "" });
        dispatch({ type: "SET_CATEGORY_DESCRIPTION", payload: "" });
      });
  };

  return (
    <>
      <section id='visitor-form' className='shadow-sm pb-4'>
        <form action='post'>
          <div className='row flex-column  mx-0 mt-0 mb-0 w-100'>
            <div className='col-12 col-sm w-100 form-floating'>
              <input
                required
                type='text'
                className='form-control'
                id='category'
                placeholder='Category name'
                value={categoryTitle}
                onChange={(e) => {
                  dispatch({ type: "SET_CATEGORY_TITLE", payload: e.target.value });
                }}
              />
              <label htmlFor='address'>Category name</label>
            </div>
            <div className='col-12 col-sm w-100 form-floating'>
              <textarea
                required
                id='message'
                className='w-100 mt-2 p-0 form-field bg-transparent py-3'
                placeholder='Description'
                rows='6'
                value={categoryDescription}
                onChange={(e) => {
                  dispatch({ type: "SET_CATEGORY_DESCRIPTION", payload: e.target.value });
                }}
              ></textarea>
            </div>
          </div>

          {formErrorMsg.status && (
            <FormErrorTag>
              <p className='ps-3'>{formErrorMsg.message}</p>
            </FormErrorTag>
          )}

          <div className='row mx-0  mt-1 mb-0 w-100'>
            <div className='col-12 mt-3'>
              <button
                type='submit'
                onClick={(e) => {
                  handleSubmit(e);
                }}
                className='py-2 btn btstrp-shadow-effect w-100 blue-bg text-white rounded-65 '
              >
                <i className='bx bx-plus me-2'></i>
                Add
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default CreateForm;
