import {AuthenticatedTemplate, UnauthenticatedTemplate} from '@azure/msal-react' 
import ProfileContent from '../ProfileContent';

/**
 * If a user is authenticated the ProfileContent component above is rendered. Otherwise a message indicating a user is not authenticated is rendered.
 */
const MainContent = () => {
    return (
      <div className='App'>
        <AuthenticatedTemplate>
          <ProfileContent />
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
          <h5>
            <center>Please sign-in to see your profile information.</center>
          </h5>
        </UnauthenticatedTemplate>
      </div>
    );
  };

  export default MainContent