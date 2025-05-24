import AppLayout from "@/layouts/AppLayout";
import { ReactElement } from "react";

export default function Page1() {
	return <h1>This is Page1</h1>;
}
Page1.getLayout = function getLayout(page: ReactElement) {
	return <AppLayout>{page}</AppLayout>;
};
