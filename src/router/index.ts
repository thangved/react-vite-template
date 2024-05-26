import DefaultLayout from "@/layouts/default";
import { createBrowserRouter } from "react-router-dom";
import adminRoutes from "./admin";
import userRoutes from "./user";

const router = createBrowserRouter([
	{
		path: "/",
		Component: DefaultLayout,
		children: [
			{
				path: "user",
				children: userRoutes,
			},
			{
				path: "admin",
				children: adminRoutes,
			},
		],
	},
]);

export default router;
