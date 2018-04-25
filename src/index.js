
import { creteStore } from 'redux'
import { todoApp } from 'reducers'

const store = createStore(todoApp)

render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
)
