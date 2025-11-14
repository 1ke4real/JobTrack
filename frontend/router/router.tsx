import { createBrowserRouter } from "react-router-dom";
import {RootLayout} from "../src/layout/RootLayout.tsx";
import {Dashboard} from "../src/views/Dashboard";
import {ApplicationsList} from "../src/views/ApplicationsList.tsx";
import {Companies} from "../src/views/Companies.tsx";
import {NewApplication} from "../src/views/NewApplication.tsx";
import {ROUTE_PATHS} from "./routePath.ts";
import {ApplicationsLayout} from "../src/layout/ApplicationsLayout.tsx";
import {Application} from "../src/views/Application.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                name: "dashboard",
                element: <Dashboard />
            },
            {
                path: ROUTE_PATHS.applications,
                name: "applications",
                element: <ApplicationsLayout/>,
                children: [
                    {
                        index: true,
                        name: "list-applications",
                        element: <ApplicationsList/>
                    },
                    {
                        path: "new",
                        name: "new-application",
                        element: <NewApplication/>
                    },
                    {
                        path: ':id',
                        name: 'application-details',
                        element: <Application/>
                    }
                ]
            },
            {
                path: ROUTE_PATHS.companies,
                name: "companies",
                element: <Companies/>
            }
        ]
    }
])
