import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useUser();
    const [error, setError] = useState('');
    let navigate = useNavigate();

    const dummyUser = {
        name: 'John Doe',
        email: 'user@example.com',
        password: 'password123'
    };

    const handleLogin = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError('Please enter both email and password.');
            return;
        }

        if (email === dummyUser.email && password === dummyUser.password) {
            setUser({
                name: dummyUser.name,
                email: dummyUser.email
            });

            setError('');
        } else {
            setError('Invalid email or password.');
            setUser(null);
        }
    };

    return (
        <div className="flex items-center justify-center py-28">
            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

                {error && <div className="mb-4 text-red-500 text-sm">{error}</div>}

                {dummyUser ? (
                    <>
                        <div className="text-green-600 text-center">
                            <p><strong>Name:</strong> {dummyUser.name}</p>
                            <p><strong>Email:</strong> {dummyUser.email}</p>
                        </div>{
                            navigate("/")
                        }
                    </>
                ) : (
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium">Email</label>
                            <input
                                type="email"
                                className="w-full mt-1 p-2 border border-gray-400 rounded-md outline-[#03a9f4]"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Password</label>
                            <input
                                type="password"
                                className="w-full mt-1 p-2  border border-gray-400 rounded-md outline-[#03a9f4]"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#03a9f4] text-white p-2 rounded-md hover:bg-[#03a9f4]"
                        >
                            Login
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Login;
