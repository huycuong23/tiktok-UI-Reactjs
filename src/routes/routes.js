import config from '~/config';

//layouts
import { HeaderOnly } from '~/layouts';

// Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import Discover from '~/pages/Discover';
import Live from '~/pages/Live';
// public routes

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path:  config.routes.profile, component: Profile },
    { path:  config.routes.upload, component: Upload, layout: HeaderOnly },
    { path:  config.routes.discover, component: Discover},
    { path:  config.routes.live, component: Live },
    { path:  config.routes.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
