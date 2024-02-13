import AdminSideBar from "../ui/AdminSideBar";
import { getServerAuthSession } from "../lib/admin_auth/auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const authSession = await getServerAuthSession(); 
  if (!authSession?.user) {
    redirect('/')
  }

  return (
    <main className="h-screen">
      <AdminSideBar user={authSession?.user}/>
    </main>
  );
}
