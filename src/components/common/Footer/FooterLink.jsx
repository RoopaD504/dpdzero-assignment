const FooterLink = ({ label, url }) => (
<li className="mb-1 hover:underline text-sm cursor-pointer text-gray-300">
<a href={url}>{label}</a>
</li>
);
export default FooterLink;