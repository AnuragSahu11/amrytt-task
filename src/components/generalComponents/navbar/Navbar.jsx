import React from "react";

export const Navbar = () => {
  return (
    <div className="h-[40px] mb-6 flex">
      <div className="w-[708px]">
        <div className="relative mb-6">
          <div className="absolute inset-y-0 start-0 flex items-center ps-2.5 pointer-events-none">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.7801 19.7203L16.3033 15.2436C17.5233 13.7515 18.1231 11.8476 17.9787 9.92574C17.8343 8.00384 16.9567 6.21097 15.5275 4.91796C14.0983 3.62495 12.2268 2.93074 10.3001 2.97891C8.37336 3.02709 6.53886 3.81396 5.17605 5.17678C3.81323 6.5396 3.02635 8.37409 2.97818 10.3008C2.93001 12.2275 3.62422 14.099 4.91723 15.5283C6.21023 16.9575 8.00311 17.8351 9.92501 17.9795C11.8469 18.1239 13.7508 17.524 15.2428 16.3041L19.7196 20.7808C19.861 20.9174 20.0505 20.993 20.2471 20.9913C20.4438 20.9896 20.6319 20.9107 20.771 20.7717C20.91 20.6326 20.9889 20.4445 20.9906 20.2479C20.9923 20.0512 20.9167 19.8618 20.7801 19.7203ZM10.4998 16.5006C9.31315 16.5006 8.15311 16.1487 7.16642 15.4894C6.17972 14.8301 5.41069 13.893 4.95656 12.7967C4.50243 11.7003 4.38361 10.4939 4.61512 9.33003C4.84664 8.16614 5.41808 7.09704 6.2572 6.25793C7.09631 5.41881 8.16541 4.84737 9.3293 4.61586C10.4932 4.38435 11.6996 4.50317 12.7959 4.95729C13.8923 5.41142 14.8294 6.18045 15.4887 7.16715C16.1479 8.15384 16.4998 9.31388 16.4998 10.5006C16.4981 12.0913 15.8653 13.6164 14.7405 14.7412C13.6157 15.8661 12.0906 16.4988 10.4998 16.5006Z"
                fill="#4A4C56"
              />
            </svg>
          </div>
          <input
            type="text"
            id="input-group-1"
            className="text-gray-900 font-medium text-sm bg-transparent block w-full ps-10 p-2.5"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="w-[208px] h-[40px] flex gap-4">
        <img
          className="w-[40px] h-[40px]"
          src="https://res.cloudinary.com/dym0xfe7y/image/upload/v1734800160/Icon_Img_Menu.svg"
        />
        <img
          className="w-[40px] h-[40px]"
          src="https://res.cloudinary.com/dym0xfe7y/image/upload/v1734800160/Icon_Img_Menu_1.svg"
        />
        <img
          className="w-[40px] h-[40px]"
          src="https://res.cloudinary.com/dym0xfe7y/image/upload/v1734800160/Icon_Img_Menu_2.svg"
        />
        <img
          className="w-[40px] h-[40px]"
          src="https://res.cloudinary.com/dym0xfe7y/image/upload/v1734800160/Icon_Img_Menu_3.svg"
        />
      </div>
    </div>
  );
};
