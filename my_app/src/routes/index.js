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
import UserInfo from "~/pages/Users/Admin/UserInfo/UserInfo";


const publicRoutes = [
    {path:routesConfig.support, component: SupportPage , layout: "LayoutSecond",requireAdmin:false},
    {path:routesConfig.home,component:home,requireAdmin:false},
    {path:routesConfig.internetTV,component:InternetPage,requireAdmin:false},
    {path:routesConfig.mobile,component:MobilePage,requireAdmin:false},
    {path:routesConfig.store,component:StorePage,layout: "LayoutSecond" ,requireAdmin:false},
    {path:routesConfig.mobileSim,component:MobileSim,requireAdmin:false},
    {path:routesConfig.cardReaload,component:Card,requireAdmin:false},
    {path:routesConfig.mobileStandardPackage,component:MobileChildPage,requireAdmin:false},
    {path:routesConfig.login,component:LoginPage,layout:null,requireAdmin:false},
    {path:routesConfig.register,component:RegisterPage,layout:null,requireAdmin:false},


]
const privateRoutes = [
    {path:routesConfig.personal, component: Personal , layout: "LayoutSecond",requireAdmin:false},
    {path:routesConfig.category,component: Category, layout:"LayoutSecond",requireAdmin:false},
    {path:routesConfig.userinfo,component:UserInfo,layout:"LayoutSecond" , requireAdmin:true}
]
export {publicRoutes,privateRoutes}