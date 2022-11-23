import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import useToken from '../../../hooks/useToken';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { loginUser, loginWithGoogle } = useContext(AuthContext)
    const [loginError, setLoginError] = useState('')
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [logedInUserEmail, setLogedInUserEmail] = useState('');

    const [token] = useToken(logedInUserEmail)

    if (token) {
        navigate(from, { replace: true });
    }
    const handleLogin = data => {
        setLoginError('')
        const email = data.email;
        const password = data.password;
        loginUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setLogedInUserEmail(user.email)
            })
            .catch(error => setLoginError(error.message))
    }

    const saveUser = (name, email) => {
        const user = { name, email }
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setLogedInUserEmail(email)
                }
            })
    }

    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(result => {
                const user = result.user;
                const userName = user.displayName;
                const userEmail = user.email;
                saveUser(userName, userEmail)
                toast.success('Login Success');
            })
            .catch(error => {
                const errorMessage = error.message;
                toast.error(errorMessage)
            })
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
                </form>
                <div className="divider">OR</div>
                <button
                    onClick={handleGoogleLogin}
                    className='btn btn-outline w-full rounded'>CONTINUE WITH GOOGLE</button>
            </div>

        </div>
    );
};

export default Login;