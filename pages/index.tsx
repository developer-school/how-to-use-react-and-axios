import Link from "next/link";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
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
    <Layout title='Contacts'>
      <div className='max-w-xl  mt-4 sm:px-6 lg:px-8 mx-auto'>
        <PersonList people={contacts} />
      </div>
      <Link href={"/contact/create"}>
        <a className='inline-flex fixed bottom-10 right-10 items-center p-4 border border-transparent rounded-full  text-white shadow-xl bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
          {/* Icon: https://heroicons.com/ - outline/plus-sm */}
          <svg
            className='h-8 w-8'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            aria-hidden='true'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M12 6v6m0 0v6m0-6h6m-6 0H6'
            />
          </svg>
        </a>
      </Link>
    </Layout>
  );
}
