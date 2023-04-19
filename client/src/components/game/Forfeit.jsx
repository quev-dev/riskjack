import icForfeit from "../../content/svgs/forfeit.svg";

export default function Forfeit() {
  return (
    <aside className="m-4 flex flex-col justify-center items-center text-center">
      <a href="/">
        Forfeit match?
        <img className="ml-2 inline" src={icForfeit} alt="Forfeit match" />
      </a>
    </aside>
  );
}
