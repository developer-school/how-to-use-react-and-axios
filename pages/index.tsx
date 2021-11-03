import React, { useEffect, useState } from "react";
import PersonList from "../components/PersonList";
import { Person } from "../lib/person/models/person";
import PersonRepository from "../lib/person/repositories/person.repository";

export default function Home() {
  const [contacts, setContacts] = useState<Person[]>([
    {
      id: 1,
      first_name: "Paul",
      last_name: "Halliday",
      email: "hello@developer.school",
      avatar: "https://developer.school/favicon.ico",
    },
  ]);

  useEffect(() => {
    async function getContacts() {
      const contacts = await PersonRepository.getAll();

      setContacts(contacts);
    }

    getContacts();
  }, []);

  return (
    <div className='bg-gray-200 min-h-screen h-full'>
      <nav className='bg-indigo-500 text-white py-4'>
        <div className='text-center px-4 sm:px-6 lg:px-8'>
          <h1 className='text-2xl font-bold '>Contacts</h1>
        </div>
      </nav>
      <main>
        <div className='max-w-xl  mt-4 sm:px-6 lg:px-8 mx-auto'>
          <PersonList people={contacts} />
        </div>
      </main>
    </div>
  );
}
