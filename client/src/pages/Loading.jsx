import AnimHourglass from '../components/anims/AnimHourglass';

export default function Loading() {
  return (
    <section id="loading-page" className="box-info">
      <div id="loading-message-container">
        <AnimHourglass />
      </div>
    </section>
  );
}
