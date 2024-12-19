import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
}
* {
  box-sizing: border-box;
  font-family: 'Lucida Sans', 'Lucida Sans Regular',
  'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana,
  sans-serif, 'Courier New', Courier, monospace;
  font-weight: bold;
}
#root {
  margin: 0;
  width: 100%;
  height: 100%;
}
`

export default GlobalStyles