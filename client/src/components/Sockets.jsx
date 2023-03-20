import io from "socket.io-client";
const socket = io.connect("http://localhost:3001");

export default function Sockets() {
  const testRedux = () => {
    socket.emit("test_redux", {
      message: "UPDATE: Button clicked.",
    });
  };
  return (
    <article className="flex flex-col gap-2 text-center items-center justify-center">
      <p>[num]</p>
      <button onClick={testRedux}>Test Backend & Redux</button>
    </article>
  );
}
