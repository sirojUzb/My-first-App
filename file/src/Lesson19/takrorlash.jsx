import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "delete":
      return {
        ...state,
        data: state.data.filter((value) => value.id !== action.payload.id),
      };
    case "CHANGE_ADD_VALUE":
      return {
        ...state,
        addValueCollector: {
          ...state.addValueCollector,
          [action.payload.name]: action.payload.inputValue,
        },
      };
    case "ADD_NEW_USER":
      return {
        ...state,
        data: [...state.data, { id: new Date().getTime(), ...action.payload }],
        addValueCollector: {
          name: "",
          surname: "",
        },
      };
    case "EDIT_USER":
      return {
        ...state,
        isSelected: true,
        selectedData: { ...action.payload },
      };
    case "EDIT_USER_INPUT_CHANGE":
      return {
        ...state,
        selectedData: {
          ...state.selectedData,
          [action.payload.name]: action.payload.inputValue,
        },
      };
    case "SAVE_USER":
      return {
        ...state,
        data: state.data.map((value) =>
          value.id === state.selectedData.id ? state.selectedData : value
        ),
        isSelected: false,
      };
    default:
      return state;
  }
};

function Takrorlash() {
  const [state, dispatch] = useReducer(reducer, {
    data: [
      { id: 0, name: "Husan", surname: "Bo'tayev" },
      { id: 1, name: "Azambek", surname: "Rahmatov" },
    ],
    addValueCollector: {
      name: "",
      surname: "",
    },
    isSelected: false,
    selectedData: {},
  });
  return (
    <div>
      {state.data.map((value) => (
        <div>
          {state.isSelected && value.id === state.selectedData.id ? (
            <input
              value={state.selectedData.name}
              onChange={(e) =>
                dispatch({
                  type: "EDIT_USER_INPUT_CHANGE",
                  payload: { name: "name", inputValue: e.target.value },
                })
              }
            />
          ) : (
            value.name
          )}{" "}
          -{">"}{" "}
          {state.isSelected && value.id === state.selectedData.id ? (
            <input
              value={state.selectedData.surname}
              onChange={(e) =>
                dispatch({
                  type: "EDIT_USER_INPUT_CHANGE",
                  payload: { name: "surname", inputValue: e.target.value },
                })
              }
            />
          ) : (
            value.surname
          )}
          <button
            onClick={() =>
              dispatch({
                type:
                  state.isSelected && value.id === state.selectedData.id
                    ? "SAVE_USER"
                    : "EDIT_USER",
                payload: { ...value },
              })
            }
          >
            {state.isSelected && value.id === state.selectedData.id
              ? "Save"
              : "Edit"}
          </button>
          <button
            onClick={() =>
              dispatch({
                type: "delete",
                payload: {
                  id: value.id,
                },
              })
            }
          >
            Delete
          </button>
        </div>
      ))}
      <input
        value={state.addValueCollector.name}
        onChange={(e) =>
          dispatch({
            type: "CHANGE_ADD_VALUE",
            payload: {
              inputValue: e.target.value,
              name: "name",
            },
          })
        }
        placeholder="New name..."
      />
      <input
        value={state.addValueCollector.surname}
        onChange={(e) =>
          dispatch({
            type: "CHANGE_ADD_VALUE",
            payload: {
              inputValue: e.target.value,
              name: "surname",
            },
          })
        }
        placeholder="New surname..."
      />
      <button
        onClick={() =>
          dispatch({
            type: "ADD_NEW_USER",
            payload: {
              name: state.addValueCollector.name,
              surname: state.addValueCollector.surname,
            },
          })
        }
      >
        Add
      </button>
    </div>
  );
}
export default Takrorlash;
// LESSON 19 --> 29-avgust
