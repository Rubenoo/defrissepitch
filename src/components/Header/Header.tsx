import "./styles.scss";

const Header: React.FunctionComponent = () => {
  const handleClick =
    (id: string) =>
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault();

      setTimeout(() => {
        const targetElement = document.querySelector(`#${id}`);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
    };
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid g-0 justify-content-end">
          <button
            className="navbar-toggler show d-lg-none flex-column justify-content-around"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="toggler-icon top-bar"></span>
            <span className="toggler-icon middle-bar"></span>
            <span className="toggler-icon bottom-bar"></span>
          </button>
          <div className="offcanvas offcanvas-end" id="offcanvasNavbar">
            <div className="offcanvas-header justify-content-end">
              <button
                className="navbar-toggler d-lg-none flex-column justify-content-around p-3 me-3 mt-3"
                type="button"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <span className="toggler-icon top-bar"></span>
                <span className="toggler-icon middle-bar"></span>
                <span className="toggler-icon bottom-bar"></span>
              </button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 gap-3">
                <li className="nav-item">
                  <button
                    className="nav-link"
                    data-bs-dismiss="offcanvas"
                    onClick={handleClick("programma")}
                  >
                    Programma
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link"
                    data-bs-dismiss="offcanvas"
                    onClick={handleClick("veelgesteldevragen")}
                  >
                    Veelgestelde vragen
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link"
                    data-bs-dismiss="offcanvas"
                    onClick={handleClick("footer")}
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
