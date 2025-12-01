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
<a href={url} className="text-white text-2xl mx-2 hover:opacity-80">
<IconComponent />
</a>
);
};
export default FooterIcon;