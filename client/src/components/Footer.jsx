import icTwitter from "../content/icons/twitter.svg";
import icInstagram from "../content/icons/instagram.svg";
import icFacebook from "../content/icons/facebook.svg";

export default function Footer() {
  return (
    <footer id="footer-container" className="p-4">
      <section className="m-4">
        <h5>&copy; QuevDev 2023</h5>
        <p>All rights reserved.</p>
      </section>

      <section className="m-4">
        <h5>Resources Used:</h5>
        <ul>
          <li>
            <a href="">Link</a>
          </li>
          <li>
            <a href="">Link</a>
          </li>
          <li>
            <a href="">Link</a>
          </li>
        </ul>
      </section>

      <section className="m-4">
        <h6>Share on Social Media</h6>
        <p className="mb-3">Any support is greatly appreciated.</p>
        <ul className="flex flex-row gap-2">
          <li>
            <button>
              <img src={icTwitter} alt="Twitter icon" />
            </button>
          </li>
          <li>
            <button>
              <img src={icInstagram} alt="Instagram icon" />
            </button>
          </li>
          <li>
            <button>
              <img src={icFacebook} alt="Facebook icon" />
            </button>
          </li>
        </ul>
      </section>
    </footer>
  );
}
