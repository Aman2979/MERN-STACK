import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";


const Social = () => {
  return (
    <div>
      <div className="flex mt-1">
        <span>
          <IoLogoLinkedin className="size-5 mr-2" />
        </span>
        <h1 className="font-bold text-blue-500">
          <a
            href="https://www.linkedin.com/in/aman-kumar-45ba322b4/"
            target="_blank"
          >
            Linkedin
          </a>
        </h1>
      </div>

      <div className="flex mt-1">
        <span>
          <FaGithub className="size-5 mr-2" />
        </span>
        <h1 className="font-bold text-blue-500">
          <a href="https://github.com/Aman2979/" target="_blank">
            Github
          </a>
        </h1>
      </div>

      <div className="flex mt-1">
        <span>
          <FaTwitterSquare  className="size-5 mr-2" />
        </span>
        <h1 className="font-bold text-blue-500">
          <a href="https://x.com/_amanraj_143_/articles" target="_blank">
            Twitter
          </a>
        </h1>
      </div>
    </div>
  );
};

export default Social;
