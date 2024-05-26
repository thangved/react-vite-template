import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const userRoutes: RouteObject[] = [
	{
		path: "",
		Component: lazy(() => import("@/layouts/user")),
		children: [
			{
				path: "",
				Component: lazy(() => import("@/pages/user")),
			},
		],
	},
];

export default userRoutes;
