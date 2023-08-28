import routesConfig from '~/config/routes';

//layouts
import { HeaderOnly } from '~/components/layout';

// Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
// public routes

const publicRoutes = [
    { path: routesConfig.root, component: Home },
    { path: routesConfig.following, component: Following },
    { path:  routesConfig.profile, component: Profile },
    { path:  routesConfig.upload, component: Upload, layout: HeaderOnly },
    { path:  routesConfig.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
