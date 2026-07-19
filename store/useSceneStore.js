import { create } from 'zustand'

export const ANATOMY_IDS = [
  "liver",
  "gallbladder",
  "cystic-duct",
  "common-hepatic-duct",
  "common-bile-duct",
]

export const useSceneStore = create((set) => ({
  lastClicked: null,
  setLastClicked: (id) => set({ lastClicked: id }),
}))

export const selectLastClicked = (state) => state.lastClicked