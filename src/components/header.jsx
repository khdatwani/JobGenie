import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

const Header = () => {
  return (
    <>
      <nav className="py-4 px-6 flex justify-between items-center bg-dark">
        <Link>
          
          <img
            src="./Remove background project.png"
            alt="Logo"
            className="h-32 w-auto object-contain" 
          />
        </Link>
        <Button variant="outline" className="hover:bg-blue-600 hover:text-white text-lg px-6 py-2">
          Login
        </Button>
        {/* <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn> */}
      </nav>
    </>
  );
};

export default Header;
