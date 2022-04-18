import { Component } from "solid-js";

export let LogoIcon: Component = () => (
  <svg width="33" height="33" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#logo_svg__a)" fill-rule="evenodd" clip-rule="evenodd">
      <path
        d="m5.378 16.98 7.372-7.55a5.096 5.096 0 0 1 7.292 0l.08.082a5.226 5.226 0 0 1 0 7.303l-7.372 7.55a5.096 5.096 0 0 1-7.292 0l-.08-.083a5.226 5.226 0 0 1 0-7.302Z"
        fill="#12D2AC"
      ></path>
      <path
        d="m20.048 9.43 7.292 7.467a5.344 5.344 0 0 1 0 7.467 5.096 5.096 0 0 1-7.292 0l-7.292-7.467a5.344 5.344 0 0 1 0-7.467 5.096 5.096 0 0 1 7.292 0Z"
        fill="#307AF2"
      ></path>
      <path
        d="m20.132 9.522 3.553 3.638-7.292 7.467-7.292-7.467 3.553-3.638a5.226 5.226 0 0 1 7.478 0Z"
        fill="#0057FE"
      ></path>
    </g>
    <defs>
      <clipPath id="logo_svg__a">
        <path fill="#fff" transform="translate(3.5 7)" d="M0 0h26v19H0z"></path>
      </clipPath>
    </defs>
  </svg>
);
