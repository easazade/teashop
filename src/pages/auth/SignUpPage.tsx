import { useState } from 'react'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { PageLayout } from '../PageLayout'

export default function SignUpPage() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <PageLayout title="Login" className="gap-4 p-54">
      <h1>Login</h1>
      <p className="mt-2 mb-2 text-sm font-light">Enter your email and password to login:</p>
      <Input
        placeholder={'First name'}
        minWidth={420}
        value={firstName}
        onChange={(input) => setFirstName(input.target.value)}
      />
      <Input
        placeholder={'Last name'}
        minWidth={420}
        value={lastName}
        onChange={(input) => setLastName(input.target.value)}
      />
      <Input
        placeholder={'E-mail'}
        minWidth={420}
        type="email"
        value={email}
        onChange={(input) => setEmail(input.target.value)}
      />
      <Input
        placeholder={'Password'}
        minWidth={420}
        type="password"
        value={password}
        onChange={(input) => setPassword(input.target.value)}
      />

      <Button
        label="Create account"
        minWidth={420}
        className="mt-2"
        onClick={() => {
          alert(`Email is ${email} & Password is ${password}`)
        }}
      />
      <span className="text-primary-light hover:text-primary cursor-pointer text-sm font-light">
        Already have an account? Login
      </span>
    </PageLayout>
  )
}
