import BeanieBaby from './BeanieBaby';

export default function BeaniesList({ beanieBabies }) {
  return (
    <div className="beanies">
      {/* render out the beanie babies as a list */}
      {beanieBabies.map((beanieBaby) => (
        <BeanieBaby key={beanieBaby.id} beanieBaby={beanieBaby} />
      ))}
    </div>
  );
}
