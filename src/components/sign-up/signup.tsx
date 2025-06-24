'use client';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationschema } from '../../validation/validation';
import { SignInFormData } from '@/type/type';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';

const SignUpPage = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: yupResolver(validationschema),
    mode: 'onSubmit',
  });

  const onSubmit = async (data: SignInFormData) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.status === 201) {
        toast.success('Successfully registered!');
         localStorage.setItem('user', JSON.stringify(result.user)); 
  window.dispatchEvent(new Event('storage'));

  setTimeout(() => {
    router.push('/dashboard/home');
  }, 1500);

      } else if (response.status === 409) {
        toast.error('User already exists. Please sign in.');
      } else {
        toast.error(result.message || 'Something went wrong.');
      }
    } catch (error) {
      console.error('Registration error:', error);
      toast.error('Failed to connect to server.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white shadow-md rounded">
        <h1 className="text-2xl lg:text-4xl font-bold mb-6 text-center text-gray-700">Sign Up</h1>
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
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-base text-center">
          Already have an account?{' '}
          <a href="/dashboard/sign-in" className="text-cyan-600 hover:underline hover:cursor-pointer">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
