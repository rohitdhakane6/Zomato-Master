import { Dialog, Transition } from "@headlessui/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Fragment, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { signInUser } from "../../app/store";

const SignIn = ({ isOpen, setIsOpen }) => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const submit = async () => {
    try {
      setUserData({ email: "", password: "" });

      // Dispatch the signInUser action with the copied credentials
      const actionResult = await dispatch(signInUser(userData));

      // Check if there is an error in the payload
      if (actionResult.payload && actionResult.payload.error) {
        // Display an error toast notification
        toast.error(`${actionResult.payload.error}`);
      } else {
        // Close the modal after successful submission
        toast.success('Login successful');
        closeModal();
      }
    } catch (error) {
      console.error("Authentication error:", error);
    }
  };

  const handleChange = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const googleSignUp = () => {
    window.location.href = "http://localhost:4000?auth/google";
  };

  return (
    <>
      <ToastContainer />
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  ></Dialog.Title>
                  <div className="mt-2 flex flex-col gap-3 w-full">
                    <button
                      className="py-2 justify-center rounded-lg flex items-center gap-2 w-full border border-gray-400 bg-white text-gray-700 hover:bg-gray-100"
                      onClick={googleSignUp}
                    >
                      Login With Google <FaGoogle />
                    </button>
                    <form className="flex flex-col gap-2">
                      <div className="w-full flex flex-col gap-2">
                        <label htmlFor="email">Email</label>
                        <input
                          type="text"
                          id="email"
                          value={userData.email}
                          onChange={handleChange}
                          placeholder="user@gmail.com"
                          className="w-full border border-gray-400 px-3 py-2 rounded-lg focus:border-zomato-400"
                        />
                      </div>
                      <div className="w-full flex flex-col gap-2">
                        <label htmlFor="password">Password</label>
                        <input
                          type="password"
                          id="password"
                          value={userData.password}
                          onChange={handleChange}
                          placeholder="Enter your password"
                          className="w-full border border-gray-400 px-3 py-2 rounded-lg focus:border-zomato-400"
                        />
                      </div>
                    </form>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={submit}
                    >
                      Sign In
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default SignIn;
