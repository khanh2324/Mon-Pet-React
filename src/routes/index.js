import config from '~/config'

import Home from "~/pages/Home";
import Introduce from "~/pages/Introduce";
import News from "~/pages/News";

// Public
const publicRoutes = [
    { path: config.routes.home, component: Home,},
    { path: config.routes.introduce, component: Introduce,},
    { path: config.routes.news , component: News,},
];


const privateRoutes = [];

export { publicRoutes, privateRoutes };
