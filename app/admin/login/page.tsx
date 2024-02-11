"use client";
import { signIn } from "next-auth/react";
import { ChangeEvent, FormEvent, useState } from "react";

type LoginInput = {
  username: string;
  password: string;
}

type PageProps = {
  searchParams: { error?: string }
}

export default function AdminLogin({searchParams}: PageProps) {
  const [inputs, setInputs] = useState<LoginInput>({ username: "", password: "" });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = async (event:FormEvent) => {
    event.preventDefault();
    await signIn("credentials", { 
      username: inputs.username, 
      password: inputs.password, 
      callbackUrl: '/admin/' });
  }

  return <div className="flex flex-row w-full justify-center mt-8">
      <div className="flex flex-col w-1/5">
      <form onSubmit={handleSubmit}>
        <label htmlFor="admin-username">Usuario:</label>
        <input type="text" name="username" 
          required
          autoComplete="off"
          value={inputs.username || ""}
          onChange={handleChange}
          id="admin-username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="olharte"/>

        <label htmlFor="admin-password">Senha:</label>
        <input type="password" name="password" id="admin-password"
          autoComplete="off"
          required
          value={inputs.password || ""}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="********" />

        <button type="submit" 
        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-4 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Entrar</button>
          { searchParams.error && (
            <p className="text-red-600 text-center capitalize">
              Login failed.
            </p>
          )}
      </form>
      </div>
    </div>;
  }
