import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  let navigate = useNavigate();

  // Navigate to home page after 3 seconds
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  });

  return (
    <section className="container mx-auto py-52 px-4 lg:px-0">
      <div className="text-center">
        <p className="text-gray-400 text-6xl font-light">404</p>
        <p className="text-gray-50 font-medium pt-2 text-2xl">Oh no! Page not found!</p>
      </div>
    </section>
  );
};

export default ErrorPage;
