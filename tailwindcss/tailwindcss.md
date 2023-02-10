## Tailwind CSS best practices

### Utility classes
- When writing a string of multiple utility classes, always do so in an order with meaning. The "Concentric CSS" approach works well with utility classes (i.e,. 1. positioning/visibility 2. box model 3. borders 4. backgrounds 5. typography 6. other visual adjustments). Once you establish a familiar pattern of ordering, parsing through long strings of utility classes will become much, much faster so a little more effort up front goes a long way!

- Always use fewer utility classes when possible. For example, use mx-2 instead of ml-2 mr-2 and don't be afraid to use the simpler p-4 lg:pt-8 instead of the longer, more complicated pt-4 lg:pt-8 pr-4 pb-4 pl-4.

- Prefix all utility classes that will only apply at a certain breakpoint with that breakpoint's prefix. For example, use block lg:flex lg:flex-col lg:justify-center instead of block lg:flex flex-col justify-center to make it very clear that the flexbox utilities are only applicable at the lg: breakpoint and larger.

- Keep in mind that, by default, all responsive utilities are set to apply at min-width. That is, the sm: prefix does not apply only to small viewports; it applies to small breakpoints and larger. So for example instead of using the longform block sm:block md:flex lg:flex xl:flex for a <div> element you can just write md:flex. They both have the same behavior.

- Also note that, by default, the sm: breakpoint does not start at min-width: 0 as you might expect. It starts at min-width: 640px. So if you want something to apply only to the smallest of viewports (those smaller than 640px), you must first set it to apply to all breakpoints and then override it for larger breakpoints. For example, use block sm:inline if you want something to appear as block for only the smallest of screens.

- Use a consistent pattern of margin classes to make it easier to reason about positioning. For example, consistently use only mt-* and ml-* utilities, which will position the current element, or consistently use only mb-* and mr-* utilities, which will position adjacent elements. In general it is easier to reason about positioning when using the former pattern because it is effectively scoped to the styled element, but keep in mind that you may need to make exceptions to your selected pattern for elements which only appear under certain conditions, as you wouldn't want to have to also add conditional margins to elements that are adjacent to the conditional element.

- Remember that you can often add a wrapper <div> with padding instead of using margins, which may help avoid potential issues with margin collapsing. By using utility-first CSS, you don't need to invent "semantic" class names for single purpose <div>s so there is no reason to avoid using them when they are helpful.