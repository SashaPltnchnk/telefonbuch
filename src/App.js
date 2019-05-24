import React from 'react';
import ContactList from './components/Contact/ContactList';
import Header from './components/Header/Header';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';


function App() {
  return (
    <div>
      <Header />
      <Container textAlign='justified'>
        <ContactList />
      </Container>
    </div>
  );
}

export default App;
