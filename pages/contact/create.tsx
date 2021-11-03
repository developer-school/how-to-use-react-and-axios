import { useRouter } from "next/dist/client/router";
import React, { ReactElement } from "react";
import toast from "react-hot-toast";
import Layout from "../../components/Layout";
import PersonForm from "../../components/PersonForm";
import { Person } from "../../lib/person/models/person";
import PersonRepository from "../../lib/person/repositories/person.repository";

export default function CreateContactPage(): ReactElement {
  const { replace } = useRouter();

  async function handleSubmit(person: Person): Promise<void> {
    await PersonRepository.create(person);

    toast.success("Contact created successfully.");
    replace("/");
  }

  return (
    <Layout title='Create Contact'>
      <article className='bg-white mx-4 sm:mx-0 px-4 py-5 border-b border-gray-200 sm:px-6'>
        <header>
          <h3 className='text-lg leading-6 font-medium text-gray-900'>
            New Contact
          </h3>
          <p className='mt-1 text-sm text-gray-500'>
            Use this form to create a new contact.
          </p>
        </header>
        <section>
          <PersonForm onSubmit={handleSubmit} />
        </section>
      </article>
    </Layout>
  );
}
