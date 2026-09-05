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
  const isSignedIn = true;
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
          {isSignedIn ? (
            <>
              <button className="bg-pink-500 px-4 py-1  rounded-md ">
                <Link className="flex items-center gap-2" href="/submit">
                  <SparkleIcon /> <span>Submit Project</span>
                </Link>
              </button>
              {/*Clerk user */}
              <button>
                <UserIcon size={12} />
              </button>
            </>
          ) : (
            <>
              {" "}
              <button className="bg-pink-500 px-4 py-1 rounded-md cursor-pointer">
                Sign In
              </button>
              <button className="bg-pink-500 px-4 py-1 rounded-md cursor-pointer">
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
