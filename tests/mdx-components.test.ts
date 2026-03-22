import { describe, it, expect, beforeEach } from 'vitest'
import {
  setMDXComponents,
  resetMDXComponents,
  useMDXComponents,
  getDefaultMDXComponents,
} from '../packages/@pressy/components/src/content/index'

// Reset to a clean state before every test
beforeEach(() => {
  resetMDXComponents()
})

describe('useMDXComponents', () => {
  it('returns default components when no custom components are set', () => {
    const components = useMDXComponents()

    expect(components).toHaveProperty('Footnote')
    expect(components).toHaveProperty('Aside')
    expect(components).toHaveProperty('Figure')
    expect(components).toHaveProperty('Callout')
    expect(components).toHaveProperty('SceneBreak')
    expect(components).toHaveProperty('img')
    expect(components).toHaveProperty('hr')
  })

  it('returns functions for all default components', () => {
    const components = useMDXComponents()

    for (const [key, value] of Object.entries(components)) {
      expect(typeof value).toBe('function')
    }
  })
})

describe('setMDXComponents', () => {
  it('adds custom components alongside defaults', () => {
    const CustomWidget = () => null
    setMDXComponents({ CustomWidget })

    const components = useMDXComponents()
    expect(components.CustomWidget).toBe(CustomWidget)
    // Defaults are still present
    expect(components).toHaveProperty('Aside')
    expect(components).toHaveProperty('Footnote')
  })

  it('overrides a default component', () => {
    const MyAside = () => null
    setMDXComponents({ Aside: MyAside })

    const components = useMDXComponents()
    expect(components.Aside).toBe(MyAside)
    // Other defaults untouched
    expect(components.Footnote).toBe(getDefaultMDXComponents().Footnote)
  })

  it('overrides an HTML element mapping', () => {
    const MyImage = () => null
    setMDXComponents({ img: MyImage })

    const components = useMDXComponents()
    expect(components.img).toBe(MyImage)
  })

  it('merges with previously set custom components by default', () => {
    const A = () => null
    const B = () => null

    setMDXComponents({ A })
    setMDXComponents({ B })

    const components = useMDXComponents()
    expect(components.A).toBe(A)
    expect(components.B).toBe(B)
  })

  it('replaces all custom components when merge: false', () => {
    const A = () => null
    const B = () => null

    setMDXComponents({ A })
    setMDXComponents({ B }, { merge: false })

    const components = useMDXComponents()
    expect(components.B).toBe(B)
    expect(components.A).toBeUndefined()
    // Defaults still present
    expect(components).toHaveProperty('Aside')
  })

  it('later calls override earlier ones for the same key', () => {
    const V1 = () => null
    const V2 = () => null

    setMDXComponents({ MyComp: V1 })
    setMDXComponents({ MyComp: V2 })

    expect(useMDXComponents().MyComp).toBe(V2)
  })
})

describe('resetMDXComponents', () => {
  it('removes all custom components', () => {
    const Custom = () => null
    setMDXComponents({ Custom })
    expect(useMDXComponents().Custom).toBe(Custom)

    resetMDXComponents()
    expect(useMDXComponents().Custom).toBeUndefined()
  })

  it('preserves default components after reset', () => {
    setMDXComponents({ Aside: () => null })
    resetMDXComponents()

    const components = useMDXComponents()
    expect(components.Aside).toBe(getDefaultMDXComponents().Aside)
  })
})

describe('getDefaultMDXComponents', () => {
  it('returns the built-in component set', () => {
    const defaults = getDefaultMDXComponents()

    expect(defaults).toHaveProperty('Footnote')
    expect(defaults).toHaveProperty('Aside')
    expect(defaults).toHaveProperty('Figure')
    expect(defaults).toHaveProperty('Callout')
    expect(defaults).toHaveProperty('SceneBreak')
    expect(defaults).toHaveProperty('img')
    expect(defaults).toHaveProperty('hr')
  })

  it('is not affected by setMDXComponents', () => {
    const originalAside = getDefaultMDXComponents().Aside
    setMDXComponents({ Aside: () => null })

    expect(getDefaultMDXComponents().Aside).toBe(originalAside)
  })

  it('returns a copy (mutations do not affect internal state)', () => {
    const defaults = getDefaultMDXComponents()
    ;(defaults as any).Aside = 'hacked'

    expect(typeof getDefaultMDXComponents().Aside).toBe('function')
  })
})

describe('config-based component injection', () => {
  it('supports an object of components', () => {
    // Simulates what the Vite plugin does when config.components is a module
    // that default-exports an object
    const userComponents = {
      Banner: () => null,
      a: () => null,
    }
    setMDXComponents(userComponents)

    const components = useMDXComponents()
    expect(components.Banner).toBe(userComponents.Banner)
    expect(components.a).toBe(userComponents.a)
  })

  it('supports a function that receives defaults', () => {
    // Simulates the function form: export default (defaults) => ({ ... })
    const userComponentsFn = (defaults: Record<string, any>) => {
      const WrappedFigure = (props: any) => defaults.Figure(props)
      return { Figure: WrappedFigure }
    }

    const defaults = getDefaultMDXComponents()
    const result = userComponentsFn(defaults)
    setMDXComponents(result)

    const components = useMDXComponents()
    // Figure was replaced
    expect(components.Figure).toBe(result.Figure)
    expect(components.Figure).not.toBe(defaults.Figure)
    // Other defaults untouched
    expect(components.Aside).toBe(defaults.Aside)
  })
})
