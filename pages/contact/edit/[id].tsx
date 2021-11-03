import { useRouter } from "next/dist/client/router";
import React, { ReactElement } from "react";
import toast from "react-hot-toast";
import Layout from "../../../components/Layout";
import PersonForm from "../../../components/PersonForm";
import { Person } from "../../../lib/person/models/person";
import PersonRepository from "../../../lib/person/repositories/person.repository";

type Props = {
  person: Person;
};

export default function EditContactPage({ person }: Props): ReactElement {
  const { replace } = useRouter();

  async function handleSubmit(person: Person): Promise<void> {
    await PersonRepository.update(person);

    toast.success("Contact updated successfully.");
    replace("/");
  }

  async function onDelete(id: number): Promise<void> {
    await PersonRepository.delete(id);

    toast.success("Contact deleted successfully.");
    replace("/");
  }

  return (
    <Layout title='Edit Contact'>
      <article className='bg-white mx-4 sm:mx-0 pb-6 pt-1 border-b border-gray-200 sm:px-6'>
        <PersonForm
          initialPerson={person}
          onSubmit={handleSubmit}
          onDelete={onDelete}
        />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = (await PersonRepository.getAll()).map((p) => ({
    params: { id: p.id.toString() },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }: any) {
  try {
    const id = Number.parseInt(params.id as string);

    const person = await PersonRepository.getById(id);

    return {
      props: {
        person,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/?error=1",
        permanent: false,
      },
    };
  }
}
