import Link from "next/link";
import {
  faFacebookf,
  FaTwitter,
  FaLinkedin,
  FaFacebookF,
} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const socials = [
  {
    icon: <RiInstagramFill />,
    path: "https://www.instagram.com/abuhosain25",
  },
  {
    icon: <FaFacebookF />,
    path: "https://web.facebook.com/abuhosain25",
  },
  {
    icon: <FaTwitter />,
    path: "https://x.com/Hosain2079912?t=C7hcUi9BTuJaKyCZQrT9ZA",
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
