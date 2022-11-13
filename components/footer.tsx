import Image from "next/image";
import github_icon from "../public/github_light.png";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center border-t-2 p-3">
      <h2 className="text-center py-3">2022 Url shortener by Konzti</h2>
      <a href="https://github.com/Konzti" target="_blank" className="hover:text-primary">
        <div className="flex items-center justify-center gap-3 pb-3">
          <div className="w-7">
            <Image src={github_icon} alt="github" />
          </div>
          <p>github.com/Konzti</p>
        </div>
      </a>
    </div>
  );
};

export default Footer;
