import HomeSceen from "../Pages/HomeSceen/HomeSceen";
import LoginScreen from "../Pages/LoginScreen/LoginScreen";

const router = [
  {
    path: "",
    component: <HomeSceen />,
  },
  {
    path: "/home",
    name:'Home',
    component: <HomeSceen />,
  },
  {
    path: "/login",
    name:'Login',
    component: <LoginScreen />,
  },
];

export default router;
