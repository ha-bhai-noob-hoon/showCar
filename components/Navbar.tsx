import { headers } from "next/dist/client/components/headers";
import Link from "next/link";
import React from "react";

const Navbar = () => {
    return ( 
        
            <header className="w-full absolute z-10">
                <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
                    <Link href='/' className="flex justify-center items-center">
                        <Image 
                            src='/logo.png',
                            alt=''
                        />
                    </Link>
                    
                </nav>
            </header>
        
    )
}
 

export default Navbar;