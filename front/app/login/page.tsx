// app/login/page.tsx
import GoogleLoginButton from '@/app/login/GoogleLoginbutton'

export default function LoginPage() {

  return (
    <div className='bg-gray-50'>
      <div className="mx-auto max-w-[576px] space-y-8 flex justify-center items-center h-screen bg-white">
        <GoogleLoginButton />
      </div>
    </div>
  )
}