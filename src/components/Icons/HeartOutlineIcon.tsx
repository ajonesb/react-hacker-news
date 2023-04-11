import React, { FC } from "react";

interface HeartOutlineIconProps {
  width?: number;
  height?: number;
  color?: string;
}

const HeartOutlineIcon: FC<HeartOutlineIconProps> = ({
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
      d="M12 3.248C8.852-2.154 0-.577 0 6.192 0 10.853 5.571 15.619 12 22c6.43-6.381 12-11.147 12-15.808C24-.6 15.125-2.114 12 3.248z"
    />
  </svg>
);

export default HeartOutlineIcon;
