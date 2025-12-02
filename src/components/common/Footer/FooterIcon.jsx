import { FaInstagram, FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";

const icons = {
  instagram: FaInstagram,
  twitter: FaTwitter,
  youtube: FaYoutube,
  facebook: FaFacebook,
};

const FooterIcon = ({ name, url }) => {
  const IconComponent = icons[name];

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white text-3xl sm:text-2xl p-2 rounded-full hover:bg-white/20 transition"
    >
      <IconComponent />
    </a>
  );
};

export default FooterIcon;
