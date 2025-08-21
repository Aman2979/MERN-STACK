import { FaYoutube } from "react-icons/fa";
const ALLIcons = () => {
  return (
    <div className="iconsContainer flex justify-center items-center py-4 bg-white">
      <ul className="allIconsContainer flex flex-wrap gap-4 items-center bg-white rounded-lg shadow-md px-6 py-3">
        <li className="followTmu font-semibold text-gray-700 text-lg mr-4">Follow TMU@</li>
        <li>
          <a
            href="https://www.youtube.com/@TeerthankerMahaveerUniversity"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <img
              src="https://portal2.tmu.ac.in/images/Youtube_logo.png"
              alt="youtube"
              className="icons w-8 h-8 rounded-full shadow hover:ring-2 hover:ring-red-500"
            />
          </a>
        </li>

        <li>
          <a
            href="https://www.facebook.com/tmumbd/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <img
              src="https://portal2.tmu.ac.in/images/fb%20logo.jpg"
              alt="facebook"
              className="icons w-8 h-8 rounded-full shadow hover:ring-2 hover:ring-blue-600"
            />
          </a>
        </li>

        <li>
          <a
            href="https://www.instagram.com/tmu_mbd/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <img
              src="https://portal2.tmu.ac.in/images/Instagram_logo.png"
              alt="Instagram"
              className="icons w-8 h-8 rounded-full shadow hover:ring-2 hover:ring-pink-500"
            />
          </a>
        </li>

        <li>
          <a
            href="https://x.com/Tmumbd"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <img
              src="https://portal2.tmu.ac.in/images/x.png"
              alt="X"
              className="icons w-8 h-8 rounded-full shadow hover:ring-2 hover:ring-gray-800"
            />
          </a>
        </li>

        <li>
          <a
            href="https://in.pinterest.com/tmumbd/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <img
              src="https://portal2.tmu.ac.in/images/Pinterest-logo.png"
              alt="pinterest"
              className="icons w-8 h-8 rounded-full shadow hover:ring-2 hover:ring-red-600"
            />
          </a>
        </li>

        <li>
          <a
            href="https://www.quora.com/profile/Teerthanker-Mahaveer-University-2"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <img
              src="https://portal2.tmu.ac.in/images/quora%20logo.png"
              alt="quora"
              className="icons w-8 h-8 rounded-full shadow hover:ring-2 hover:ring-red-700"
            />
          </a>
        </li>

        <li>
          <a
            href="https://www.threads.com/@tmu_mbd"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <img
              src="https://portal2.tmu.ac.in/images/threads%20logo.png"
              alt="threads"
              className="icons w-8 h-8 rounded-full shadow hover:ring-2 hover:ring-black"
            />
          </a>
        </li>

        <li>
          <a
            href="https://www.whatsapp.com/channel/0029Va5aFcvIyPtT9FN1AW2W"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <img
              src="https://portal2.tmu.ac.in/images/WhatsApp%20logo.png"
              alt="whatsapp"
              className="icons w-8 h-8 rounded-full shadow hover:ring-2 hover:ring-green-500"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ALLIcons;
