"use client"
import { useRef } from "react";
import Button from "./ui/Button";
import InputBox from "./ui/inputBox";
import { signin, signup } from "@/actions/user";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

function AuthForm({
    isSignin
}: { isSignin : boolean }) {

    const router = useRouter();

    const refInputArr = useRef<HTMLInputElement[] | null[]>(Array(isSignin ? 2 : 3).fill(0));
    async function handleSubmit() {
        if(isSignin) {
            const username = refInputArr.current[0]?.value;
            const password = refInputArr.current[1]?.value;
            if(!username || !password) {
                toast.error('Please Value')
                return;
            }
            const response =  await signin({
                username,
                password
            }) 
            if(response) {
                router.push('./');
            }
        } else {
            const name = refInputArr.current[0]?.value;
            const username = refInputArr.current[1]?.value;
            const password = refInputArr.current[2]?.value;
            if(!username || !password || !name) {
                toast.error('Please Value')
                return;
            }
            const response = await signup({
                name,
                username,
                password
            })
            if(response) {
                router.push('/signin')
            }
        }
    }
    return (
        <div className='flex min-h-screen items-center justify-center'>
            <div className={'bg-zinc-950 border border-zinc-800 rounded p-10 space-y-3 text-white'}>
                <div className='text-center'>
                    {isSignin ? 'Sign in' : 'Sign up'}
                </div>
                <div className={`flex flex-col  gap-y-3`}>
                    { !isSignin && <InputBox reference={(e) => refInputArr.current[0] = e} type="text" placeHolder="Name"/>}
                    <InputBox reference={(e) => refInputArr.current[isSignin ? 0 : 1] = e} type="text" placeHolder="Email"/>
                    <InputBox reference={(e) => refInputArr.current[isSignin ? 1 : 2] = e} type="password" placeHolder="Password"/>
                    <div className="flex justify-center">
                        <Button text={'Submit'} handleClick={handleSubmit}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthForm;