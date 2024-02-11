
import NextAuth from "next-auth";

import { authOptions } from "../../../../scripts/admin_auth/auth";

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };