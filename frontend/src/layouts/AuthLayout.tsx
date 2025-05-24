import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
	return <div id="auth-layout">{children}</div>;
}
