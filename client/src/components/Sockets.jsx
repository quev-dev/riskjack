export default function Sockets({socket}) {
  const testCreateRoom = () => {
    socket.emit("createRoom");
  };
  const testRejoinRoom = () => {
    socket.emit("rejoinRoom");
  };
  return (
    <article className="flex flex-col gap-2 text-center items-center justify-center">
      <p>[num]</p>
      <button onClick={testCreateRoom}>Test Create Room</button>
      <button onClick={testRejoinRoom}>Test Rejoin Room</button>
    </article>
  );
}
