import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import AppShell from './components/AppShell'
import rootReducer from "./reducers";

const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <AppShell />
  </Provider>,
  document.getElementById("root")
)
