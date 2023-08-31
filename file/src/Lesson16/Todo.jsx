import React, { useState, useReducer } from "react";

const reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "addNewTodo":
      return {
        data: [
          ...state.data,
          {
            id: state.data.length + 1,
            todoName: action.payload.todoName,
            completed: false,
          },
        ],
      };
    case "inputBoxChanging":
      return {
        data: state.data.map((value) =>
          value.id === action.payload.id
            ? { ...value, completed: action.payload.value }
            : value
        ),
      };
    default:
      return state;
  }
};

const Todo = () => {
  const [addValue, setAddValue] = useState("");
  const [state, dispatch] = useReducer(reducer, {
    data: [
      { id: 0, todoName: "Creating Merchant", completed: true },
      { id: 1, todoName: "Watching Movie", completed: false },
    ],
  });
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div className="header">
        <label>Type something that ya wanna do: </label>
        <input value={addValue} onChange={(e) => setAddValue(e.target.value)} />
        <button
          onClick={() => {
            if (addValue)
              dispatch({ type: "addNewTodo", payload: { todoName: addValue } });
            setAddValue("");
          }}
        >
          Add
        </button>
      </div>
      <div className="body">
        {state.data.map((value) => {
          return (
            <div
              key={value.id}
              style={{
                display: "flex",
                gridGap: "20px",
                alignItems: "center",
                textDecoration: `${value.completed ? "line-through" : "none"}`,
              }}
            >
              <input
                onChange={() =>
                  dispatch({
                    type: "inputBoxChanging",
                    payload: { id: value.id, value: !value.completed },
                  })
                }
                checked={value.completed}
                type={"checkbox"}
              />
              <p>{value.todoName}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Todo;
// 15-daqiqadan kor
