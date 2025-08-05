import { TbWorld  } from "react-icons/tb";
import Social from "./SocialApp";

const Contact = () => {
  return (
    <div className="m-2">
      <div className="flex mt-4">
        <span>
          <TbWorld className="size-8" />
        </span>
        <h1 className="font-bold text-xl ml-2">Contact & Social Meadia</h1>
      </div>

      <div className="w-auto p-2  rounded ml-3">
        <ol className="ml-4">
          <li className="font-bold">Email: ak93896897@gmail.com</li>
          <li className="font-bold">Phone: 8218018689</li>
          <Social />
        </ol>
      </div>
    </div>
  );
};

export default Contact;
