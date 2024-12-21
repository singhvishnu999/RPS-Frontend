import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { StudentProvider } from "./store/AuthStore.jsx";
import { TeacherProvider } from "./store/TeacherStore.jsx";
import {Auth} from "./store/Auth.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <Auth>
    <TeacherProvider>
      <StudentProvider>
          <App />
      </StudentProvider>
    </TeacherProvider> 
    </Auth>
    </BrowserRouter>
  </StrictMode>
);
