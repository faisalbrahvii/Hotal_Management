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
  };
  
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-6">
          {isRegistering ? "Register Here" : "Welcome Back"}
        </h2>
        <Formik
          initialValues={{ name: "", email: "", password: "", confirmPassword: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col gap-4">
              {isRegistering && (
                <div>
                  <label className="block text-sm font-medium">First Name</label>
                  <Field
                    type="text"
                    name="name"
                    className="w-full px-3 py-2 mt-1 rounded bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500"
                  />
                  <ErrorMessage name="name" component="p" className="text-red-500 text-sm" />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium">Email</label>
                <Field
                  type="email"
                  name="email"
                  className="w-full px-3 py-2 mt-1 rounded bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />
              </div>

              <div>
                <label className="block text-sm font-medium">Password</label>
                <Field
                  type="password"
                  name="password"
                  className="w-full px-3 py-2 mt-1 rounded bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage name="password" component="p" className="text-red-500 text-sm" />
              </div>

              {isRegistering && (
                <div>
                  <label className="block text-sm font-medium">Confirm Password</label>
                  <Field
                    type="password"
                    name="confirmPassword"
                    className="w-full px-3 py-2 mt-1 rounded bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500"
                  />
                  <ErrorMessage name="confirmPassword" component="p" className="text-red-500 text-sm" />
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
              >
                {isRegistering ? "Register" : "Login"}
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
