import Navbar from "./Navbar";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="flex justify-between">
      <Button>
        <h1>T2NO</h1>
      </Button>
      <Navbar />
    </header>
  );
}
