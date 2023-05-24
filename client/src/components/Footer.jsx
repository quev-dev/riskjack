import icTwitter from '../content/svgs/twitter.svg';
import icInstagram from '../content/svgs/instagram.svg';
import icFacebook from '../content/svgs/facebook.svg';

export default function Footer() {
  return (
    <footer id="footer-container" className="p-4">
      <section className="m-4">
        <h6>&copy; QuevDev 2023</h6>
        <p>All rights reserved.</p>
      </section>

      <section className="m-4">
        <p>Technologies used to create this site:</p>
        <ul>
          <li>
            <a rel="norefferer" target="_blank" href="https://socket.io/">
              socket.io
            </a>
          </li>
          <li>
            <a rel="norefferer" target="_blank" href="https://react.dev/">
              React
            </a>
          </li>
          <li>
            <a rel="norefferer" target="_blank" href="https://expressjs.com/">
              Express
            </a>
          </li>
          <li>
            <a rel="norefferer" target="_blank" href="https://redis.io/">
              Redis
            </a>
          </li>
        </ul>
      </section>

      <section className="m-4">
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
