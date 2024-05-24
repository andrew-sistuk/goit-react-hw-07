import 'modern-normalize';

import { Layout, ContactForm, SearchBox, ContactList } from 'components';

export default function App() {
  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </Layout>
  );
}
