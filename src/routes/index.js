import config from '~/config';

// Pages
import Login from '~/components/Login';
import Category from '../components/pages/Category'
import Suppliers from '~/components/pages/Suppliers';
import AddSupplier from '~/components/pages/Suppliers/AddSupplier';
import Orders from '../components/pages/Orders'
import Products from '../components/pages/Products'
import Store from '../components/pages/Store'
import StockIn from '../components/pages/StockIn'
import StockOut from '../components/pages/StockOut'
import OutStock from '../components/pages/StockOut/OutStock'
import Statistics from '~/components/pages/Statistics';
import Users from '~/components/pages/Users';
import AddUser from '~/components/pages/Users/AddUser';
import AddStock from '~/components/pages/StockIn/AddStock';


// Public routes
const publicRoutes = [
    { path: config.routes.login, component: Login },
    { path: config.routes.category, component: Category },
    { path: config.routes.suppliers, component: Suppliers },
    { path: config.routes.addSupplier, component: AddSupplier },
    { path: config.routes.products, component: Products },
    { path: config.routes.orders, component: Orders },
    { path: config.routes.store, component: Store },
    { path: config.routes.stockIn, component: StockIn },
    { path: config.routes.stockOut, component: StockOut, layout: null },
    { path: config.routes.outStock, component: OutStock, layout: null },
    { path: config.routes.statistics, component: Statistics, layout: null },
    { path: config.routes.users, component: Users, layout: null },
    { path: config.routes.addUser, component: AddUser, layout: null },
    { path: config.routes.addStock, component: AddStock },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
