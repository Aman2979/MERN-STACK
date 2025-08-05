import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import ProjectSection from "./components/ProjectSection";
import SkillSection from "./components/SkillSection";
import EducationSection from "./components/EducationSection";
import "./index.css";
import Hobbies from "./components/Hobbies";
import Extracurricular from "./components/Extracurricular";
import Contact from "./components/Contact";
function App() {
  return (
    <>
      <div className="bg-slate-100 px-3 py-8">
        <div className="bg-white max-w-3xl mx-auto rounded shadow-lg">
          <Header />
          <AboutMe />
          <ProjectSection />
          <SkillSection />
          <EducationSection />
          <Hobbies />
          {/* <Extracurricular /> */}
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
