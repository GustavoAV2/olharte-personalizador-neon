import "../../ui/globals.css";
import { getServerAuthSession } from "../../../scripts/admin_auth/auth";
import Link from "next/link";

export default function AdminLogin() {
    return <div className="flex flex-row w-full justify-center mt-8">
      <div className="flex flex-col w-1/5">
      <label htmlFor="admin-username">Usuario:</label>
      <input type="text" name="username" id="admin-username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="olharte" required/>

      <label htmlFor="admin-username">Senha:</label>
      <input type="text" name="password" id="admin-password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="********" required/>

      <button type="button" 
      className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-4 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Entrar</button>
      </div>
    </div>;
  }
