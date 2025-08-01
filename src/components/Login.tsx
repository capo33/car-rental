import { useState } from "react";

interface LoginProps {
  setShowLogin: (show: boolean) => void;
}

const Login = ({ setShowLogin }: LoginProps) => {
  const [state, setState] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login or registration logic here
  };
  return (
    <div onClick={() => setShowLogin(false)} className="fixed inset-0 flex items-center justify-center text-sm text-gray-600 bg-black/50 z-100">

      <form onSubmit={handleSubmit} onClick={(e) => e.stopPropagation()} className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] rounded-lg shadow-xl border border-gray-200 bg-white">
        <p className="text-2xl font-medium m-auto">
          <span className="text-primary">User</span> {state === "login" ? "Login" : "Sign Up"}
        </p>
        {state === "register" && (
          <div className="flex items-center my-2 border bg-indigo-500/5 border-gray-500/10 rounded gap-1 pl-2 w-full">
            {/* person icon */}
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0ZM9 2.25C10.5188 2.25 11.75 3.48125 11.75 5C11.75 6.51875 10.5188 7.75 9 7.75C7.48125 7.75 6.25 6.51875 6.25 5C6.25 3.48125 7.48125 2.25 9 2.25ZM9 15C7.05 15 5.5 13.45 5.5 11.5C5.5 10.95 5.65 10.45 5.95 10H12C12.3 10.45 12.45 10.95 12.45 11.5C12.45 13.45 10.9 15 9 15Z" fill="#6B7280" />
            </svg>
            <input
              required
              type="text"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              className="w-full outline-none bg-transparent py-2.5"
            />
          </div>

        )}

        <div className="flex items-center my-2 border bg-indigo-500/5 border-gray-500/10 rounded gap-1 pl-2 w-full">
          <svg width="18" height="18" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="m2.5 4.375 3.875 2.906c.667.5 1.583.5 2.25 0L12.5 4.375" stroke="#6B7280" strokeOpacity=".6" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11.875 3.125h-8.75c-.69 0-1.25.56-1.25 1.25v6.25c0 .69.56 1.25 1.25 1.25h8.75c.69 0 1.25-.56 1.25-1.25v-6.25c0-.69-.56-1.25-1.25-1.25Z" stroke="#6B7280" strokeOpacity=".6" strokeWidth="1.3" strokeLinecap="round" />
          </svg>
          <input
            required
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full outline-none bg-transparent py-2.5"
          />
        </div>
        <div className="flex items-center my-2 border bg-indigo-500/5 border-gray-500/10 rounded gap-1 pl-2 w-full">
          <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z" fill="#6B7280" />
          </svg>
          <input
            required
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full outline-none bg-transparent py-2.5"
          />
        </div>
        <button type="submit" className="w-full mb-3 bg-primary hover:bg-primary-dull transition py-2.5 rounded text-white font-medium">Log In</button>
        {/* <p className="text-center mt-4">Don't have an account? <a href="#" className="text-blue-500 underline">Signup</a></p> */}
        {state === "register" ? (
          <p className="text-center mt-4">
            Already have account? <span onClick={() => setState("login")} className="text-primary cursor-pointer">click here</span>
          </p>
        ) : (
          <p>
            Create an account? <span onClick={() => setState("register")} className="text-primary cursor-pointer">click here</span>
          </p>
        )}
      </form>
    </div>
  )
}

export default Login