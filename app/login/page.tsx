import { LoginForm } from '@/components/login-form'; // to be implemented

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12">
      <section className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8">
        <div className="mb-7">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Welcome back</h1>
          <p className="mt-2 text-sm text-slate-600">Sign in to continue to your portfolio.</p>
        </div>
        <LoginForm />
      </section>
    </main>
  );
}