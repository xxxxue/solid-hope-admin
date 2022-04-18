/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import App from "./App";
import { HopeProvider } from "@hope-ui/solid";
import { Router } from "solid-app-router";

render(
  () => (
    <HopeProvider>
      <Router>
        <App />
      </Router>
    </HopeProvider>
  ),
  document.getElementById("root") as HTMLElement
);
