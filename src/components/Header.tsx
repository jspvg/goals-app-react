import { type ReactNode } from "react";

interface HeaderProps {
  image: {
    src: string;
    alt: string;
  };
  children: ReactNode;
}

const Header = ({ image: { src, alt }, children }: HeaderProps) => {
  return (
    <div>
      <img src={src} alt={alt} />
      {children}
    </div>
  );
};

export default Header;
