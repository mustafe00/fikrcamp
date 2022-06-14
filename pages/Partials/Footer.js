import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="border-t border-lightGray">
      <div className="container ">
        <div className="py-2">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-sm col-span-2">
              ©2021 FikrCamp. All rights reserved.
            </div>
            <div className="flex justify-end items-center text-primary">
              <div className="mr-3">
                <a
                  href="https://www.facebook.com/fikrcamp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsFacebook />
                </a>
              </div>
              <div className="mr-3">
                <a
                  href="https://twitter.com/fikrcamp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsTwitter />
                </a>
              </div>
              <div className="mr-3">
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
      </div>
    </div>
  );
}
