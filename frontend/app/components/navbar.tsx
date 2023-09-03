import React from 'react'
import Image from 'next/image';

type Props = {}

export default function Navbar({}: Props) {
    return (
        <header className="h-[9%] sticky top-0 flex flew-row items-center justify-center md:justify-normal p-8 text-white w-screen bg-black">
          <Image className="object-cover md:w-[6%] w-[14%]" 
          width={500}
          height={500}
          alt="Picture of the author"
          src="/icon.jpg"/>
        </header>
      );
}