import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { FaGoogle } from "react-icons/fa";

export default function SingIn({ isOpen, setIsOpen }) {
  const [userData, setuserData] = useState({
    email: "",
    passward: "",
    FullName: "",
  });
  const handelChange = (e) => {
    setuserData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  function closeModal() {
    setIsOpen(false);
  }
  const googleSingUp = () =>
    (Window.Location.href = "http://localhost:4000?auth/google");

  return (
    <>
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
                    <button className="py-2 justify-center rounded-lg flex items-center gap-2 w-full border border-gray-400 bg-white text-gray-700 hover:bg-gray-100">
                      Login With Google <FaGoogle />
                    </button>
                    <form action="" className="flex flex-col gap-2 ">
                      <div className="w-full flex flex-col gap-2">
                        <label htmlFor="email"> Email</label>
                        <input
                          type="text"
                          id="email"
                          value={userData.email}
                          onChange={handelChange}
                          placeholder="user@gmail.com"
                          className="w-full border border-gray-400 px-3 py-2 rounded-lg focus:border-zomato-400"
                        />
                      </div>
                      <div className="w-full flex flex-col gap-2">
                        <label htmlFor="passward"> Passward</label>
                        <input
                          type="password"
                          id="passward"
                          value={userData.passward}
                          onChange={handelChange}
                          placeholder=""
                          className="w-full border border-gray-400 px-3 py-2 rounded-lg focus:border-zomato-400"
                        />
                      </div>
                    </form>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Signup
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
}