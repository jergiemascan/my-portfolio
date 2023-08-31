export const BREAKPOINTS = {
  xxs: 0,
  xs: 420,
  sm: 768,
  md: 992,
  lg: 1200,
  xl: 1400,
}

export const BREAKPOINT_MIN_WIDTH = Object.values(BREAKPOINTS).map(
  bp => `@media only screen and (min-width:${bp}px)`
)

export const BREAKPOINT_MAX_WIDTH = Object.values(BREAKPOINTS).map(
  bp => `@media only screen and (max-width:${bp}px)`
)
