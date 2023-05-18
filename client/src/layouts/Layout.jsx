import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function Layout({ children, pageID = '' }) {
  return (
    <div id={pageID}>
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
