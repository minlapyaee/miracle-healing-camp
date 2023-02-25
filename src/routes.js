import AboutUs from "./Pages/AboutUs/AboutUs";
import LandingPage from "./Pages/LandingPage/LandingPage";

// Client Pages
import Book from "./Pages/Client/Book/Book";
import Home from "./Pages/Client/Home/Home";
import DetailPost from "./Pages/Client/Home/DetailPost";

const routes = [
  {
    path: "/",
    key: "LANDING_PAGE",
    exact: true,
    component: LandingPage,
  },
  {
    path: "/about-us",
    key: "ABOUT_US",
    exact: true,
    component: AboutUs,
  },
];

const userRoutes = [
  {
    path: "/",
    key: "HOME",
    exact: "true",
    component: Home,
  },
  {
    path: "/make-an-appointment",
    key: "BOOK",
    exact: "true",
    component: Book,
  },
  {
    path: "/detail-post/:id",
    key: "DETAIL_POST",
    exact: "true",
    component: DetailPost,
  },
];

export { routes, userRoutes };
