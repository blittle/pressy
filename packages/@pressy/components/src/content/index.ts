import { ComponentType, ComponentChildren } from 'preact'
import { Footnote } from './Footnote.js'
import { Aside } from './Aside.js'
import { Figure } from './Figure.js'
import { Callout } from './Callout.js'
import { SceneBreak } from './SceneBreak.js'

export { Footnote } from './Footnote.js'
export { Aside } from './Aside.js'
export { Figure } from './Figure.js'
export { Callout } from './Callout.js'
export { SceneBreak } from './SceneBreak.js'

// MDX components provider
const defaultComponents: Record<string, ComponentType<any>> = {
  Footnote,
  Aside,
  Figure,
  Callout,
  SceneBreak,
  // Override default elements
  img: Figure,
  hr: SceneBreak,
}

let customComponents: Record<string, ComponentType<any>> = {}

export function setMDXComponents(components: Record<string, ComponentType<any>>) {
  customComponents = components
}

export function useMDXComponents(): Record<string, ComponentType<any>> {
  return { ...defaultComponents, ...customComponents }
}
