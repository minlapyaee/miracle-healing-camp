import AboutUs from "./Pages/AboutUs/AboutUs";
import LandingPage from "./Pages/LandingPage/LandingPage";

// Client Pages
import Book from "./Pages/Client/Book/Book";
import Blog from "./Pages/Client/Blog/Blog";
import DetailPost from "./Pages/Client/Blog/DetailPost";
import Home from "./Pages/Client/Home/Home";

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
    key: "Home",
    exact: "true",
    component: Home,
  },
  {
    path: "/blog",
    key: "Blog",
    exact: "true",
    component: Blog,
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
