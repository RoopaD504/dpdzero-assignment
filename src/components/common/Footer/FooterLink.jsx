const FooterLink = ({ label, url }) => (
  <li className="mb-2 sm:mb-1">
    <a
      href={url}
      className="block text-base sm:text-sm text-gray-300 hover:text-white hover:underline py-1"
    >
      {label}
    </a>
  </li>
);

export default FooterLink;
