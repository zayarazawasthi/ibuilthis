import {
  Show,
  SignIn,
  SignInButton,
  SignUp,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { CompassIcon, HomeIcon, SparkleIcon, UserIcon } from "lucide-react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="size-8 rounded-lg flex justify-center items-center">
        <SparkleIcon className="size-4 " />
      </div>
      <span className="text-xl font-bold">
        i<span className="text-pink-500">Built</span>This
      </span>
    </Link>
  );
};

export default function Header() {
  const isSignedIn = false;
  return (
    <header className="sticky top-0 z-50 border-b bg-pink-200 backdrop-blur supports-backdrop-filter:bg-pink-300/60:">
      <div className="flex h-16 items-center justify-between">
        <Logo />
        <nav className="flex items-center gap-1">
          <Link
            href="/"
            className="flex items-center gap-2 px-3 py-2 text-sm font-medium"
          >
            <HomeIcon className="size=4" /> <span>Home</span>
          </Link>
          <Link
            href="/explore"
            className="flex items-center gap-2 px-3 py-2 text-sm font-medium"
          >
            <CompassIcon className="size-4" /> <span>Explore</span>
          </Link>
        </nav>
        <div className="flex items-center gap-3 p-4 ">
          <Show when="signed-out">
            <SignInButton  className="bg-pink-500 text-white rounded-md px-4 font-normal text-sm py-1.5 cursor-pointer  hover:bg-pink-800"/>
            <SignUpButton>
              <button className="bg-pink-500 text-white rounded-md px-4 font-normal text-sm py-1.5 cursor-pointer hover:bg-pink-800">
                Sign Up
              </button>
            </SignUpButton>
          </Show>
          <Show when="signed-in">
            <button className="bg-pink-500 px-4 py-1  rounded-md ">
              <Link className="flex items-center gap-2" href="/submit">
                <SparkleIcon /> <span>Submit Project</span>
              </Link>
            </button>
            
            <UserButton />
          </Show>
        </div>
      </div>
    </header>
  );
}
