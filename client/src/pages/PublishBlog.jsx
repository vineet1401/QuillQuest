import { useEffect, useRef, useState } from "react";
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
import { Editor } from "@tinymce/tinymce-react";
import { PhotoIcon } from "@heroicons/react/16/solid";
import UserInfo from "../components/UserInfo";

export default function PublishBlog({ publishBlog, togglePublishBlog }) {
  const userInfo = useSelector((state) => state.user.userInfo);
  const dispatch = useDispatch();

  const [currentBlogInfo, setCurrentBlogInfo] = useState({});

  const validateForm = () => {
    if (!currentBlogInfo?.title?.trim()) {
      toast.error(`Please enter a Title`);
      return false;
    }
    if (!currentBlogInfo?.description?.trim()) {
      toast.error(`Please enter a Description`);
      return false;
    }
    if (!currentBlogInfo?.category?.trim()) {
      toast.error(`Please enter a Category`);
      return false;
    }
    if (!currentBlogInfo?.coverPhoto?.name?.trim()) {
      toast.error(`Please enter a Cover Photo`);
      return false;
    }
    if (currentBlogInfo?.["content.textContent"].length < 5000) {
      toast.error(`Content Length should be at least 5  000 characters.`);
      return false;
    }
    return true;
  };

  const submitForm = async () => {
    if (!validateForm()) return;
    try {
      const response = await axios.request({
        method: "POST",
        url: `${usebaseUrl()}/api/blog/postBlog`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("validationToken")}`,
          "Content-Type": "multipart/form-data",
        },
        data: currentBlogInfo,
      });
      if (response.data.success) {
        // dispatch(setUserInfo(currentBlogInfo));
        toast.success(response.data.message);
        setCurrentBlogInfo({});
        togglePublishBlog(!publishBlog);
      } else {
        toast.error(response.data.message);
      }
    } catch (e) {
      toast.error(e.response.data.message);
      console.log("Error in PublishBlog->submitForm", e);
    }
  };

  const category = [
    { name: "Select" },
    { name: "History" },
    { name: "General Knowledge" },
    { name: "Technology" },
    { name: "Current Affair" },
    { name: "Entertainment" },
  ];

  const editorRef = useRef(null);
  const initaiteSubmitForm = () => {
    if (editorRef.current) {
      setCurrentBlogInfo(prev => ({...prev, ["content.textContent"] : editorRef.current.getContent()}));
      submitForm();
    }
  };

  return (
    <Transition show={publishBlog}>
      <Dialog onClose={togglePublishBlog}>
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
              <DialogPanel className="relative transform overflow-hidden rounded-lg p-5 bg-white text-left shadow-xl transition-all md:mx-5 sm:my-8 sm:w-full md:max-w-5xl lg:max-w-7xl">
                <h2 className="font-semibold uppercase leading-7 text-2xl text-center text-gray-900">
                  Blog Information
                </h2>

                <div className="border-b grid md:grid-cols-2 gap-5 border-gray-900/10 pb-6 space-y-6">
                  <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                    <div className="col-span-full">
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        Blog Title
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="title"
                          value={currentBlogInfo.title || ""}
                          onChange={(e) =>
                            setCurrentBlogInfo((prev) => ({
                              ...prev,
                              [e.target.name]: e.target.value,
                            }))
                          }
                          className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="col-span-full">
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        Description
                      </label>
                      <div className="mt-1">
                        <textarea
                          name="description"
                          value={currentBlogInfo.description || ""}
                          onChange={(e) =>
                            setCurrentBlogInfo((prev) => ({
                              ...prev,
                              [e.target.name]: e.target.value,
                            }))
                          }
                          rows={3}
                          className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="Enter the short description of the blog."
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        Category
                      </label>
                      <div className="mt-1">
                        <select
                          value={currentBlogInfo.category || ""}
                          onChange={(e) =>
                            setCurrentBlogInfo((prev) => ({
                              ...prev,
                              [e.target.name]: e.target.value,
                            }))
                          }
                          name="category"
                          className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        >
                          {category.map((cat, index) => (
                            <option key={index} value={cat.name}>
                              {cat.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="col-span-full">
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        Cover photo
                      </label>
                      <div className="mt-1 flex justify-center rounded-lg border border-dashed border-gray-900/100 px-6 py-10">
                        <div className="text-center">
                          {
                            currentBlogInfo.coverPhoto ? (
                              <img
                                className="mx-auto h-16 w-126 mx-auto text-gray-300"
                                aria-hidden="true"
                                src={URL.createObjectURL(currentBlogInfo.coverPhoto)}
                              />
                            ) : (
                              <PhotoIcon
                                className="mx-auto h-16 w-126 mx-auto text-gray-300"
                                aria-hidden="true"
                              />
                            )
                          }
                          <div className="mt-2 flex text-sm leading-6 text-gray-600">
                            <label className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                              <span>Upload a file</span>
                              <input
                                name="coverPhoto"
                                type="file"
                                // value={currentBlogInfo.title || ""}
                                onChange={(e) =>
                                  setCurrentBlogInfo((prev) => ({
                                    ...prev,
                                    [e.target.name]: e.target.files[0],
                                  }))
                                }
                                className="sr-only"
                              />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs leading-5 text-gray-600">
                            PNG, JPG, GIF up to 10MB
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-900/50">
                    <label className="block text-sm md:text-xl text-center mb-2 font-medium leading-6 text-gray-900">
                      Content of the blog
                    </label>
                    <Editor
                      apiKey="prd4t8hly97okxqd50m6z0jb8o6a0bu2fsa5jse96bim2jh3"
                      onInit={(evt, editor) => (editorRef.current = editor)}
                      initialValue="<p>This is the initial content of the editor.</p>"
                      init={{
                        height: 500,
                        menubar: false,
                        plugins: [
                          "ai preview powerpaste casechange footnotes tinycomments searchreplace autolink autosave save directionality advcode visualblocks visualchars fullscreen image link media mediaembed advtemplate codesample table charmap pagebreak nonbreaking anchor tableofcontents insertdatetime advlist lists checklist wordcount tinymcespellchecker mergetags a11ychecker editimage help formatpainter permanentpen pageembed charmap quickbars linkchecker emoticons advtable export mentions typography markdown importword",
                        ],
                        toolbar:
                          "undo redo | importword | aidialog aishortcuts | blocks fontsizeinput | bold italic | align numlist bullist | link image | table media pageembed link | lineheight  outdent indent | strikethrough forecolor backcolor formatpainter removeformat | charmap emoticons checklist | code fullscreen preview | save print export | pagebreak anchor codesample footnotes mergetags | addtemplate inserttemplate | addcomment showcomments | ltr rtl casechange | spellcheckdialog a11ycheck",
                        importword_service_url: "add.url.here",
                        templates: [],
                        content_style:
                          "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                      }}
                    />
                  </div>
                </div>
                <div className="mt-2 flex flex-col md:flex-row md:justify-between">
                  <button
                    className="block  rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={initaiteSubmitForm}
                  >
                    Publish
                  </button>
                  <UserInfo />
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
