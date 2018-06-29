// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import ContentPaste from "@material-ui/icons/ContentPaste";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import Login from "views/Login/Login.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/ProductRegister/ProductRegister.jsx";
import Typography from "views/Typography/Typography.jsx";
import Icons from "views/Icons/Icons.jsx";
import Maps from "views/Maps/Maps.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Principal",
    navbarName: "Material Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },
{
    path: "/login",
    sidebarName: "Login",
    navbarName: "Login",
    icon: Person,
    component: Login
},
  {
    path: "/user",
    sidebarName: "Perfil",
    navbarName: "Profile",
    icon: Person,
    component: UserProfile
  },
  {
    path: "/ProductRegister",
    sidebarName: "Cadastrar Produto",
    navbarName: "Table List",
    icon: ContentPaste,
    component: TableList
  },
  {
      path: "/icons",
      sidebarName: "Cadastrar Cliente",
      navbarName: "Icons",
      icon: ContentPaste,
      component: Icons
  },
  {
    path: "/typography",
    sidebarName: "Produtos + vendidos",
    navbarName: "Typography",
    icon: BubbleChart,
    component: Typography
  },
  {
    path: "/maps",
    sidebarName: "Lista de Compras",
    navbarName: "Map",
    icon: LibraryBooks,
    component: Maps
  },
{
    path: "/notifications",
    sidebarName: "Carrinho",
    navbarName: "Notifications",
    icon: Notifications,
    component: NotificationsPage
},
  {
    path: "/notifications",
    sidebarName: "Registro de Viagens",
    navbarName: "Notifications",
    icon: Notifications,
    component: NotificationsPage
  },
  // {
  //   path: "/upgrade-to-pro",
  //   sidebarName: "Upgrade To PRO",
  //   navbarName: "Upgrade To PRO",
  //   icon: Unarchive,
  //   component: UpgradeToPro
  // },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
