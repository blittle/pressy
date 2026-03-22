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

/**
 * A map of component names to Preact component implementations.
 *
 * Keys can be:
 * - **Custom component names** (`Aside`, `Callout`, `Footnote`, etc.) — used
 *   when the MDX author writes `<Aside>` in their content.
 * - **HTML element names** (`img`, `hr`, `h1`, `p`, `a`, etc.) — used to
 *   override the default rendering of those HTML elements in MDX output.
 *
 * @example
 * ```ts
 * const components: MDXComponents = {
 *   // Override a built-in component
 *   Aside: MyCustomAside,
 *   // Override how <a> tags render
 *   a: ({ href, children }) => <a href={href} target="_blank">{children}</a>,
 *   // Add a brand-new component usable in MDX
 *   VideoEmbed: ({ url }) => <iframe src={url} />,
 * }
 * ```
 */
export type MDXComponents = Record<string, ComponentType<any>>

// Default components that ship with Pressy
const defaultComponents: MDXComponents = {
  Footnote,
  Aside,
  Figure,
  Callout,
  SceneBreak,
  // Override default elements
  img: Figure,
  hr: (props: any) => SceneBreak({ variant: 'line', ...props }),
}

let customComponents: MDXComponents = {}

/**
 * Register custom MDX components that will be available in all MDX content.
 *
 * Custom components are **merged** with the defaults — you only need to specify
 * the components you want to add or override.  To override a built-in
 * component, use the same key (e.g. `Aside`).  To replace how an HTML element
 * renders, use the element name as the key (e.g. `a`, `img`, `blockquote`).
 *
 * Call this **before** `hydrate()` so the components are available on the
 * first render.
 *
 * @example
 * ```ts
 * import { setMDXComponents } from '@pressy-pub/components/content'
 *
 * // Add a new component and override <a> links
 * setMDXComponents({
 *   VideoEmbed: ({ url }) => <iframe src={url} allowFullScreen />,
 *   a: ({ href, children }) => (
 *     <a href={href} target="_blank" rel="noopener">{children}</a>
 *   ),
 * })
 * ```
 *
 * @param components - A map of component names to Preact component implementations.
 * @param options - Options controlling how the components are applied.
 * @param options.merge - When `true` (default), merges with previously set
 *   custom components. When `false`, replaces all custom components.
 */
export function setMDXComponents(
  components: MDXComponents,
  options: { merge?: boolean } = {},
): void {
  const { merge = true } = options
  customComponents = merge
    ? { ...customComponents, ...components }
    : { ...components }
}

/**
 * Remove all custom component overrides, reverting to built-in defaults.
 */
export function resetMDXComponents(): void {
  customComponents = {}
}

/**
 * Get the full set of MDX components (defaults merged with custom overrides).
 *
 * Custom components take precedence over defaults when keys collide.
 *
 * This is called internally by the Pressy runtime to pass components into
 * MDX content.  You can also call it in your own rendering code.
 *
 * @returns The merged component map.
 */
export function useMDXComponents(): MDXComponents {
  return { ...defaultComponents, ...customComponents }
}

/**
 * Get only the default built-in components (ignoring any custom overrides).
 * Useful for wrapping a default component inside a custom override.
 *
 * @example
 * ```ts
 * import { getDefaultMDXComponents, setMDXComponents } from '@pressy-pub/components/content'
 *
 * const defaults = getDefaultMDXComponents()
 *
 * setMDXComponents({
 *   // Wrap the default Figure with extra behaviour
 *   Figure: (props) => (
 *     <div class="my-figure-wrapper">
 *       {defaults.Figure(props)}
 *     </div>
 *   ),
 * })
 * ```
 */
export function getDefaultMDXComponents(): Readonly<MDXComponents> {
  return { ...defaultComponents }
}
