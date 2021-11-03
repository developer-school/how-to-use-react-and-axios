import React, { ReactElement, ReactNode } from "react";
import { Toaster } from "react-hot-toast";

interface Props {
  title: string;
  children: ReactNode;
}

export default function Layout({ title, children }: Props): ReactElement {
  return (
    <div className='bg-gray-200 min-h-screen h-full'>
      <nav className='bg-indigo-500 text-white py-4'>
        <div className='text-center px-4 sm:px-6 lg:px-8'>
          <h1 className='text-2xl font-bold'>{title}</h1>
        </div>
      </nav>
      <main className='relative'>
        <div className='max-w-xl  mt-4 sm:px-6 lg:px-8 mx-auto'>{children}</div>
      </main>

      <Toaster />
    </div>
  );
}
