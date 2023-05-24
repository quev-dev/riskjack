import icHourglass from '../../content/svgs/hourglass.svg';

export default function AnimHourglass() {
  return (
    <div className="w-6 h-6">
      <img
        id="animated-hourglass"
        className="w-6 h-6"
        src={icHourglass}
        alt="Waiting..."
      />
    </div>
  );
}
