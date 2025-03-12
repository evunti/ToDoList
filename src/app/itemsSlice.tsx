import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ItemsState {
  wantToDoItems: string[];
  needToDoItems: string[];
}

const initialState: ItemsState = {
  wantToDoItems: [],
  needToDoItems: [],
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addWantToDoItem: (state) => {
      state.wantToDoItems.unshift("");
    },
    updateWantToDoItem: (
      state,
      action: PayloadAction<{ index: number; value: string }>
    ) => {
      state.wantToDoItems[action.payload.index] = action.payload.value;
    },
    updateNeedToDoItem: (
      state,
      action: PayloadAction<{ index: number; value: string }>
    ) => {
      state.needToDoItems[action.payload.index] = action.payload.value;
    },

    moveToNeedToDo: (state, action: PayloadAction<number>) => {
      const itemToMove = state.wantToDoItems.splice(action.payload, 1)[0];
      state.needToDoItems.unshift(itemToMove);
    },

    moveToWantToDo: (state, action: PayloadAction<number>) => {
      const itemToMove = state.needToDoItems.splice(action.payload, 1)[0];
      state.wantToDoItems.unshift(itemToMove);
    },
    deleteItem: (
      state,
      action: PayloadAction<{ list: string; index: number }>
    ) => {
      const { list, index } = action.payload;
      if (list === "wantToDo") {
        state.wantToDoItems.splice(index, 1);
      } else if (list === "needToDo") {
        state.needToDoItems.splice(index, 1);
      }
    },
    clearAllItems: (state) => {
      state.wantToDoItems = [];
      state.needToDoItems = [];
    },
  },
});

export const {
  addWantToDoItem,
  updateWantToDoItem,
  updateNeedToDoItem,
  moveToNeedToDo,
  moveToWantToDo,
  deleteItem,
  clearAllItems,
} = itemsSlice.actions;

export default itemsSlice.reducer;
