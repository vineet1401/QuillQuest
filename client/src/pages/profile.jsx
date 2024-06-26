import { useEffect, useState } from "react";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import usebaseUrl from "../hooks/usebaseUrl";
import axios from "axios";
import { setUserInfo } from "../store/userSlice/userSlice";
import { toast } from "react-toastify";

export default function Profile({ profileModal, toggleProfileModal }) {
  const userInfo = useSelector((state) => state.user.userInfo);
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [currentUserInfo, setCurrentUserInfo] = useState({});

  const submitForm = async () => {
    if (Object.keys(currentUserInfo).length == 0)
      return toast.warn("No Field to Update");

    try {
      const response = await axios.request({
        method: "POST",
        url: `${usebaseUrl()}/api/user/update-profile`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("validationToken")}`,
          "Content-Type" : "multipart/form-data",
        },
        data: currentUserInfo,
      });
      if (response.data.success) {
        dispatch(setUserInfo(currentUserInfo));
        toast.success(response.data.message);
        setCurrentUserInfo({});
      } else {
        toast.error(response.data.message);
      }
    } catch (e) {
      toast.error(e.response.data.message);
      console.log("Error in Profile->submitForm", e);
    }
  };
  // useEffect(()=> {
  //   setCurrentUserInfo(userInfo);
  // }, [profileModal])

  return (
    <Transition show={profileModal}>
      <Dialog className="relative z-10" onClose={toggleProfileModal}>
        <TransitionChild
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <form className="border-b border-gray-900/10 pb-2">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">
                      Welcome,{" "}
                      <span className="font-bold text-2xl block">
                        {userInfo.fullName}
                      </span>
                    </h2>

                    <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
                      <div className="sm:col-span-3">
                        <label className="block text-sm font-medium leading-6 text-gray-900">
                          Full Name
                        </label>
                        <div className="mt-2">
                          <input
                            readOnly={isEditing ? false : true}
                            type="text"
                            value={
                              currentUserInfo.fullName
                                ? currentUserInfo.fullName
                                : userInfo.fullName
                            }
                            onChange={(e) =>
                              setCurrentUserInfo((prev) => ({
                                ...prev,
                                [e.target.name]: e.target.value,
                              }))
                            }
                            name="fullName"
                            id="fullName"
                            autoComplete="fullName"
                            className={
                              !isEditing
                                ? "block w-full rounded-md border-0 py-1.5 pl-2 outline-none"
                                : "block w-full rounded-md border-0 py-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 pl-2 sm:text-sm sm:leading-6"
                            }
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-3">
                        <label className="block text-sm font-medium leading-6 text-gray-900">
                          User Name
                        </label>
                        <div className="mt-2">
                          <input
                            readOnly={isEditing ? false : true}
                            type="text"
                            value={
                              currentUserInfo.userName
                                ? currentUserInfo.userName
                                : userInfo.userName
                            }
                            onChange={(e) =>
                              setCurrentUserInfo((prev) => ({
                                ...prev,
                                [e.target.name]: e.target.value,
                              }))
                            }
                            name="userName"
                            id="userName"
                            autoComplete="userName"
                            className={
                              !isEditing
                                ? "block w-full rounded-md border-0 py-1.5 pl-2 outline-none"
                                : "block w-full rounded-md border-0 py-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 pl-2 sm:text-sm sm:leading-6"
                            }
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-4">
                        <label className="block text-sm font-medium leading-6 text-gray-900">
                          Email address
                        </label>
                        <div className="mt-2">
                          <input
                            readOnly={isEditing ? false : true}
                            id="email"
                            name="email"
                            value={
                              currentUserInfo.email
                                ? currentUserInfo.email
                                : userInfo.email
                            }
                            onChange={(e) =>
                              setCurrentUserInfo((prev) => ({
                                ...prev,
                                [e.target.name]: e.target.value,
                              }))
                            }
                            type="email"
                            autoComplete="email"
                            className={
                              !isEditing
                                ? "block w-full rounded-md border-0 py-1.5 pl-2 outline-none"
                                : "block w-full rounded-md border-0 py-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 pl-2 sm:text-sm sm:leading-6"
                            }
                          />
                        </div>
                      </div>

                      <div className="col-span-full">
                        <label className="block text-sm font-medium leading-6 text-gray-900">
                          About
                        </label>
                        <div className="mt-2">
                          <textarea
                            id="about"
                            readOnly={isEditing ? false : true}
                            value={
                              currentUserInfo.about
                                ? currentUserInfo.about
                                : userInfo.about
                            }
                            onChange={(e) =>
                              setCurrentUserInfo((prev) => ({
                                ...prev,
                                [e.target.name]: e.target.value,
                              }))
                            }
                            name="about"
                            rows={3}
                            className={
                              !isEditing
                                ? "block w-full rounded-md border-0 py-1.5 pl-2 outline-none"
                                : "block w-full rounded-md border-0 py-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 pl-2 sm:text-sm sm:leading-6"
                            }
                            defaultValue={""}
                          />
                        </div>
                        <p className="mt-3 text-sm leading-6 text-gray-600">
                          Write a few sentences about yourself.
                        </p>
                      </div>

                      <div className="sm:col-span-3">
                        <label className="block text-sm font-medium leading-6 text-gray-900">
                          Role
                        </label>
                        <div className="mt-2">
                          <input
                            readOnly={isEditing ? false : true}
                            value={
                              currentUserInfo.role
                                ? currentUserInfo.role
                                : userInfo.role
                            }
                            onChange={(e) =>
                              setCurrentUserInfo((prev) => ({
                                ...prev,
                                [e.target.name]: e.target.value,
                              }))
                            }
                            type="text"
                            name="role"
                            id="role"
                            autoComplete="role"
                            className={
                              !isEditing
                                ? "block w-full rounded-md border-0 py-1.5 pl-2 outline-none"
                                : "block w-full rounded-md border-0 py-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 pl-2 sm:text-sm sm:leading-6"
                            }
                          />
                        </div>
                      </div>

                      <div className="col-span-full">
                        <label className="block text-sm font-medium leading-6 text-gray-900">
                          Photo
                        </label>
                        <div className="mt-2 flex items-center justify-between gap-x-3">
                          <div className="flex">
                            <img
                              className="h-12 w-12 me-4 text-gray-300"
                              src={
                                currentUserInfo.imageUrl
                                  ? URL.createObjectURL(currentUserInfo.imageUrl)
                                  : userInfo.imageUrl 
                              }
                            />
                            <button
                              type="button"
                              className="rounded-md bg-white px-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                            >
                              <input
                                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                disabled={isEditing ? false : true}
                                accept=".jpg, .png, .jpeg"
                                id="file-upload"
                                name="imageUrl"
                                type="file"
                                onChange={(e) =>
                                  setCurrentUserInfo((prev) => ({
                                    ...prev,
                                    [e.target.name]: e.target.files[0],
                                  }))
                                }
                              />
                            </button>
                          </div>

                          <div className="mt-2 flex items-center justify-end gap-x-6">
                            <button
                              type="button"
                              onClick={() => toggleProfileModal(false)}
                              className="text-sm font-semibold leading-6 px-3 py-2 rounded-md bg-gray-200 text-gray-900"
                            >
                              Cancel
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                setIsEditing((prev) => !prev);
                                isEditing && submitForm();
                              }}
                              className={`rounded-md ${
                                isEditing ? "bg-green-600" : "bg-indigo-600"
                              } px-3 py-2 text-sm font-semibold text-white shadow-sm hover:${
                                isEditing ? "bg-green-500" : "bg-indigo-500"
                              }`}
                            >
                              {isEditing ? "Save" : "Edit"}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
