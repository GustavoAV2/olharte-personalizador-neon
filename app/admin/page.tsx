import AdminSideBar from "../ui/AdminSideBar";
import { getServerAuthSession } from "../../scripts/admin_auth/auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const authSession = await getServerAuthSession(); 
  if (!authSession?.user) {
    redirect('/')
  }

  return (
    <main className="flex items-center justify-center h-screen">
    {authSession?.user && 
    <div>
      <AdminSideBar user={authSession?.user} />
    </div>}

    {!authSession?.user && ( 
      <Link className="font-medium mt-2 text-blue-600 hover:underline" href="/admin/login">
        Login
      </Link>
    )}
    </main>
  );
}
