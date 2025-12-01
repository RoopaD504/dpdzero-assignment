
import FooterSection from "./FooterSection";
import FooterIcon from "./FooterIcon";
import { footerData } from "../../constants/footerConstants";


const Footer = () => {
const { contact, sections, socialIcons, footerBottom } = footerData;

return (


<footer className="bg-primaryGreen h-auto text-white py-4 px-6 md:px-20 mt-10">

<div className="flex justify-between items-center  border-b mb-2 border-gray-500">
      <div className="">
         <img
            src="https://karnatakatourism.org/_next/static/media/logo.572b10f4.svg" 
            alt="Logo"
            className="h-10 mb-4"
          />
    </div>
    <div className="flex justify-center ">
        {socialIcons.map((icon, idx) => (
        <FooterIcon key={idx} name={icon.name} url={icon.url} />
        ))}
    </div>
</div>


<div className="grid grid-cols-1 md:grid-cols-5 gap-10">
<div>
<h3 className="font-semibold mb-4">{contact.title}</h3>
<p className="text-sm text-gray-300">{contact.address.join(" ")}</p>
<p className="mt-3">📞 {contact.phone}</p>
<p className="text-sm text-gray-300">{contact.email}</p>
</div>




{sections.map((sec, idx) => (
<FooterSection key={idx} title={sec.title} links={sec.links} />
))}
</div>





<div className="border-t border-gray-500 mt-8 pt-6 flex flex-wrap gap-4 text-sm text-gray-300 justify-center">
{footerBottom.map((item, idx) => (
<a key={idx} href={item.url} className="hover:underline">
{item.label}
</a>
))}
</div>


<p className="text-center mt-6 text-gray-400 text-sm">Copyright &copy; 2025</p>
</footer>
);
};
export default Footer;