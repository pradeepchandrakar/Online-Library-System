import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux"; // ✅ Import Provider from react-redux
import { store } from "./redux/store"; // ✅ Ensure correct path to store
import './index.css'
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

