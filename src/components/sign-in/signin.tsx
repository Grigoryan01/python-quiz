'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../../validation/login-validation'; 
import { LoginFormData } from '@/type/type'; 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';

const SignInPage = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
    mode: 'onSubmit',
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

    if (response.status === 200) {
  toast.success('Login successful!');
  localStorage.setItem('user', JSON.stringify(result.user));
  window.dispatchEvent(new Event('storage'));

  setTimeout(() => {
    router.push('/dashboard/home');
  }, 1500);

} else {
  toast.error(result.detail || 'Login failed');
}

    } catch (error) {
      console.error('Login error:', error);
      toast.error('Failed to connect to server.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white shadow-md rounded">
        <h1 className="text-2xl lg:text-4xl font-bold mb-6 text-center text-gray-700">Sign In</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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

          <div className="flex flex-col gap-1">
            <label className="font-medium text-gray-700">Password:</label>
            <input
              type="password"
              {...register('password')}
              className="border border-gray-600 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
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
          <a href="/dashboard/sign-up" className="text-cyan-600 hover:underline hover:cursor-pointer">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
