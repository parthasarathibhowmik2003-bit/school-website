import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Admissions from "./pages/Admissions";
import Faculty from "./pages/Faculty";
import Facilities from "./pages/Facilities";
import Gallery from "./pages/Gallery";
import Notices from "./pages/Notices";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "academics", Component: Academics },
      { path: "admissions", Component: Admissions },
      { path: "faculty", Component: Faculty },
      { path: "facilities", Component: Facilities },
      { path: "gallery", Component: Gallery },
      { path: "notices", Component: Notices },
      { path: "achievements", Component: Achievements },
      { path: "contact", Component: Contact },
    ],
  },
]);
