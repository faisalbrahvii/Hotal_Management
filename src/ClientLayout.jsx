import Navbar from "../src/client/Components/Navbar"
import Footer from "../src/client/Components/Footer"

import { Outlet } from "react-router-dom";


function ClientLayout() {
  return (
    <div>
        <Navbar />
        <Outlet />
        <Footer />
</div>
  );
}

export default ClientLayout;
