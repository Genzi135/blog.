// components/Help.js
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import React from 'react';

const Help = () => {
    return (
        <main className='flex flex-col'>
            <div className="flex p-5 justify-between items-center border-b-[1px] bg-black border-black shadow-green-200 shadow-md">
                <Link href={'/'}>
                    <div id="Logo" className="text-2xl font-medium text-white">
                        Blog <label className="text-green-500 font-extrabold">.</label>
                    </div>
                </Link>
                <div className="flex gap-8 justify-center items-center">
                    <Link href={'/'}>
                        <Label className="text-white cursor-pointer">Back to home</Label>
                    </Link>
                </div>
            </div>
            <div className="container mx-auto px-4 py-8 w-[800px]">
                <h1 className="text-4xl font-bold mb-4">Help Center</h1>
                <p className="text-lg mb-8">Welcome to our Help Center. Here you can find answers to frequently asked questions and get assistance with using our platform.</p>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-2">Getting Started</h2>
                    <p className="text-lg mb-4">If you are new to our platform, check out our Getting Started guide to learn how to set up your account and start using our features.</p>
                    <p className="text-lg mb-4"><strong>Answer:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at lorem at justo aliquet molestie.</p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-2">Account Management</h2>
                    <p className="text-lg mb-4">Learn how to manage your account settings, update your profile information, and change your password.</p>
                    <p className="text-lg mb-4"><strong>Answer:</strong> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-2">Troubleshooting</h2>
                    <p className="text-lg mb-4">Encountering issues? Our troubleshooting guide can help you resolve common problems and errors.</p>
                    <p className="text-lg mb-4"><strong>Answer:</strong> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-2">Contact Support</h2>
                    <p className="text-lg mb-4">If you can not find the answer to your question in our Help Center, feel free to contact our support team for further assistance.</p>
                    <p className="text-lg mb-4"><strong>Answer:</strong> Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
                </div>
            </div>

        </main>
    );
};

export default Help;
