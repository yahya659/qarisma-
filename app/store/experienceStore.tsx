import { create } from 'zustand'

type Scene = 'curtain' | 'welcome' | 'limousine' | 'domains' | 'article' | 'cafe' | 'farewell'
type Gender = 'male' | 'female' | null

interface ExperienceStore {
  currentScene: Scene
  gender: Gender
  selectedDomain: string | null
  setScene: (scene: Scene) => void
  setGender: (gender: Gender) => void
  setDomain: (domain: string) => void
}

export const useExperienceStore = create<ExperienceStore>((set) => ({
  currentScene: 'curtain',
  gender: null,
  selectedDomain: null,
  setScene: (scene) => set({ currentScene: scene }),
  setGender: (gender) => set({ gender }),
  setDomain: (domain) => set({ selectedDomain: domain }),
}))