import { render } from 'react-dom'

import App from './App'

if (module.hot) {
  module.hot.accept();
}

const app = document.getElementById('app')
render(<App/>, app)