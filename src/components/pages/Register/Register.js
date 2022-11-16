import { updateProfile } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser } = useContext(AuthContext)
    const [signUpError, setSignUpError] = useState('')
    const handleRegister = data => {
        setSignUpError('')
        const email = data.email;
        const password = data.password;
        const name = data.name;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                toast.success('User Registred')
                updateProfile(user, {
                    displayName: name,
                }).then(() => {
                    // Profile updated!
                    toast.success('Profile Updated')
                }).catch((error) => {
                    // An error occurred
                    // ...
                });
            })
            .catch(error => setSignUpError(error.message))
    }
    return (
        <div className='h-[500px] flex justify-center items-center'>
            <div className='w-96 p-7 border-2'>
                <h2 className='text-xl font-bold text-center'>Register</h2>
                <form onSubmit={handleSubmit(handleRegister)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span> </label>
                        <input type="text" {...register('name',
                            { required: 'Name is required' }
                        )}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.name && <span className='text-red-600'>{errors.name?.message}</span>}

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span> </label>
                        <input type="email" {...register('email',
                            { required: 'Email is required' })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <span className='text-red-600'>{errors.email?.message}</span>}

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span> </label>
                        <input type="password" {...register('password',
                            {
                                required: 'Password is required',
                                minLength: { value: 6, message: 'Password Must be 6 Characters Long' }
                            },
                            { pattern: { value: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])$/, message: 'Password Must be Strong' } }
                        )} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <span className='text-red-600'>{errors.password?.message}</span>}
                        {signUpError && <p className='text-red-600'>{signUpError}</p>}
                    </div>
                    <input type="submit" value='Register' className='btn btn-neutral w-full mt-2' />
                    <p className='text-sm text-center mt-2'>Already have an account <Link to='/login' className='text-secondary'>Login</Link></p>
                    <div className="divider">OR</div>
                    <button className='btn btn-outline w-full rounded'>CONTINUE WITH GOOGLE</button>
                </form>
            </div>

        </div>
    );
};

export default Register;