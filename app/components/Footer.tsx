import { FooterLinks } from "../constants/StaticData";
const Footer = () => {
  return (
    <footer id="footer" className="bg-[#f1f6f4] py-10">
      <div className="max-w-[1070px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-12">
          {FooterLinks.map((section, i) => (
            <div key={i}>
              <h4 className="font-semibold text-lg mb-4">{section.title}</h4>
              <ul className="space-y-3 text-[#394547] text-sm">
                {section.links.map((link, j) => (
                  <li
                    key={j}
                    className={`${
                      link.disabled
                        ? "cursor-not-allowed text-[#394547]"
                        : "cursor-pointer hover:text-green-600"
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center text-[#032b41] font-medium">
          © {new Date().getFullYear()} Summarist.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
