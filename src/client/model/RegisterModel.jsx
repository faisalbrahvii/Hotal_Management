import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const RegisterModel = () => {
  const [isRegistering, setIsRegistering] = useState(true);
  const navigate = useNavigate();

  // Validation Schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().when("isRegistering", {
      is: true,
      then: Yup.string().required("Name is required"),
    }),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string().when("isRegistering", {
      is: true,
      then: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm password is required"),
    }),
  });

  const handleSubmit = (values) => {
    if (isRegistering) {
      // Register User and Store Data
      localStorage.setItem("userData", JSON.stringify(values));
      localStorage.setItem("currentUser", JSON.stringify(values)); // Automatically log in the user
      alert("Registration successful! Redirecting to home page.");
      navigate("/"); // Redirect to home after registration
    } else {
      // Check if User Exists in localStorage
      const storedUser = JSON.parse(localStorage.getItem("userData"));
  
      if (storedUser && storedUser.email === values.email && storedUser.password === values.password) {
        alert("Login successful!");
        localStorage.setItem("currentUser", JSON.stringify(storedUser)); // Save logged-in user
        navigate("/"); // Redirect to home after login
      } else {
        alert("Invalid credentials!");
      }
    }
    
    // Reload the page after login/register
    window.location.reload();
  };
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-gray-800 p-8 rounded-lg shadow-xl w-96 max-w-full">
        <h2 className="text-3xl font-semibold text-center text-white mb-6">
          {isRegistering ? "Create an Account" : "Welcome Back!"}
        </h2>
        <Formik
          initialValues={{ name: "", email: "", password: "", confirmPassword: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col gap-6">
              {isRegistering && (
                <div>
                  <label className="block text-sm font-medium text-gray-400">Full Name</label>
                  <Field
                    type="text"
                    name="name"
                    className="w-full px-4 py-2 mt-2 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500 text-white"
                  />
                  <ErrorMessage name="name" component="p" className="text-red-500 text-sm mt-1" />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-400">Email Address</label>
                <Field
                  type="email"
                  name="email"
                  className="w-full px-4 py-2 mt-2 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500 text-white"
                />
                <ErrorMessage name="email" component="p" className="text-red-500 text-sm mt-1" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400">Password</label>
                <Field
                  type="password"
                  name="password"
                  className="w-full px-4 py-2 mt-2 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500 text-white"
                />
                <ErrorMessage name="password" component="p" className="text-red-500 text-sm mt-1" />
              </div>

              {isRegistering && (
                <div>
                  <label className="block text-sm font-medium text-gray-400">Confirm Password</label>
                  <Field
                    type="password"
                    name="confirmPassword"
                    className="w-full px-4 py-2 mt-2 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500 text-white"
                  />
                  <ErrorMessage name="confirmPassword" component="p" className="text-red-500 text-sm mt-1" />
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg mt-4 transition duration-300"
              >
                {isRegistering ? "Sign Up" : "Login"}
              </button>

              <div className="text-center mt-3">
                <button
                  type="button"
                  onClick={() => setIsRegistering(!isRegistering)}
                  className="text-sm text-blue-400 hover:underline"
                >
                  {isRegistering
                    ? "Already have an account? Login here."
                    : "Don't have an account? Register here."}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegisterModel;
