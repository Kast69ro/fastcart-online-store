import { Outlet } from "react-router-dom";
import Header from "../../../widgets/header/header";
import Footer from "../../../widgets/footer/footer";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen max-w-[1920px] w-full mx-auto">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
