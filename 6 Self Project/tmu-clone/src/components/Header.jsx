const Header = () => {
  return (
    <>
      <div className="conatiner">
        <ul className="header-list">
          <li>
            <img
              src="https://th.bing.com/th/id/R.25d8dc827e3b50b1f790bfc1b5bc4f58?rik=lPiR0xM1v7MyzQ&riu=http%3a%2f%2fportal3.tmu.ac.in%2fimages%2ft.jpg&ehk=XVJ6uiVicbugtOcgT9OdGHD0mgJQLDQiLRRMiMtXyHw%3d&risl=&pid=ImgRaw&r=0"
              className="tmuzone"
              alt="tum-zone"
            />
          </li>

          <li>
            <h1 className="heading">TEERTHANKER MAHAVEER UNIVERSITY</h1>
            <p className="text-para">
              {" "}
              An Ultimate Destination For World Class Education
            </p>
          </li>
          <li>
            <img
              src="https://portal2.tmu.ac.in/images/rightlogo.png"
              alt="mainlogo"
              className="mainLogo"
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
