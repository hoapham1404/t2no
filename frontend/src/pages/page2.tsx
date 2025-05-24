import AppLayout from "@/layouts/AppLayout";
import { ReactElement } from "react";

export default function Page2() {
	return <h1>This is Page 2</h1>;
}

Page2.getLayout = function getLayout(page: ReactElement) {
	return <AppLayout>{page}</AppLayout>;
};
