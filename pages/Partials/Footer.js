import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="border-t border-lightGray bg-white">
      <div className="container ">
        <div className="py-5">
          <div className="grid grid-cols-3 gap-4 items-center">
            <div className="text-sm col-span-2">
              <img src="/fikr.png" alt="logo" className="w-40" />
              {/* ©2021 FikrCamp. All rights reserved. */}
            </div>
            <div className="flex justify-end items-center text-primary">
              <div className="mr-2 text-xs font-semibold text-gray">
                Follow us on:
              </div>
              <div className="mr-1.5 bg-background p-2 rounded-md">
                <a
                  href="https://www.facebook.com/fikrcamp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsFacebook />
                </a>
              </div>
              <div className="mr-1.5 bg-background p-2 rounded-md">
                <a
                  href="https://twitter.com/fikrcamp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsTwitter />
                </a>
              </div>
              <div className="mr-1.5 bg-background p-2 rounded-md">
                <a
                  href="https://www.instagram.com/fikrcamp/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-lightGray"></div>
        <div className="text-sm text-center py-2 ">
          ©2021 FikrCamp. All rights reserved.
        </div>
      </div>
    </div>
  );
}
