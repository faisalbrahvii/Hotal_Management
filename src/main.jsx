import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  Route,
} from "react-router-dom";

import "./index.css";

//  Dashboard imports


//  Client imports
import CheckOutRooms from "./client/page/CheckOutRooms";
import About from "./client/page/About";
import Gallery from "./client/page/Gallery";
import ClientLayout from "./ClientLayout"
import HomePage from "./client/page/HomePage";
import RegisterModel  from "./client/model/RegisterModel"
import CustomerInfo from "./client/BookingDetails/CustomerInfo";
import Our_Amenities from "./client/page/Our_Amenities";

// Create a single route structure
const router = createBrowserRouter([
  {
    path: "/", 
    element: <ClientLayout />, 
    children: [
      {  index: true, element: <HomePage /> },
      { path: "CheckoutRoom", element: <CheckOutRooms /> },
      { path: "Gallery", element: <Gallery /> },
      { path: "About", element: <About /> },
      { path: "register", element: <RegisterModel  /> },
      { path: "CustomerInfo", element: <CustomerInfo  /> },
      { path: "Our_Amenities", element: <Our_Amenities  /> },
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>
);
