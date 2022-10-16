import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { Provider } from "react-redux";
import { configureStore } from "./store";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={configureStore()}>
      <App />
    </Provider>
  </StrictMode>
);
