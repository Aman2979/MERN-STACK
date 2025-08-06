import { CgProfile } from "react-icons/cg";
const AboutMe = () => {
  return (
    <div>
      <div className="flex m-3">
        <CgProfile className="size-8" />
        <span className="ml-2  font-bold text-xl">About Me</span>
      </div>
      <p className="m-3">I’m a passionate Full Stack Developer who loves building seamless, user‑friendly web applications from front end to back end.</p>
    </div>
  );
};

export default AboutMe;
