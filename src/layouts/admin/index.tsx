import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
	return (
		<Suspense>
			<Outlet />
		</Suspense>
	);
}
