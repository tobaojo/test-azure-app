import { useMsal } from '@azure/msal-react';
import { loginRequest } from '../authconfig';
import { DropdownButton } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';

const SigninButton = () => {
  const { instance } = useMsal();

  const handleLogin = (loginType) => {
    if (loginType === 'popup') {
      instance.loginPopup(loginRequest).catch((e) => {
        console.log(e);
      });
    } else if (loginType === 'redirect') {
      instance.loginRedirect(loginRequest).catch((e) => {
        console.log(e);
      });
    }
  };

  return (
    <DropdownButton variant='secondary' className='ml-auto' drop='start' title='sign In'>
      <Dropdown.Item as='button' onClick={() => handleLogin('popup')}>
        Sign in using pop up
      </Dropdown.Item>
      <Dropdown.Item as='button' onClick={() => handleLogin('redirect')}>
        Sign in using redirect
      </Dropdown.Item>
    </DropdownButton>
  );
};

export default SigninButton;
