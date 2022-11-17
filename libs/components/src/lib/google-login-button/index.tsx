import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { useAddUserGoogleMutation } from 'redux/services/authApi';

import { ButtonContainer } from './styles';

export function GoogleLoginButton() {
  const [addUser] = useAddUserGoogleMutation();
  const navigate = useNavigate();

  return (
    <ButtonContainer>
      <GoogleLogin
        onSuccess={async credentialResponse => {
          try {
            const response = await addUser(credentialResponse);
            console.log(response);
            navigate('/');
          } catch (err) {
            console.log(err);
          }
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </ButtonContainer>
  );
}
export default GoogleLoginButton;
