import AppButton from '../components/AppButton'
import { PageLayout } from './PageLayout'

export default function LoginPage() {
  return (
    <PageLayout title="Login|Signup" className="gap-6 py-40">
      <h2>Login or Join the Tea Club</h2>
      <p className="text-sm font-light">Collect stamps, get discounts and access exclusive promotions</p>
      <div className="mt-8 flex flex-row justify-center gap-8">
        <AppButton label="Register me" onClick={() => {}} minWidth={220} />
        <AppButton label="Login" onClick={() => {}} minWidth={220} />
      </div>
    </PageLayout>
  )
}
