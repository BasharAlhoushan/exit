import { configureStore, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";

export type Lang = "ar" | "en";

interface UiState {
  openFaq: number | null;
  experienceIndex: number;
  soundOn: boolean;
  lang: Lang;
}

const initialState: UiState = {
  openFaq: 0,
  experienceIndex: 0,
  soundOn: false,
  lang: "ar",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleFaq(state, action: PayloadAction<number>) {
      state.openFaq = state.openFaq === action.payload ? null : action.payload;
    },
    setExperience(state, action: PayloadAction<number>) {
      state.experienceIndex = action.payload;
    },
    toggleSound(state) {
      state.soundOn = !state.soundOn;
    },
    setLang(state, action: PayloadAction<Lang>) {
      state.lang = action.payload;
    },
    toggleLang(state) {
      state.lang = state.lang === "ar" ? "en" : "ar";
    },
  },
});

export const { toggleFaq, setExperience, toggleSound, setLang, toggleLang } = uiSlice.actions;

export const store = configureStore({
  reducer: { ui: uiSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
