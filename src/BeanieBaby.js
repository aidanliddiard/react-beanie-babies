import { Link } from 'react-router-dom';

export default function BeanieBaby({ beanieBaby }) {
  return (
    // this should contain a react-router-dom Link to the detail page for this particular beanie baby.
    // it should also render the beanie baby's image and show the beanie baby's name
    <div key={beanieBaby.id} style={{ margin: `10px` }}>
      <img src={beanieBaby.image} style={{ width: `200px` }} />
      <Link path to={`/beanies/${beanieBaby.id}`}>
        <h4>{beanieBaby.title}</h4>
      </Link>
    </div>
  );
}
