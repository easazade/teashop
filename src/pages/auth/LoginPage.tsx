import { useState } from 'react'
import AppButton from '../../components/AppButton'
import AppInput from '../../components/AppInput'
import { PageLayout } from '../PageLayout'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <PageLayout title="Login" className="gap-4 p-54">
      <h1>Login</h1>
      <p className="mt-2 mb-2 text-sm font-light">Enter your email and password to login:</p>
      <AppInput
        placeholder={'E-mail'}
        minWidth={420}
        type="email"
        value={email}
        onChange={(input) => setEmail(input.target.value)}
      />
      <AppInput
        placeholder={'Password'}
        minWidth={420}
        type="password"
        value={password}
        onChange={(input) => setPassword(input.target.value)}
      >
        <span className="cursor-pointer text-xs">Forgot your password?</span>
      </AppInput>
      <AppButton
        label="Login"
        minWidth={420}
        className="mt-2"
        onClick={() => {
          alert(`Email is ${email} & Password is ${password}`)
        }}
      />
      <span className="text-primary-light text-sm font-light">Don't have an account? Sign up</span>
    </PageLayout>
  )
}
