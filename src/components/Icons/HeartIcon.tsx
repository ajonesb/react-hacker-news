import React, { FC } from "react";

interface ClockIconProps {
  width?: number;
  height?: number;
  color?: string;
}

const HeartIcon: FC<ClockIconProps> = ({
  width = 24,
  height = 22,
  color = "#DD0031",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 22"
  >
    <path
      fill={color}
      d="M12 8.229C12.234 7.109 13.547 2 17.382 2 19.602 2 22 3.551 22 7.003c0 3.907-3.627 8.47-10 12.629C5.627 15.473 2 10.91 2 7.003c0-3.484 2.369-5.005 4.577-5.005 3.923 0 5.145 5.126 5.423 6.231zM0 7.003C0 11.071 3.06 16.484 12 22c8.94-5.516 12-10.929 12-14.997 0-7.962-9.648-9.028-12-3.737C9.662-1.996 0-1.004 0 7.003z"
    />
  </svg>
);

export default HeartIcon;
