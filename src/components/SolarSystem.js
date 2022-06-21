import React from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    console.log(Planets);
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <ul>
          {Planets.map(({ name, image }, i) => (
            <li key={ i }>
              <PlanetCard
                planetName={ name }
                planetImage={ image }
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default SolarSystem;
