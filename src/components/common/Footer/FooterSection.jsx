import FooterLink from "./FooterLink";
const FooterSection = (props) =>{
    const {title, links} = props;
    return(
        <div>
        <h3 className="text-white font-semibold mb-4">{title}</h3> 
        <ul>
            {links.map((link, idx) => (
            <FooterLink key={idx} label={link.label} url={link.url} />
            ))}
        </ul>
        </div>
    );
}
export default FooterSection;