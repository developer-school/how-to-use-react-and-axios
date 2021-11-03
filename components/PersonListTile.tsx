import React, { ReactElement } from "react";
import { Person } from "../lib/person/models/person";

interface Props {
  person: Person;
}

export default function PersonListTile({ person }: Props): ReactElement {
  return (
    <article className='mx-4 sm:mx-0 shadow-lg rounded p-4 bg-white flex x-2'>
      <header>
        <img
          className='h-10 w-10 rounded-full'
          src={person.avatar}
          alt={`${person.first_name} ${person.last_name}'s avatar.`}
        />
      </header>
      <section className='ml-2'>
        <p className='text-sm font-medium text-gray-900'>
          {person.first_name} {person.last_name}
        </p>
        <p className='text-sm text-gray-500'>{person.email}</p>
      </section>
    </article>
  );
}
