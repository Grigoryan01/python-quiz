"use client";

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationschema } from '../../validation/validation';
import { SignInFormData } from '@/type/type';

const SignInPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: yupResolver(validationschema),
    mode: 'onSubmit',
  });

  const onSubmit = (data: SignInFormData) => {
    console.log('Form data:', data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white shadow-md rounded">
        <h1 className="text-2xl lg:text-4xl font-bold mb-6 text-center text-gray-700">Sign In</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex flex-col gap-1">
            <label className="font-medium text-gray-700">First Name:</label>
            <input
              {...register('firstName')}
              className="border border-gray-600 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-medium text-gray-700">Last Name:</label>
            <input
              {...register('lastName')}
              className="border border-gray-600 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-medium text-gray-700">Email:</label>
            <input
              type="email"
              {...register('email')}
              className="border border-gray-600 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full rounded-md font-semibold bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 hover:cursor-pointer transition-colors"
          >
            Sign In
          </button>
        </form>
        <p className="mt-4 text-base text-center">
          Don’t have an account?{' '}
          <a href="/dashboard/sign-up" className="text-cyan-600 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
