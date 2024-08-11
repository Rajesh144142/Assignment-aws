import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from './amplifyconfiguration.json';
import Students from './pages/students';
import { CContainer, CButton } from '@coreui/react';
import './App.css'; // Import custom CSS for styling

Amplify.configure(config);

export function App({ signOut }) {
  return (
    <CContainer className="app-container">
      <div className="header">
        <CButton color="danger" onClick={signOut}>Sign out</CButton>
      </div>
      <Students />
    </CContainer>
  );
}

export default withAuthenticator(App);
