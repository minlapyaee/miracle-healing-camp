import AboutUs from "./Pages/AboutUs/AboutUs";
import LandingPage from "./Pages/LandingPage/LandingPage";

// Client Pages
import Book from "./Pages/Client/Book/Book";
import Home from "./Pages/Client/Home/Home";
import DetailPost from "./Pages/Client/Home/DetailPost";
import Services from "./Pages/Services/Services";
import Booking from "./Pages/Booking/Booking";
import QA from "./Pages/QA/QA";
import Blog from "./Pages/Blog/Blog";

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
  {
    path: "/services",
    key: "SERVICES",
    exact: true,
    component: Services,
  },
  {
    path: "/booking",
    key: "BOOKING",
    exact: true,
    component: Booking,
  },
  {
    path: "/qa",
    key: "QA",
    exact: true,
    component: QA,
  },
  {
    path: "/blog",
    key: "BLOG",
    exact: true,
    component: Blog,
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
