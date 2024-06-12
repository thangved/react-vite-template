import FirstLoader from "@/components/first-loader";
import useAppSelector from "@/hooks/useAppSelector";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
	const user = useAppSelector((state) => state.user);

	if (!user) return <FirstLoader />;

	return (
		<Suspense fallback={<FirstLoader />}>
			<Outlet />
		</Suspense>
	);
}
