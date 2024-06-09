// components/Login.js
'use client'
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { authState } from '../../../store/atoms/useAuth';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye, EyeOff } from 'lucide-react'; // Import icons

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const setAuth = useSetRecoilState(authState);
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        setAuth({ isLoggedIn: true, user: { email } });
        router.push('/');
        // if (email !== '' && password !== '') {
        //     setAuth({ isLoggedIn: true, user: { email } });
        //     router.push('/');
        // }
    };

    return (
        <main className='flex justify-center items-center min-w-[100vw] min-h-[100vh]'>
            <Card className='w-96'>
                <CardHeader>
                    <CardTitle>
                        Login
                    </CardTitle>
                </CardHeader>
                <CardContent><label className='tex-sm'>Do you have an any account? <span onClick={() => { router.push('/sign-up') }} className='font-semibold cursor-pointer'>Sign up</span></label></CardContent>
                <form onSubmit={handleSubmit}>
                    <CardContent>
                        <Label>Email:</Label>
                        <Input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </CardContent>
                    <CardContent>
                        <Label>Password:</Label>
                        <div className="relative">
                            <Input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} />
                            {/* Icon để chuyển đổi giữa hiển thị và ẩn mật khẩu */}
                            <button type="button" className="absolute inset-y-0 right-0 flex items-center px-3" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <EyeOff /> : <Eye />}
                            </button>
                        </div>
                    </CardContent>
                    <CardContent className="flex justify-center items-center"><Button type="submit">Login</Button></CardContent>
                </form>
            </Card>
        </main>
    );
};

export default Login;
