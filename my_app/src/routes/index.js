import routesConfig from "~/config/routes";

import SupportPage from "~/pages/SupportPage";
import MobilePage from "~/pages/MobilePage";
import InternetPage from "~/pages/InternetPage";
import StorePage from "~/pages/StorePage";
import home from "~/pages/home";
import MobileSim from "~/pages/MobileSim/MobileSim";
import Card from "~/pages/Card";
const publicRoutes = [
    {path:routesConfig.support, component: SupportPage , layout: null},
    {path:routesConfig.home,component:home},
    {path:routesConfig.internetTV,component:InternetPage},
    {path:routesConfig.mobile,component:MobilePage},
    {path:routesConfig.store,component:StorePage},
    {path:routesConfig.mobileSim,component:MobileSim},
    {path:routesConfig.cardReaload,component:Card},
]
const privateRoutes = {

}
export {publicRoutes,privateRoutes}