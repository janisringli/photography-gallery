import "./MenuFlyout.css";
import Menu from "../../assets/svg/list.svg";
import Close from "../../assets/svg/x.svg";

function MenuFlyout({ menuFlyoutWrapperRef }) {
  function closeFlyout() {
    const flyout = document.querySelector(".menuFlyout-wrapper");
    flyout.style.display = "none";
  }

  document.onkeydown = function (evt) {
    evt = evt || window.event;
    if (evt.key === "Escape") {
      closeFlyout();
    }
  };

  return (
    <div className="menuFlyout-wrapper" ref={menuFlyoutWrapperRef}>
      <div className="menuFlyout-container">
        <div className="menuFlyout-content">
          <ul className="nav-content">
            <li className="nav-item">
              <a href="/">Home</a>
            </li>
            <li className="nav-item">
              <a href="/about">About</a>
            </li>
            {/* <li className="nav-item">Projects</li> */}
            {/* <li className="nav-item">
              <a href="/photogallery">Photography</a>
            // </li> */}
            {/* // <li className="nav-item">
            //   <a href="/service">Services</a>
            // </li> */}
            <li className="nav-item">
              <a href="/gallery">Gallery</a>
            </li>
            {/* <li className="nav-item">
              <a href="/upload">Upload</a>
            </li> */}
          </ul>
          <div className="flyout-sidebar">
            <img
              className="flyout-menu-icon"
              onClick={closeFlyout}
              src={Menu}
              alt=""
            />
            <div className="menu-close" onClick={closeFlyout}>
              Close
            </div>
            <img
              className="close-mobile"
              src={Close}
              onClick={closeFlyout}
              alt=""
            />
          </div>
          <div className="dev-info">
            <div className="info-details">
              <ul className="info-list">
                <li className="info-list-item">Janis Ringli</li>
                <li className="info-list-item">Software Developer</li>
                <li className="info-list-item">
                  <a href="mailto:j@nisringli">j@nisringli.ch</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flyout-footer">
            <div className="footer-item">Copyright 2023</div>
            <div className="footer-item">
              <a href="/impressum">Impressum</a>
            </div>
            <div className="footer-item">
              <a href="/datenschutz">Datenschutz</a>
            </div>
          </div>
        </div>
        <div className="menuFlyout-overlay-blur" onClick={closeFlyout}></div>
      </div>
    </div>
  );
}
export default MenuFlyout;
