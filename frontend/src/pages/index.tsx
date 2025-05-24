import AppLayout from "@/layouts/AppLayout";
import { ReactElement } from "react";

export default function Home() {
	return (
		<div>
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
				<h1>Hoapham</h1>
			</main>
			<footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
		</div>
	);
}

Home.getLayout = function getLayout(page: ReactElement) {
	return <AppLayout>{page}</AppLayout>;
};
