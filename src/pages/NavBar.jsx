import "./NavBar.css";
function NavBar() {
  return (
    <>
      <nav className="NavBar">
        <a href="/" className="Home">
          Cars
        </a>
        <ul>
          <li className="active">
            <a href="Design">Design</a>
          </li>
          <li className="active">
            <a href="Investors">Investors</a>
          </li>
          <li className="active">
            <a href="Vehicles">Vehicles</a>
          </li>
          <li className="active">
            <a href="About">About</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
