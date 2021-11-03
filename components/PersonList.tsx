import React, { ReactElement } from "react";
import { Person } from "../lib/person/models/person";
import PersonListTile from "./PersonListTile";

interface Props {
  people: Person[];
}

export default function PersonList({ people }: Props): ReactElement {
  return (
    <ul role='list' className='divide-y space-y-4 pb-12 divide-gray-200'>
      {people.map((person) => (
        <li>
          <PersonListTile person={person} />
        </li>
      ))}
    </ul>
  );
}
