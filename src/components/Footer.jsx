import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "#" },
  { name: "About Us", path: "#" },
  { name: "Contact", path: "#" },
];

const supportLinks = [
  "FAQ",
  "Returns",
  "Shipping",
  "Terms & Conditions",
];

const socialIcons = [
  { icon: <FacebookIcon />, link: "#" },
  { icon: <TwitterIcon />, link: "#" },
  { icon: <InstagramIcon />, link: "#" },
  { icon: <LinkedInIcon />, link: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 mt-3 text-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-3">ShoesHub</h2>
          <p className="text-gray-400 text-sm">
            Premium sneakers & footwear designed for comfort and style.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            {quickLinks.map(link => (
              <li key={link.name}>
                <a href={link.path} className="hover:text-white">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Customer Care</h3>
          <ul className="space-y-2 text-gray-400">
            {supportLinks.map(item => (
              <li key={item} className="hover:text-white cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-gray-400">
            {socialIcons.map((social, index) => (
              <a
                key={index}
                href={social.link}
                className="hover:text-white transition"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

      </div>

      <div className="border-t border-gray-800 mt-8 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} ShoesHub. All rights reserved.
      </div>
    </footer>
  );
}
