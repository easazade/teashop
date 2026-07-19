import { useNavigate } from 'react-router-dom'
import AppButton from '../../components/AppButton'
import { PATHS } from '../../routes'
import { PageLayout } from '../PageLayout'

export default function AuthPage() {
  const navigate = useNavigate()

  return (
    <PageLayout title="Login | Signup" className="gap-6 py-40">
      <h2>Login or Join the Tea Club</h2>
      <p className="text-sm font-light">Collect stamps, get discounts and access exclusive promotions</p>
      <div className="mt-8 flex flex-row justify-center gap-8">
        <AppButton label="Register me" onClick={() => navigate(PATHS.signup)} minWidth={220} />
        <AppButton label="Login" onClick={() => navigate(PATHS.login)} minWidth={220} />
      </div>
    </PageLayout>
  )
}
