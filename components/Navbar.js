import Image from "next/image";
import Link from "next/link";
import iconLogo from "../public/assets/logo.svg";
import { useSession, signIn, signOut } from "next-auth/react";

import saved from "../public/assets/icon-nav-bookmark.svg";
import home from "../public/assets/icon-nav-home.svg";
import movies from "../public/assets/icon-nav-movies.svg";
import series from "../public/assets/icon-nav-tv-series.svg";

const Navbar = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <nav className="grid grid-cols-1 lg:grid-cols-9  lg:p-8 ">
        <div className="p-5 lg:rounded-2xl dark:bg-gray-900 grid grid-cols-3   lg:grid-cols-1 ">
          <a className="  justify-self-center lg:pb-20 ">
            <Image
              src={iconLogo.src}
              width={iconLogo.width}
              height={iconLogo.height}
            />
          </a>

          <div className="justify-self-center lg:pb-20 ">
            <ul className="grid grid-cols-4  gap-5  lg:grid-cols-1   ">
              <Link href="/">
                <a className="  text-white ">
                  <Image
                    src={home.src}
                    width={home.width}
                    height={home.height}
                  />
                </a>
              </Link>

              <Link href="/moves">
                <a href="#" className=" text-white ">
                  <Image
                    src={movies.src}
                    width={movies.width}
                    height={movies.height}
                  />
                </a>
              </Link>

              <Link href="/series">
                <a href="#" className=" text-white">
                  <Image
                    src={series.src}
                    width={series.width}
                    height={series.height}
                  />
                </a>
              </Link>

              <Link href="/saved">
                <a href="#" className="  text-white">
                  <Image
                    src={saved.src}
                    width={saved.width}
                    height={saved.height}
                  />
                </a>
              </Link>
            </ul>
          </div>

          <div className=" pl-20 lg:pb-5 lg:pt-20 lg:pl-0 justify-self-center ">
            <Link href="/api/auth/signout">
              <img
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
                className="w-8 h-8 rounded-full"
                src="https://source.unsplash.com/random"
                alt="user photo"
              />
            </Link>
          </div>
        </div>
        <div className=" invisible lg:visible text-white lg:p-20 lg:ml-20 ">
          <div className="text-white font-bold text-8xl lg:p-20 lg:ml-20 ">
            Movie_App
          </div>
        </div>
      </nav>
    );
  }
  return (
    <>
      <nav className="grid grid-cols-1 lg:grid-cols-9  lg:p-8 ">
        <div className="p-5 lg:rounded-2xl dark:bg-gray-900 grid grid-cols-3   lg:grid-cols-1 ">
          <a className="  justify-self-center lg:pb-20 ">
            <Image
              src={iconLogo.src}
              width={iconLogo.width}
              height={iconLogo.height}
            />
          </a>

          <div className="justify-self-center lg:pb-20 ">
            <ul className="grid grid-cols-4  gap-5  lg:grid-cols-1   ">
              <Link href="/">
                <a className="  text-white ">
                  <Image
                    src={home.src}
                    width={home.width}
                    height={home.height}
                  />
                </a>
              </Link>

              <Link href="/moves">
                <a href="#" className=" text-white ">
                  <Image
                    src={movies.src}
                    width={movies.width}
                    height={movies.height}
                  />
                </a>
              </Link>

              <Link href="/series">
                <a href="#" className=" text-white">
                  <Image
                    src={series.src}
                    width={series.width}
                    height={series.height}
                  />
                </a>
              </Link>

              <Link href="/saved">
                <a href="#" className="  text-white">
                  <Image
                    src={saved.src}
                    width={saved.width}
                    height={saved.height}
                  />
                </a>
              </Link>
            </ul>
          </div>

          <div className=" pl-20 lg:pb-5 lg:pt-20 lg:pl-0 justify-self-center ">
            <Link href="api/auth/signin">
              <a
                className="w-16 h-8 rounded-full text-white"
                onClick={(e) => {
                  e.preventDefault();
                  signIn("github");
                }}
              >
                Sign In
              </a>
            </Link>
          </div>
        </div>
        <div className=" invisible lg:visible text-white lg:p-20 lg:ml-20 ">
          <div className="text-white font-bold text-8xl lg:p-20 lg:ml-20 ">
            Movie_App
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
