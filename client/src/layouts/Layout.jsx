import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function Layout({ children, pageID = '' }) {
  return (
    <div id={pageID}>
      <Nav />
      <main className="md:w-1/2 md:mx-auto">{children}</main>
      <Footer />
    </div>
  );
}
