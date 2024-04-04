import { Routes, Route } from "react-router-dom";
import Login from "../pages/Authentication/Login/Login";
import Layout from "../layout";
import ForgotPassword from "../pages/Authentication/ForgotPassword/ForgotPassword";
import OTP from "../pages/Authentication/OTP/OTP";
import ResetPassword from "../pages/Authentication/ResetPassword/ResetPassword";
import HomePage from "../pages/HomePage/HomePage";
import SignUp from "../pages/Authentication/SignUp/SignUp";
import BusinessForm from "../pages/Authentication/SignUp/BusinessForm";
import OwnerProfile from "../pages/OwnerProfile/Owner";
import SetupOwnerInfo from "../pages/SetupProfile/SetUpOwnerInfo";
import ChangePassword from "../pages/ChangePassword/ChangePassword";
import OwnerLayout from "../layout/ownerLayout";
import Requests from "../pages/OwnerProfile/Request";
import Chat from "../pages/OwnerProfile/Chat";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<OwnerLayout />}>
        <Route path="/ownerprofile" element={<OwnerProfile />} />
        <Route path="/request" element={<Requests />} />
        <Route path="/chat" element={<Chat />} />
      </Route>
      <Route path="/" element={<Layout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/business-form" element={<BusinessForm />} />
        <Route path="/setupProfile" element={<SetupOwnerInfo />} />
        <Route path="/changePassword" element={<ChangePassword />} />
      </Route>
      <Route path="/homepage" element={<HomePage />} />
    </Routes>
  );
}
