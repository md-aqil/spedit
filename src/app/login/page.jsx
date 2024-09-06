'use client';
import * as React from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import logo from "../../assets/logo.svg";
import illustration from "../../assets/illustrationSrc.png";
import google from "../../assets/google.svg";
import facebook from "../../assets/facebook.png";

/**
 * @typedef {Object} LoginPageProps
 * @property {string} logoSrc - The source URL for the logo image.
 * @property {string} illustrationSrc - The source URL for the illustration image.
 */

/**
 * LoginPage component for user authentication.
 * @param {LoginPageProps} props
 * @returns {JSX.Element}
 */
function LoginPage({ logoSrc, illustrationSrc }) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [agreeTerms, setAgreeTerms] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <main className="overflow-hidden px-9 py-6 bg-white max-md:px-5">
           <Image
                src={logo}
                alt="Logo"
                
                className="object-contain w-100 absolute"
              />
      <div className="flex gap-5 max-md:flex-col">
        <section className="flex flex-col w-[46%] max-md:ml-0 max-md:w-full px-20">
          <div className="flex flex-col items-center mt-1.5 w-full max-md:mt-10">
           
            <div className="flex flex-col my-10">
              <h1 className="text-3xl font-bold text-stone-950">
                Connect with us
              </h1>
              <p className="mt-2 text-sm text-neutral-500">
                Enter your credentials to get started with your trading journey.
              </p>
            </div>
            <div className="flex gap-5 justify-center items-center w-full">
              <button
                className="flex gap-2 justify-center items-center px-4 py-4 rounded border border-neutral-800 text-sm font-bold"
                aria-label="Log in with Google"
              >
                <Image
                  src={google}
                  alt="Google Logo"
                  width={14}
                  height={14}
                  className="w-3.5"
                />
                Log in with Google
              </button>
              <button
                className="flex gap-2 justify-center items-center px-4 py-4 rounded border border-neutral-800 text-sm font-bold"
                aria-label="Log in with Facebook"
              >
                <Image
                  src={facebook}
                  alt="Facebook Logo"
                  width={14}
                  height={14}
                  className="w-3.5"
                />
                Log in with Facebook
              </button>
            </div>
            <div className="mt-9 text-xs text-center text-stone-300">
              OR
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col mt-9 w-full">
              <div className="flex flex-col text-base">
                <label htmlFor="name" className="font-bold text-black opacity-80">
                  Name*
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Eg: John Doe"
                  className="px-5 py-2.5 mt-3 w-full text-black rounded-lg bg-stone-50"
                  required
                />
              </div>
              <div className="flex flex-col mt-5 text-base">
                <label htmlFor="email" className="font-bold text-black opacity-80">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Eg: xyz@email.com"
                  className="px-5 py-2.5 mt-3 w-full text-black rounded-lg bg-stone-50"
                  required
                />
              </div>
              <div className="flex flex-col mt-5">
                <div className="flex justify-between items-end text-base">
                  <label htmlFor="password" className="font-bold text-black opacity-80">
                    Password
                  </label>
                  <a href="#" className="text-xs text-blue-500">
                    Forgot Password?
                  </a>
                </div>
                
                <div className="flex items-center gap-2 px-5 py-2.5 mt-3 w-full text-black rounded-lg bg-stone-50">
  <input
    type={showPassword ? "text" : "password"}
    id="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    placeholder="Eg: XXXXXX"
    className="w-full bg-transparent border-none outline-none"
    required
  />
  <button
    type="button"
    onClick={() => setShowPassword(!showPassword)}
    aria-label={showPassword ? "Hide password" : "Show password"}
    className="focus:outline-none"
  >
    <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'} w-6 text-lg`}></i>
  </button>
</div>

              </div>
              <div className="flex flex-col mt-9 text-stone-950">
                <div className="flex items-center text-xs">
                  <input
                    type="checkbox"
                    id="terms-policy"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    className="w-3 h-3 bg-white rounded-sm border border-stone-950"
                  />
                  <label htmlFor="terms-policy" className="ml-2">
                    I agree to the <span className="font-semibold underline">Terms and Policy</span>
                  </label>
                </div>
                <button
                  type="submit"
                  className="mt-4 px-3 py-5 w-full text-sm font-bold text-center bg-lime-500 rounded-md"
                >
                  Login/Signup
                </button>
              </div>
            </form>
            <div className="mt-5 text-xs text-center text-neutral-500 max-md:mt-10">
              Copyright @2024
            </div>
          </div>
        </section>
        <aside className="flex flex-col ml-5 w-[54%] max-md:ml-0 max-md:w-full">
          <div className="flex overflow-hidden flex-col grow items-start px-20 pt-16 pb-6 w-full bg-lime-500 rounded-xl shadow-lg max-md:px-5 max-md:mt-10">
            <h2 className="text-3xl text-black max-md:max-w-full">
              Start your Trading journey with us.
              <br />
              <span className="font-semibold">Just Copy. Just Trade</span>
            </h2>
            <p className="mt-2.5 text-sm text-neutral-800 max-md:ml-2.5">
              Signup today for all trading needs.
            </p>
            <Image
              src={illustration}
              alt="Trading illustration"
              width={500}
              height={427}
              className="object-contain self-stretch mt-14 max-md:mt-10"
            />
          </div>
        </aside>
      </div>
    </main>
  );
}

LoginPage.propTypes = {
  logoSrc: PropTypes.string.isRequired,
  illustrationSrc: PropTypes.string.isRequired,
};

export default LoginPage;
