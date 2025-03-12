"use client";

import { Provider } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "./store";
import store from "./store";
import {
  addWantToDoItem,
  updateWantToDoItem,
  updateNeedToDoItem,
  moveToNeedToDo,
  moveToWantToDo,
  deleteItem,
  clearAllItems,
} from "./itemsSlice";

function CreateListItem() {
  const dispatch = useDispatch<AppDispatch>();
  const wantToDoItems = useSelector(
    (state: RootState) => state.items.wantToDoItems
  );
  const needToDoItems = useSelector(
    (state: RootState) => state.items.needToDoItems
  );
  const handleDeleteItem = (list: string, index: number) => {
    dispatch(deleteItem({ list, index }));
  };
  return (
    <div>
      <main>
        <h1 className="text-2xl font-bold flex justify-center mt-20">
          Ideas List
        </h1>
        <div className="ListTablesContainer">
          <table className="LeftTable">
            <thead>
              <tr>
                <th>
                  <button
                    className="cursor-pointer"
                    onClick={() => dispatch(addWantToDoItem())}
                  >
                    Want To Do
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {wantToDoItems.map((item, index) => (
                <tr key={index}>
                  <td>
                    <input
                      value={item}
                      onChange={(e) =>
                        dispatch(
                          updateWantToDoItem({ index, value: e.target.value })
                        )
                      }
                    />
                    <button
                      className="ml-2"
                      onClick={() => dispatch(moveToNeedToDo(index))}
                    >
                      Move
                    </button>
                    <button
                      className="ml-2 text-red-500"
                      onClick={() => handleDeleteItem("wantToDo", index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <table className="RightTable">
            <thead>
              <tr>
                <th>Need To Do</th>
              </tr>
            </thead>
            <tbody>
              {needToDoItems.map((item, index) => (
                <tr key={index}>
                  <td>
                    <input
                      value={item}
                      onChange={(e) =>
                        dispatch(
                          updateNeedToDoItem({ index, value: e.target.value })
                        )
                      }
                    />
                    <button
                      className="ml-2"
                      onClick={() => dispatch(moveToWantToDo(index))}
                    >
                      Move
                    </button>
                    <button
                      className="ml-2 text-red-500"
                      onClick={() => handleDeleteItem("wantToDo", index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="clear-button-container flex justify-center mt-4">
          <button
            onClick={() => dispatch(clearAllItems())}
            className="clear-all-btn px-4 py-1 bg-red-500 text-white rounded-md"
          >
            Clear All
          </button>
        </div>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <CreateListItem />
    </Provider>
  );
}
