import Link from "next/link";
import {
  FaLinkedin,
  FaFacebookF,
  FaGithub,
} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/abuhosain",
  },
  {
    icon: <FaFacebookF />,
    path: "https://web.facebook.com/abuhosain25",
  },
  {
    icon: <RiInstagramFill />,
    path: "https://www.instagram.com/abuhosain25",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/abuhosain25",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link href={item.path} key={index} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
