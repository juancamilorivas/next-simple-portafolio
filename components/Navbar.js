import Link from "next/link";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
    <div className="container">
     <Link href="/" legacyBehavior>
     <a className="navbar-brand" >
        Start
      </a>
     </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
          </li>
          <li className="nav-item">
            <Link href="https://github.com/juancamilorivas" legacyBehavior>
              <a className="nav-link" >
                GitHub
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
