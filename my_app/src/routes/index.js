import routesConfig from "~/config/routes";

import SupportPage from "~/pages/SupportPage";
import MobilePage from "~/pages/MobilePage/MobilePage";
import InternetPage from "~/pages/InternetPage";
import StorePage from "~/pages/StorePage";
import home from "~/pages/home";
import MobileSim from "~/pages/MobileSim/MobileSim";
import Card from "~/pages/Card";
import MobileChildPage from "~/pages/MobilePage/MobileChildPage";
import LoginPage from "~/pages/LoginPage/LoginPage";
import RegisterPage from "~/pages/RegisterPage/RegisterPage";
import Personal from "~/pages/Users/User/Personal/Personal";
import Category from "~/pages/Users/User/Category/Category";


const publicRoutes = [
    {path:routesConfig.support, component: SupportPage , layout: "LayoutSecond"},
    {path:routesConfig.home,component:home},
    {path:routesConfig.internetTV,component:InternetPage},
    {path:routesConfig.mobile,component:MobilePage},
    {path:routesConfig.store,component:StorePage,layout: "LayoutSecond" },
    {path:routesConfig.mobileSim,component:MobileSim},
    {path:routesConfig.cardReaload,component:Card},
    {path:routesConfig.mobileStandardPackage,component:MobileChildPage},
    {path:routesConfig.login,component:LoginPage,layout:null},
    {path:routesConfig.register,component:RegisterPage,layout:null}


]
const privateRoutes = [
    {path:routesConfig.personal, component: Personal , layout: "LayoutSecond"},
    {path:routesConfig.category,component: Category, layout:"LayoutSecond"}
]
export {publicRoutes,privateRoutes}