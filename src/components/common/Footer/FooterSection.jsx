import FooterLink from "./FooterLink";

const FooterSection = ({ title, links }) => {
  return (
    <div className="w-full sm:w-auto">
      <h3 className="text-white font-semibold mb-3 text-lg sm:text-base">
        {title}
      </h3>

      <ul className="space-y-2 sm:space-y-1">
        {links.map((link, idx) => (
          <FooterLink key={idx} label={link.label} url={link.url} />
        ))}
      </ul>
    </div>
  );
};

export default FooterSection;
