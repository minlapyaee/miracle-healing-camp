import AboutUs from "./Pages/AboutUs/AboutUs";
import LandingPage from "./Pages/LandingPage/LandingPage";

// Client Pages
import Book from "./Pages/Client/Book/Book";
import Blog from "./Pages/Client/Blog/Blog";
import MainBlog from "./Pages/Client/MainBlog/MainBlog";
import DetailPost from "./Pages/Client/Blog/DetailPost";
import Home from "./Pages/Client/Home/Home";
import Services from "./Pages/Services/Services";
import Booking from "./Pages/Client/Booking/Booking";
import QA from "./Pages/QA/QA";
import PackageForm from "./Pages/Client/PackageForm/PackageForm";
import CustomerLists from "./Pages/Admin/Customers/CustomerList";
import CustomerDetail from "./Pages/Admin/Customers/CustomerDetail";
import AppointmentLists from "./Pages/Admin/Appointment/AppointmentList";
import AppointmentDetail from "./Pages/Admin/Appointment/AppointmentDetail";
import QA2 from "./Pages/QA/QA2";
import QA3 from "./Pages/QA/QA3";
import Profile from "./Pages/Profile/Profile";
import ResetPwd from "./Pages/ResetPwd/ResetPwd";
import ClassList from "./Pages/Admin/ClassForm/ClassList";
import ClassForm from "./Pages/Admin/ClassForm/ClassForm";
import Classes from "./Pages/Classes/Classes";
import Users from "./Pages/Admin/Users/Users";
import Admins from "./Pages/Admin/AdminsList/Admins";
import AdminForm from "./Pages/Admin/AdminsList/AdminForm";

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
    path: "/qa2",
    key: "QA2",
    exact: true,
    component: QA2,
  },
  {
    path: "/qa3",
    key: "QA3",
    exact: true,
    component: QA3,
  },
  {
    path: "/community",
    key: "Blog",
    exact: true,
    component: Blog,
  },
  {
    path: "/detail-post/:id/:permalink",
    key: "DETAIL_POST",
    exact: true,
    component: DetailPost,
  },
  {
    path: "/classes",
    key: "CLASSES",
    exact: true,
    component: Classes,
  },
  {
    path: "/reset-password/:id",
    key: "RESET_PASSWORD",
    exact: true,
    component: ResetPwd,
  },
];

const userRoutes = [
  {
    path: "/",
    key: "Home",
    exact: true,
    component: Home,
  },
  {
    path: "/make-an-appointment",
    key: "Booking",
    exact: true,
    component: Booking,
  },
  {
    path: "/community",
    key: "Blog",
    exact: true,
    component: Blog,
  },
  {
    path: "/detail-post/:id/:permalink",
    key: "DETAIL_POST",
    exact: true,
    component: DetailPost,
  },
  {
    path: "/qa",
    key: "QA",
    exact: true,
    component: QA,
  },
  {
    path: "/qa2",
    key: "QA2",
    exact: true,
    component: QA2,
  },
  {
    path: "/qa3",
    key: "QA3",
    exact: true,
    component: QA3,
  },
  {
    path: "/services",
    key: "SERVICES",
    exact: true,
    component: Services,
  },
  {
    path: "/profile",
    key: "PROFILE",
    exact: true,
    component: Profile,
  },
  {
    path: "/main-blog",
    key: "Main_Blog",
    exact: true,
    component: MainBlog,
  },
  {
    path: "/purchase_package",
    key: "PURCHASE_PACKAGE",
    exact: true,
    component: PackageForm,
  },
  {
    path: "/reset-password/:id",
    key: "RESET_PASSWORD",
    exact: true,
    component: ResetPwd,
  },
  {
    path: "/classes",
    key: "CLASSES",
    exact: true,
    component: Classes,
  },
];

const adminRoutes = [
  {
    path: "/",
    key: "USER_LIST",
    exact: true,
    component: Users,
  },
  {
    path: "/admin-list",
    key: "ADMIN_LIST",
    exact: true,
    component: Admins,
  },
  {
    path: "/create-admin",
    key: "CREATE_ADMIN",
    exact: true,
    component: AdminForm,
  },

  {
    path: "/customers",
    key: "CUSTOMER_LISTS",
    exact: true,
    component: CustomerLists,
  },
  {
    path: "/appointment-list",
    key: "Appointment_LISTS",
    exact: true,
    component: AppointmentLists,
  },
  {
    path: "/appointment-detail/:id",
    key: "Appointment_LISTS",
    exact: true,
    component: AppointmentDetail,
  },
  {
    path: "/customer-detail/:id",
    key: "CUSTOMER_DETAIL",
    exact: true,
    component: CustomerDetail,
  },
  {
    path: "/profile",
    key: "PROFILE",
    exact: true,
    component: Profile,
  },
  {
    path: "/reset-password/:id",
    key: "RESET_PASSWORD",
    exact: true,
    component: ResetPwd,
  },
  {
    path: "/classes",
    key: "CLASS_LIST",
    exact: true,
    component: ClassList,
  },
  {
    path: "/create-class",
    key: "CREATE_CLASS",
    exact: true,
    component: ClassForm,
  },
  {
    path: "/create-class/:id",
    key: "CREATE_CLASS",
    exact: true,
    component: ClassForm,
  },
];

export { routes, userRoutes, adminRoutes };
