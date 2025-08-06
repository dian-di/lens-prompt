import { create } from 'zustand'

export interface SceneState {
  keyIntensity: number
  keyColor: string
  keyAngle: number
  fov: number
  setKeyIntensity: (v: number) => void
  setKeyColor: (v: string) => void
  setKeyAngle: (v: number) => void
  setFov: (v: number) => void
  makePrompt: () => string
}

export const useSceneStore = create<SceneState>((set, get) => ({
  keyIntensity: 1.5,
  keyColor: '#ffffff',
  keyAngle: Math.PI / 4,
  fov: 50,

  setKeyIntensity: (v) => set({ keyIntensity: v }),
  setKeyColor: (v) => set({ keyColor: v }),
  setKeyAngle: (v) => set({ keyAngle: v }),
  setFov: (v) => set({ fov: v }),

  makePrompt: () => {
    const { keyIntensity, keyAngle, keyColor, fov } = get()
    return [
      `key light intensity ${keyIntensity.toFixed(1)}`,
      `key light angle ${(keyAngle * 180 / Math.PI).toFixed(0)}°`,
      `key light color ${keyColor}`,
      `camera lens ${fov}mm`
    ].join(', ')
  }
}))