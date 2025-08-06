import type { Prompt } from './types'

export function defaultPrompt(): Prompt {
  return {
    keyIntensity: 1.2,
    keyAngle: 0.8,
    keyColor: '#ffffff',
  }
}
