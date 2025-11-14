
import { RouterProvider } from "react-router/dom";
import './index.css'
import {router} from "../router/router.tsx";


const App = () => {





    return (
            <RouterProvider router={router} />
        // <div ">
        //     <Navigation />
        //
        //     <div className="max-w-7xl mx-auto px-6 pb-12">
        //         {currentPage === 'dashboard' && <Dashboard />}
        //         {currentPage === 'applications' && <Applications />}
        //         {currentPage === 'new-application' && <NewApplication />}
        //         {currentPage === 'companies' && <Companies />}
        //     </div>
        //
        //     {showModal && <CompanyModal />}
        // </div>
    );
};

export default App;
