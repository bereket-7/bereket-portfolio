import Link from 'next/link';
import  { FaGithub, FaLinkedin, FaTwitter, Fafacebook } from 'react-icons/fa';
const socials = [
    { icon: <FaGithub />, path: "" },
    { icon: <Fafacebook />, path: "" },
    { icon: <FaLinkedin />, path: "" },
    { icon: <FaTwitter />, path: ""},
  ];
const Social = ({containerStyles, iconsStyles}) => {
  return (
    <div className={containerStyles}>
    {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconsStyles}>
            {item.icon}
          </Link>
        );
        })}
    </div>
    );
};
export default Social;