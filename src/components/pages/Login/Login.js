import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { loginUser } = useContext(AuthContext)
    const [loginError, setLoginError] = useState('')
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const handleLogin = data => {
        setLoginError('')
        const email = data.email;
        const password = data.password;
        loginUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true });
            })
            .catch(error => setLoginError(error.message))
    }
    return (
        <div className='h-[500px] flex justify-center items-center'>
            <div className='w-96 p-7 border-2'>
                <h2 className='text-xl font-bold text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span> </label>
                        <input type="email" {...register("email",
                            { required: "Email Address is required" }

                        )} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span> </label>
                        <input type="password" {...register("password",
                            {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password Must be 6 Characters Long' }
                            })
                        } className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                        <label className="label"> <span className="label-text">Forget Password??</span> </label>
                    </div>
                    <input type="submit" value='Login' className='btn btn-neutral w-full' />
                    <p className='text-sm text-center mt-2'>New to Doctors Portal? <Link to='/register' className='text-secondary'>Create New Account</Link></p>
                    <div className="divider">OR</div>
                    <button className='btn btn-outline w-full rounded'>CONTINUE WITH GOOGLE</button>
                </form>
            </div>

        </div>
    );
};

export default Login;