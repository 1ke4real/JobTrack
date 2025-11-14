import { NavLink } from "react-router";
import {ROUTE_PATHS} from "../../router/routePath.ts";
import {useLocation} from "react-router-dom";
export const Navbar= () => {
    const location = useLocation();
    return (<nav className="bg-white border-b border-gray-200 mb-8">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between h-16">
                <div className="flex items-center gap-8">
                    <div className="text-xl font-bold text-blue-500">JobTracker</div>
                    <div className="flex gap-1">
                       <NavLink to={ROUTE_PATHS.dashboard}>
                           <button
                               className={`px-4 py-2 rounded-md font-medium transition-colors ${
                                   location.pathname === ROUTE_PATHS.dashboard
                                       ? 'bg-blue-50 text-blue-600'
                                       : 'text-gray-600 hover:bg-gray-50'
                               }`}
                           >
                               Dashboard
                           </button>
                       </NavLink>
                        <NavLink to={ROUTE_PATHS.applications}>
                           <button
                               className={`px-4 py-2 rounded-md font-medium transition-colors ${
                                   location.pathname === ROUTE_PATHS.applications
                                       ? 'bg-blue-50 text-blue-600'
                                       : 'text-gray-600 hover:bg-gray-50'
                               }`}
                           >
                               Candidatures
                           </button>
                       </NavLink>
                        <NavLink to={ROUTE_PATHS.companies}>
                           <button
                               className={`px-4 py-2 rounded-md font-medium transition-colors ${
                                   location.pathname === ROUTE_PATHS.companies
                                       ? 'bg-blue-50 text-blue-600'
                                       : 'text-gray-600 hover:bg-gray-50'
                               }`}
                           >
                               Entreprises
                           </button>
                       </NavLink>
                    </div>
                </div>
            </div>
        </div>
    </nav>)


}
