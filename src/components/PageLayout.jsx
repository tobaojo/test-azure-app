/* eslint-disable react/prop-types */
import Navbar from 'react-bootstrap/Navbar';
import SigninButton from './SigninButton';
import SignOutButton from './SignOutButton';
import { useIsAuthenticated } from '@azure/msal-react';

const PageLayout = (props) => {
  const isAuthenticated = useIsAuthenticated();
  return (
    <>
      <Navbar>
        <a href=''>Microsoft Identity</a>
        <div>{isAuthenticated ? <SignOutButton /> : <SigninButton />}</div>
      </Navbar>
      <h5>
        <center>Welcome to the Microsoft Authentication App</center>
      </h5>
      <br />
      <br />
      {props.children}
    </>
  );
};

export default PageLayout;
