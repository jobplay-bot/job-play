// app/login/page.tsx
import GoogleLoginButton from "@/app/login/GoogleLoginbutton";

export default function LoginPage() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto flex h-screen max-w-[576px] items-center justify-center space-y-8 bg-white">
        <GoogleLoginButton />
      </div>
    </div>
  );
}
