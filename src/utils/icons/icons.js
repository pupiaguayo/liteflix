import React from "react";

const NotificationBellIcon = () => {
  return (
    <>
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_1_391)">
          <path
            d="M20.8 8.66661C20.8 6.69643 19.9783 4.80694 18.5155 3.41382C17.0527 2.02069 15.0687 1.23804 13 1.23804C10.9314 1.23804 8.9474 2.02069 7.48462 3.41382C6.02183 4.80694 5.20005 6.69643 5.20005 8.66661C5.20005 17.3333 1.30005 19.8095 1.30005 19.8095H24.7C24.7 19.8095 20.8 17.3333 20.8 8.66661Z"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.249 23.5238C15.0204 23.899 14.6924 24.2105 14.2977 24.427C13.903 24.6435 13.4555 24.7575 13 24.7575C12.5445 24.7575 12.097 24.6435 11.7023 24.427C11.3076 24.2105 10.9795 23.899 10.751 23.5238"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <circle cx="20.5" cy="5.5" r="4.5" fill="#64EEBC" />
        <defs>
          <clipPath id="clip0_1_391">
            <rect width="26" height="26" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};
const MenuDesktopIcon = () => {
  return (
    <>
      <svg
        width="27"
        height="14"
        viewBox="0 0 27 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 1H27" stroke="white" />
        <path d="M0 7H27" stroke="white" />
        <path d="M10 13H27" stroke="white" />
      </svg>
    </>
  );
};

const MenuMobileIcon = () => {
  return (
    <>
      <svg
        width="27"
        height="14"
        viewBox="0 0 27 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 1H27" stroke="white" />
        <path d="M0 7H27" stroke="white" />
        <path d="M0 13H17" stroke="white" />
      </svg>
    </>
  );
};
const PlusIcon = () => {
  return (
    <>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7 0V14" stroke="white" />
        <path d="M14 7L-5.96046e-08 7" stroke="white" />
      </svg>
    </>
  );
};
const PlayIcon = () => {
  return (
    <>
      <svg
        width="14"
        height="16"
        viewBox="0 0 14 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.9423 8.2363L2.625 1.875V14.125L11.9423 8.2363Z"
          stroke="white"
        />
      </svg>
    </>
  );
};

const CloseIcon = () => {
  return (
    <>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.5147 1.51472L18.4853 18.4853"
          stroke="white"
          stroke-linecap="square"
        />
        <path
          d="M1.5147 18.4853L18.4853 1.51472"
          stroke="white"
          stroke-linecap="square"
        />
      </svg>
    </>
  );
};
const PlayMovieIcon = () => {
  return (
    <>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="20"
          cy="20"
          r="19.5"
          fill="#242424"
          fill-opacity="0.5"
          stroke="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M26.6484 20.2701L16 13V27L26.6484 20.2701Z"
          stroke="white"
        />
      </svg>
    </>
  );
};

const ProfileIcon = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="36"
        height="36"
        fill="none"
        viewBox="0 0 36 36"
      >
        <mask
          id="mask0_1_423"
          style={{ maskType: "alpha" }}
          width="36"
          height="36"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
        >
          <circle cx="18" cy="18" r="18" fill="#003BFF"></circle>
        </mask>
        <g mask="url(#mask0_1_423)">
          <path fill="url(#pattern0)" d="M-1 -4H41V61H-1z"></path>
        </g>
        <defs>
          <pattern
            id="pattern0"
            width="1"
            height="1"
            patternContentUnits="objectBoundingBox"
          >
            <use
              transform="matrix(.00207 0 0 .00134 -.017 0)"
              xlinkHref="#image0_1_423"
            ></use>
          </pattern>
          <image
            id="image0_1_423"
            width="450"
            height="480"
            xlinkHref="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_TwhejcB_QAKNx7TGviTcx0BPMINC33WFlCHMUKGFWA9CTmtE_dX3Ty5_FW04ueIcpBQ&usqp=CAU"
          ></image>
        </defs>
      </svg>
    </>
  );
};

export {
  NotificationBellIcon,
  MenuDesktopIcon,
  PlusIcon,
  PlayIcon,
  PlayMovieIcon,
  MenuMobileIcon,
  ProfileIcon,
  CloseIcon,
};
