import React, { ReactElement, useEffect, useState } from "react";
import { Person } from "../lib/person/models/person";

interface Props {
  initialPerson?: Person;
  onDelete?: (id: number) => void;
  onSubmit: (person: Person) => void;
}

export default function PersonForm({
  initialPerson = {
    avatar: "",
    email: "",
    first_name: "",
    last_name: "",
  } as Person,
  onSubmit,
  onDelete,
}: Props): ReactElement {
  const [person, setPerson] = useState<Person>(initialPerson);

  useEffect(() => {
    setPerson(initialPerson);
  }, [JSON.stringify(initialPerson)]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        onSubmit(person);
      }}
      className='mt-6 space-y-4  grid grid-cols-1 row-gap-6 col-gap-4 sm:grid-cols-5'
    >
      <div className='sm:col-span-4'>
        <label
          htmlFor='first_name'
          className='block text-sm font-medium leading-5 text-gray-700'
        >
          First Name
        </label>
        <div className='mt-1 rounded-md shadow-sm'>
          <input
            id='first_name'
            type='text'
            required
            defaultValue={person.first_name}
            onChange={(e) =>
              setPerson({ ...person, first_name: e.target.value })
            }
            className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5'
          />
        </div>
      </div>
      <div className='sm:col-span-4'>
        <label
          htmlFor='last_name'
          className='block text-sm font-medium leading-5 text-gray-700'
        >
          Last Name
        </label>
        <div className='mt-1 rounded-md shadow-sm'>
          <input
            id='last_name'
            type='text'
            required
            defaultValue={person.last_name}
            onChange={(e) =>
              setPerson({ ...person, last_name: e.target.value })
            }
            className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5'
          />
        </div>
      </div>
      <div className='sm:col-span-4'>
        <label
          htmlFor='email'
          className='block text-sm font-medium leading-5 text-gray-700'
        >
          Email
        </label>
        <div className='mt-1 rounded-md shadow-sm'>
          <input
            id='email'
            type='email'
            required
            defaultValue={person.email}
            onChange={(e) => setPerson({ ...person, email: e.target.value })}
            className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5'
          />
        </div>
      </div>
      <div className='sm:col-span-4'>
        <label
          htmlFor='avatar'
          className='block text-sm font-medium leading-5 text-gray-700'
        >
          Avatar URL
        </label>
        <div className='mt-1 rounded-md shadow-sm'>
          <input
            id='avatar'
            type='avatar'
            required
            defaultValue={person.avatar}
            onChange={(e) => setPerson({ ...person, avatar: e.target.value })}
            className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5'
          />
        </div>
      </div>
      <div className='sm:col-span-4 flex justify-between mt-10 space-x-2'>
        <button
          type='submit'
          className='inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        >
          Save
        </button>
        {onDelete && (
          <button
            onClick={() => onDelete(person.id)}
            type='button'
            className='inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md transition-all duration-200 hover:shadow-sm text-red-500 hover:text-white  hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
          >
            Delete
          </button>
        )}
      </div>
    </form>
  );
}
