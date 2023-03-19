import AboutUs from "./Pages/AboutUs/AboutUs";
import LandingPage from "./Pages/LandingPage/LandingPage";

// Client Pages
import Book from "./Pages/Client/Book/Book";
import Blog from "./Pages/Client/Blog/Blog";
import MainBlog from "./Pages/MainBlog/MainBlog";
import DetailPost from "./Pages/Client/Blog/DetailPost";
import Home from "./Pages/Client/Home/Home";
import Services from "./Pages/Services/Services";
import Booking from "./Pages/Booking/Booking";
import QA from "./Pages/QA/QA";

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
    key: "Booking",
    exact: "true",
    component: Booking,
  },
  {
    path: "/detail-post/:id",
    key: "DETAIL_POST",
    exact: "true",
    component: DetailPost,
  },
  {
    path: "/qa",
    key: "QA",
    exact: true,
    component: QA,
  },
  {
    path: "/services",
    key: "SERVICES",
    exact: true,
    component: Services,
  },
  {
    path: "/main-blog",
    key: "Main_Blog",
    exact: true,
    component: MainBlog,
  },
];

export { routes, userRoutes };
