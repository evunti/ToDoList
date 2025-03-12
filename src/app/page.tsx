"use client";
import { useState } from "react";

export default function CreateListItem() {
  const [wantToDoItem, setWantToDoItem] = useState<string[]>([]);
  const [needToDoItem, setNeedToDoItem] = useState<string[]>([]);


  const addWantToDoItem = () => {
    setWantToDoItem([...wantToDoItem, ""]);
  };
  const moveToNeedToDo = (index:number) => {
    const itemToMove = wantToDoItem[index];
    setWantToDoItem(wantToDoItem.filter((_, i) => i !== index));
    setNeedToDoItem([...needToDoItem, itemToMove]);
  }
  return (
    <div>
      <main>
        <h1 className="text-2xl font-bold flex justify-center mt-20">
          Ideas List
        </h1>
        <div className="ListTablesContainer">
          <table className="LeftTable">
            <tr>
              <th>
                <button className="cursor-pointer" onClick={addWantToDoItem}>
                  Want To Do
                </button>
              </th>
            </tr>
            <tbody>
              {wantToDoItem.map((item, index) => (
                <tr key={index}>
                  <td>
                    <input
                      value={item}
                      onChange={(e) => {
                        const newItems = [...wantToDoItem];
                        newItems[index] = e.target.value;
                        setWantToDoItem(newItems);
                      }}
                    />
                    <button className="ml-2" onClick={()=> moveToNeedToDo(index)}>></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <table className="RightTable">
            <tr>
              <th>Need To Do</th>
              </tr>
            <tbody>
              {needToDoItem.map((item, index)=>(
                <tr key={index}><td>{item}</td></tr>
              ))}
              </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
