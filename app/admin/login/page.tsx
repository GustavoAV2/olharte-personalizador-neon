import "../../ui/globals.css";

export default function AdminLogin() {
    return <div className="flex flex-row justify-center w-full">
        <div className="flex flex-col text-center">
          <h1 className="mb-2">Login</h1>

          <label htmlFor="admin-username">Usuario</label>
          <input type="text" id="admin-username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>

          <label htmlFor="admin-username">Senha</label>
          <input type="text" id="admin-password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>

          <button className="">Entrar</button>
        </div>
    </div>;
  }
