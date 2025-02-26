import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const RegisterModel = () => {
  const [isRegistering, setIsRegistering] = useState(true); // Track form state (true = Register, false = Login)
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(isRegistering ? "User Registered:" : "User Logged In:", data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        {/* Title */}
        <h2 className="text-2xl font-semibold text-center mb-6">
          {isRegistering ? "Register Here" : "Welcome Back"}
        </h2>

        {/* Register Form */}
        {isRegistering ? (
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium">First Name</label>
              <input 
                {...register("name", { required: "Name is required" })} 
                className="w-full px-3 py-2 mt-1 rounded bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500" 
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium">Email</label>
              <input 
                {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/, message: "Invalid email" } })} 
                className="w-full px-3 py-2 mt-1 rounded bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500" 
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium">Password</label>
              <input 
                type="password"
                {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
                className="w-full px-3 py-2 mt-1 rounded bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500" 
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium">Confirm Password</label>
              <input 
                type="password"
                {...register("Confirmpassword", { required: "Confirm password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
                className="w-full px-3 py-2 mt-1 rounded bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500" 
              />
              {errors.Confirmpassword && <p className="text-red-500 text-sm">{errors.Confirmpassword.message}</p>}
            </div>

            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded">
              Register
            </button>

            <div className="text-center mt-3">
              <button 
                type="button" 
                onClick={() => setIsRegistering(false)} 
                className="text-sm text-blue-400 hover:underline"
              >
                Already have an account? Login here.
              </button>
            </div>
          </form>
        ) : (
          // Login Form
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input 
                {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/, message: "Invalid email" } })} 
                className="w-full px-3 py-2 mt-1 rounded bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500" 
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium">Password</label>
              <input 
                type="password"
                {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
                className="w-full px-3 py-2 mt-1 rounded bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500" 
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>

            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded">
              Login
            </button>

            <div className="text-center mt-3">
              <button 
                type="button" 
                onClick={() => setIsRegistering(true)} 
                className="text-sm text-blue-400 hover:underline"
              >
                Don't have an account? Register here.
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default RegisterModel;
