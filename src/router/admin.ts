import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const adminRoutes: RouteObject[] = [
	{
		path: "",
		Component: lazy(() => import("@/layouts/admin")),
		children: [
			{
				path: "",
				Component: lazy(() => import("@/pages/admin")),
			},
		],
	},
];

export default adminRoutes;
