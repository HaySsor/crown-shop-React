import SingUpForm from '../../components/sing-up/sing-up-form.component.jsx';
import SingIn from '../../components/sign-in/sing-in.component.jsx';
import {LogoContainer} from './login-page.style';

function SingInPage() {
  return (
    <LogoContainer>
      <SingIn />
      <SingUpForm />
    </LogoContainer>
  );
}

export default SingInPage;
