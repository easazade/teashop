import AppButton from '../../components/AppButton'
import AppInput from '../../components/AppInput'
import { PageLayout } from '../PageLayout'

export default function LoginPage() {
  return (
    <PageLayout title="Login">
      <h1>Login</h1>
      <p className="mt-6 mb-6 text-sm font-light">Enter your email and password to login:</p>
      <AppInput placeholder={'E-mail'} />
      <AppInput placeholder={'Password'} />
      <AppButton label="Login" onClick={() => {}} />
      <span>Don't have an account? Sign up</span>
    </PageLayout>
  )
}
