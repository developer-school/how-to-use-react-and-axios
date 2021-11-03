import { useRouter } from "next/dist/client/router";
import React, { ReactElement, useEffect, useState } from "react";
import toast from "react-hot-toast";
import Layout from "../../../components/Layout";
import PersonForm from "../../../components/PersonForm";
import { Person } from "../../../lib/person/models/person";
import PersonRepository from "../../../lib/person/repositories/person.repository";

export default function EditContactPage(): ReactElement {
  const { replace, query } = useRouter();

  const [person, setPerson] = useState<Person>({} as Person);

  useEffect(() => {
    async function getPerson() {
      const id = Number.parseInt(query.id as string);

      if (!Number.isNaN(id)) {
        const res = await PersonRepository.getById(id);

        setPerson(res);
      } else {
        toast.error("Invalid id");
        replace("/");
      }
    }

    getPerson();
  }, [query.id]);

  async function handleSubmit(person: Person): Promise<void> {
    await PersonRepository.update(person);

    toast.success("Contact updated successfully.");
    replace("/");
  }

  return (
    <Layout title='Edit Contact'>
      <article className='bg-white mx-4 sm:mx-0 pb-6 pt-1 border-b border-gray-200 sm:px-6'>
        <PersonForm initialPerson={person} onSubmit={handleSubmit} />
      </article>
    </Layout>
  );
}
