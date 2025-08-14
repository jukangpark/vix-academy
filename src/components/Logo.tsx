import Image from "next/image";
import favicon from "../favicon.ico";

interface LogoProps {
  width?: number;
  height?: number;
}

const Logo = ({ width = 100, height = 100 }: LogoProps) => {
  return (
    <Image src={favicon} alt="VIX Academy Logo" width={width} height={height} />
  );
};

export default Logo;
