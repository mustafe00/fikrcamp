import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";

function Header() {
  return (
    <div className="py-3 shadow-md bg-white">
      <div className="md:hidden container flex items-center justify-between ">
        <div>
          <Link href="/">
            <img src="/fikr.png" alt="logo" className="w-40" />
          </Link>
        </div>
        <AiOutlineMenu size={30} />
      </div>
      <div className="hidden md:flex container items-center justify-between">
        <div>
          <Link href="/">
            <img src="/fikr.png" alt="logo" className="w-40 cursor-pointer" />
          </Link>
        </div>
        <div>
          <ul className="flex space-x-3 items-center ">
            {/* <Link href="/courses">
              <li className="cursor-pointer hover:text-primary">Courses</li>
            </Link> */}
            <Link href="/stories">
              <li className="cursor-pointer hover:text-primary">
                Success Stories
              </li>
            </Link>
            <li className="cursor-pointer hover:text-primary">Free webinars</li>
            <li>
              <button className=" bg-primary text-white px-3 py-2 rounded text-sm">
                Apply Now
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    // <div className="container">
    //   <div className="hidden md:flex justify-between py-5 items-center ">
    //     <div className="relative ">
    //       <img src="/fikr.png" alt="logo" className="w-48 " />
    //     </div>

    //     <div className="flex items-center space-x-10">
    //       <ul className="flex space-x-3 ">
    //         <li className="cursor-pointer hover:text-primary">Home</li>
    //         <li className="cursor-pointer hover:text-primary">Courses</li>
    //         <li className="cursor-pointer hover:text-primary">Blog</li>
    //         <li className="cursor-pointer hover:text-primary">
    //           Success Stories
    //         </li>
    //         <li className="cursor-pointer hover:text-primary">About Us</li>
    //       </ul>
    //       <a
    //         href="https://forms.gle/skRGAUqSGkq3bc1X7"
    //         target="_blank"
    //         rel="noreferrer"
    //       >
    //         <button className=" bg-primary text-white px-8 py-3 rounded font-bold">
    //           Apply Now
    //         </button>
    //       </a>
    //     </div>
    //   </div>
    //   <div className="flex justify-between py-5 items-center md:hidden">
    //     <div className="relative ">
    //       <img src="/fikr.png" alt="logo" className="w-48 " />
    //     </div>
    //     <button className=" bg-primary text-white px-8 py-3 rounded font-bold">
    //       Apply Now
    //     </button>
    //   </div>
    // </div>
  );
}

export default Header;
