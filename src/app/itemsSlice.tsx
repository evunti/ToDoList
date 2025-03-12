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
      state.wantToDoItems.push("");
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
      const itemToMove = state.wantToDoItems[action.payload];
      state.wantToDoItems = state.wantToDoItems.filter(
        (_, i) => i !== action.payload
      );

      state.needToDoItems.push(itemToMove);
    },
    moveToWantToDo: (state, action: PayloadAction<number>) => {
      const itemToMove = state.needToDoItems[action.payload];
      state.needToDoItems = state.needToDoItems.filter(
        (_, i) => i !== action.payload
      );
      state.wantToDoItems.push(itemToMove);
    },
  },
});

export const {
  addWantToDoItem,
  updateWantToDoItem,
  updateNeedToDoItem,
  moveToNeedToDo,
  moveToWantToDo,
} = itemsSlice.actions;

export default itemsSlice.reducer;
