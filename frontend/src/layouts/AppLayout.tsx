import Header from "@/components/Header";
import { ReactNode } from "react";

export default function AppLayout({ children }: { children: ReactNode }) {
	return (
		<div id="app-layout">
			<Header />
			{children}
		</div>
	);
}
