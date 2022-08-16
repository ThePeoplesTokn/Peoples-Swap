// eslint-disable-next-line import/no-unresolved
import { PeoplesTheme } from 'peoples-ui-kit'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PeoplesTheme {}
}
