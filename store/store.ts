import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  category: string;
  sort: string;
}

const initialState: FilterState = {
  category: "",
  sort: "",
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setSort: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
    },
  },
});

export const { setCategory, setSort } = filterSlice.actions;

export const store = configureStore({
  reducer: {
    filters: filterSlice.reducer,
  },
});

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
