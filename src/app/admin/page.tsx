'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import Image from "next/image";
import {signIn} from "next-auth/react";
import useInput from "../_hooks/useInput";


export default function LoginPage() {
    const router = useRouter();
    const [ userName, onChangeUserName ] = useInput();
    const [ password, onChangePassword ] = useInput();

    const handleClickLoginButton = async () => {
        const response = await signIn("credentials", {
            username: userName,
            password: password,
            redirect: false,
        });

        console.log(response);

        if (response?.ok) {
            router.push('/dashboard');
        } else {

        }
    }

    return (
        <div className="flex flex-col justify-center mt-20">
            <div className="flex flex-col items-center justify-center space-y-10">
                <Image
                    src={'/bluelunch_logo.png'} alt={'블루엠텍 로고'}
                    width={200} height={50}
                />
                <h2
                    className="text-3xl font-bold text-primary-blue"
                >
                    블루런치 관리자 로그인
                </h2>
            </div>
            <div className="mt-10 w-[300px] mx-auto space-y-4">
                <div>
                    <label htmlFor="email">
                        관리자 계정
                    </label>
                    <div className="mt-2">
                        <input
                            value={userName}
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            onChange={onChangeUserName}
                        />
                    </div>
                </div>
                <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="password">
                            비밀번호
                        </label>
                    </div>
                    <div className="mt-2">
                        <input
                            value={password}
                            onChange={onChangePassword}
                            type="password"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>
                <div>
                    <button
                        onClick={handleClickLoginButton}
                        className="flex mt-8 w-full h-[40px] items-center justify-center rounded-md bg-primary-blue font-bold text-white"
                    >
                        로그인
                    </button>
                </div>
            </div>
        </div>
    );
}
