import { Link } from 'react-router-dom';

export default function BeaniesList({ beanieBabies }) {
  return (
    <div className="beanies">
      {/* render out the beanie babies as a list */}
      {beanieBabies.map((baby) => (
        <div key={baby.id} style={{ margin: `10px` }}>
          <img src={baby.image} style={{ width: `200px` }} />
          <Link path to={`/beanies/${baby.id}`}>
            <h4>{baby.title}</h4>
          </Link>
        </div>
      ))}
    </div>
  );
}
