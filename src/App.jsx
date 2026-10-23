import { Routes, Route, Navigate } from "react-router-dom";
 import DashboardLayout from "./layouts/DashboardLayout";
 import Appointment from "./pages/appointment/Appointment.jsx"; 
 import NewBooking from "./pages/appointment/NewBooking.jsx";
export default function App() {
   return ( <Routes> <Route path="/" element={<Navigate to="/appointments" replace />} />
  
  
  
  
  
  <Route element={<DashboardLayout />}>
    <Route path="/appointments" element={<Appointment />} />
    <Route path="/new-booking" element={<NewBooking />} />
  </Route>
</Routes>
); }