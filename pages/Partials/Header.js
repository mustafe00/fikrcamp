import { AiOutlineMenu } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import Link from "next/link";
import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);
  function Main() {
    return (
      <div className="hidden md:flex container items-center justify-between">
        <div>
          <Link href="/">
            <img src="/fikr.png" alt="logo" className="w-40 cursor-pointer" />
          </Link>
        </div>
        <div>
          <ul className="flex space-x-6 items-center ">
            <Link href="/courses">
              <li className="cursor-pointer hover:text-primary text-[14px]">
                Courses
              </li>
            </Link>
            <Link href="/stories">
              <li className="cursor-pointer hover:text-primary text-[14px]">
                Success Stories
              </li>
            </Link>
            <Link href="/webinars">
              <li className="cursor-pointer hover:text-primary text-[14px]">
                Free webinars
              </li>
            </Link>
            <li>
              <a href="https://forms.gle/jUoFSkkdDcUga3GB8">
                <button className=" bg-primary text-white px-3 py-2 rounded text-sm">
                  Apply Now
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  function Mobile() {
    return (
      <div className="md:hidden container flex items-center justify-between ">
        <div>
          <Link href="/">
            <img src="/fikr.png" alt="logo" className="w-40" />
          </Link>
        </div>
        {open == false && (
          <AiOutlineMenu
            className="hover:cursor-pointer"
            size={30}
            onClick={() => setOpen(true)}
          />
        )}
      </div>
    );
  }
  return (
    <>
      <div className="bg-primary text-white font-semibold py-1">
        <center>New intake coming soon...💪🏾</center>
      </div>
      <div className="py-3 shadow-md bg-white">
        <Mobile />
        <Main />
        {open == true && (
          <div className="md:hidden w-52 fixed right-0 top-0 bg-white h-screen">
            <div className="flex items-center justify-end mr-5 h-[76px] ">
              <div>
                <MdClose
                  className="hover:cursor-pointer"
                  size={30}
                  onClick={() => setOpen(false)}
                />
              </div>
            </div>
            <div className="p-5 ">
              <Link href="/courses">
                <p className="my-1.5 cursor-pointer hover:text-primary text-[17px] font-semibold">
                  Courses
                </p>
              </Link>
              {/* <div className="flex justify-center my-1">
              <div className="border-b-2 border-gray w-24"></div>
            </div> */}
              <Link href="/stories">
                <p className="my-1.5 cursor-pointer hover:text-primary text-[17px] font-semibold">
                  Success Stories
                </p>
              </Link>
              {/* <div className="flex justify-center my-1">
              <div className="border-b-2 border-gray w-24"></div>
            </div> */}
              <Link href="/webinars">
                <p className="my-1.5 cursor-pointer hover:text-primary text-[17px] font-semibold">
                  Free webinars
                </p>
              </Link>
              {/* <div className="flex justify-center my-1">
              <div className="border-b-2 border-gray w-24"></div>
            </div> */}
              <a
                href="https://forms.gle/jUoFSkkdDcUga3GB8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className=" bg-primary text-white px-3 py-2 rounded text-sm">
                  Apply Now
                </button>
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
