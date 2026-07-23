import { useState } from 'react'
import Button from '../../components/Button'
import DatePicker from '../../components/DatePicker'
import Input from '../../components/Input'
import { Selector } from '../../components/Selector'
import { tryParseInt } from '../../utils/functions'
import { PageLayout } from '../PageLayout'

export default function SignUpPage() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const genderOptions = ['male', 'female']
  const [genderIndex, setGenderIndex] = useState<number>()

  const [birthday, setBirthday] = useState('1994-02-22')

  return (
    <PageLayout title="Sign up" className="gap-4 p-28">
      <h1>Sign up</h1>
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
      <Selector
        selectedIndex={genderIndex}
        options={genderOptions}
        minWidth={420}
        placeholder="Gender"
        getName={(genderIndex) => genderOptions[genderIndex]}
        onChange={(selectedIndex) => {
          const index = tryParseInt(selectedIndex.target.value)
          if (index !== null) {
            setGenderIndex(index)
          }
        }}
      />
      <DatePicker
        minWidth={420}
        value={birthday}
        onChange={(event) => {
          const date = event.currentTarget.value
          const isValidDate = !Number.isNaN(event.currentTarget.valueAsNumber)

          // Allowing valid dates and no date to be selected
          if (date === '' || isValidDate) {
            setBirthday(date)
          }
        }}
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
