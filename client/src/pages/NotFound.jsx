import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <section className="box-info p-4 animate__animated animate__fadeInLeft">
        <p className="opacity-70 mb-4">
          404 404 404 404 404 404 404 404 404 404
        </p>
        <h2 className="font-bold">...404</h2>
        <p>The page you are looking for does not exist.</p>
        <Link to="/">Home</Link>
      </section>
    </main>
  );
}
