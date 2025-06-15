import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationschema } from '../../validation/validation';
import { SignInFormData } from '@/type/type';

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: yupResolver(validationschema),
    mode:'onSubmit'
  });

  const onSubmit = (data: SignInFormData) => {
    console.log('Form data:', data);
  };

  return (
    <div className='w-min p-6 shadow-md flex flex-col items-center m-auto bg-white'>
        <h1 className='text-2xl font-bold lg:text-4xl mb-6'>Sign Up</h1>
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className='flex flex-col items-start gap-1'>
        <label className='font-medium'>First Name:</label>
        <input
          {...register('firstName')}
          className="w-96 border p-2 rounded focus:outline-none"
        />
        {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
      </div>
<div className='flex flex-col items-start gap-1'>
        <label className='font-medium'>Last  Name:</label>
        <input
          {...register('lastName')}
          className="w-96 border p-2 rounded focus:outline-none"
        />
        {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
      </div>

      <div className='flex flex-col items-start gap-1'>
        <label className='font-medium'>Email:</label>
        <input
          type="email"
          {...register('email')}
          className="w-96 border p-2 rounded focus:outline-none"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

         <div className='flex flex-col items-start gap-1'>
        <label className='font-medium'>Password:</label>
        <input
          type="password"
          {...register('password')}
          className="w-96 border p-2 rounded focus:outline-none"
        />
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
      </div>

      <button type="submit" className="w-full rounded-md text-center font-semibold bg-blue-500 text-white px-4 py-2">
        Sign In
      </button>
    </form>
    <p className='mt-4 text-base'>Already have an account? <a href="#" className='text-cyan-600 no-underline hover:cursor-pointer'>Sign In</a></p>
    </div>
  );
};

export default SignUp;
