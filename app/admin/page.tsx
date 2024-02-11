import UserInfo from "../ui/UserInfo";
import { getServerAuthSession } from "../../scripts/admin_auth/auth";
import Link from "next/link";

export default async function AdminPage() {
  const authSession = await getServerAuthSession(); 

  return (
    <main className="flex items-center justify-center h-screen">
    {authSession?.user && <UserInfo user={authSession?.user} />}
    {!authSession?.user && ( 
      <Link className="font-medium mt-2 text-blue-600 hover:underline" href="/admin/login">
        Login
      </Link>
    )}
    </main>
  );
}
