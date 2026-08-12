// app/(dashboard)/page.tsx
import { getSession } from '@/lib/auth';
import { redirect } from 'next/navigation';
 // Your Better Auth server-side session reader

export default async function DashboardPage() {
  const session = await getSession(); // Implement this function to read the session from cookies or server-side

  if (!session?.user) {
    redirect('/login');
  }

  const role = session.user.role;

  // Route user according to their role
  switch (role) {
    case 'admin':
      redirect('/admin');
    case 'educator':
      redirect('/educator');
    case 'student':
    default:
      redirect('/student');
  }
}