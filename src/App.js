import React from 'react';
import Modal from './components/Modal/Modal';
import SearchInput from './components/SearchInput/SearchInput';
import ContactSummary from './components/Contact/ContactSummary';
import ContactList from './components/Contact/ContactList';
import Header from './components/Header/Header';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';

function App() {
  return (
    <div>
      <Header />
      {/* <SearchInput /> */}
      {/* <Modal /> */}
      <Container textAlign='justified'>
        <ContactSummary />
        <ContactList />
      </Container>
    </div>
  );
}

export default App;
