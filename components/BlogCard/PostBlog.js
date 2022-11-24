import { Dialog, Transition } from "@headlessui/react";
import React, { useRef } from "react";
import { Fragment, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import SunEditor, { buttonList } from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";

export default function BlogAlone() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  const navigate = useNavigate();
  function openModal() {
    setIsOpen(true);
  }
  const myEditor = useRef(null);
  const getSunEditorInstance = (sunEditor) => {
    myEditor.current = sunEditor;
    // console.log(sunEditor);
  };
  const handleChange = (content) => {
    localStorage.setItem("content", content);
    console.log(content); //Get Content Inside Editor
  };
  const uploadImage = async (file) => {
    const fdata = new FormData();
    // console.log("size--->", file.size, "bytes");
    fdata.append("upload", file);
    const requestOptions = {
      method: "POST",
      // headers: {cookie_token:localStorage.getItem('cookie_token')},
      body: fdata,
    };
    // console.log(listDetails)
    // console.log(requestOptions)
    const data = await fetch(
      "https://whale-app-ulq4x.ondigitalocean.app/blog/image",
      requestOptions
    );
    const response = await data.json();

    // console.log(response.fileURL)
    // console.log(response);
    return response.fileURL;
  };
  function handleImageUploadBefore(files, info, uploadHandler) {
    // uploadHandler is a function
    uploadImage(files[0])
      .then((data) =>
        uploadHandler({
          result: [{ url: data, size: files[0].size, name: files[0].name }],
        })
      )
      .catch((err) => {
        console.log(err);
        uploadHandler("Image could not be uploaded");
      });
    // console.log(files, info, uploadHandler);
  }

  const handleImageUploadError = (errorMessage, result) => {
    alert(errorMessage);
    // console.log(result)
  };
  const handleVideoUploadBefore = (files, info, uploadHandler) => {
    // uploadHandler is a function
    // console.log(files, info);
  };
  // const [setSubmut, setSetSubmut] = useState(false)
  const submitStory = () => {
    // console.log("hii")
    setIsOpen(true);
  };
  const [blogDetails, setBlogDetails] = useState({});

  const handleChangeDetails = (e) => {
    setBlogDetails({ ...blogDetails, [e.target.name]: e.target.value });
  };

  const [inputImage, setInputImage] = useState(null);

  const onImageChangeImage = (e) => {
    // console.log(e.target.value)
    if (e.target.files && e.target.files[0]) {
      setInputImage({
        [e.target.name]: e.target.files[0],
      });
    }
  };

  const postBlog = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append(
      "coverImage",
      inputImage.coverImage,
      inputImage.coverImage.name
    );
    for (const key in blogDetails) {
      formData.append(key, blogDetails[key]);
    }
    // console.log(blogDetails)
    formData.append("body", localStorage.getItem("content"));
    const requestOptions = {
      method: "POST",
      // headers: { cookie_token: localStorage.getItem('cookie_token') },
      body: formData,
    };
    // console.log(requestOptions)
    fetch("https://whale-app-ulq4x.ondigitalocean.app/blog", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        navigate("/blog");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="absolute h-[90vh] top-[10vh]">
      <SunEditor
        name="Prince"
        getSunEditorInstance={getSunEditorInstance}
        height="90vh"
        width="100vw"
        placeholder="Start writing here..."
        autoFocus={true}
        onChange={handleChange}
        defaultValue={localStorage.getItem("content")}
        onImageUploadBefore={handleImageUploadBefore}
        onImageUploadError={handleImageUploadError}
        setDefaultStyle="font-family: 'EB Garamond', serif, Roboto; font-size: 22px;"
        setOptions={{
          buttonList: buttonList.complex,
          charCounter: true,
          charCounterType: "char",
          callBackSave: function (contents, isChanged) {
            submitStory();
          },
        }}
      />
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
            <div className="fixed inset-0 bg-black bg-opacity-25" />
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
                    className="text-xl font-semibold leading-6 text-gray-900"
                  >
                    Blog
                  </Dialog.Title>
                  <div className="mt-2 ">
                    <form onSubmit={postBlog} className="flex gap-3 flex-col">
                      <div className="flex gap-1 flex-col">
                        <label className="w-fit font-medium" htmlFor="title">
                          Title
                        </label>
                        <input
                          required
                          onChange={handleChangeDetails}
                          type="text"
                          className="rounded-md px-3 py-1.5"
                          name="title"
                          id=""
                        />
                      </div>
                      <div className="flex gap-1 flex-col">
                        <label
                          className="w-fit font-medium"
                          htmlFor="description"
                        >
                          Description
                        </label>
                        <input
                          required
                          onChange={handleChangeDetails}
                          type="text"
                          className="rounded-md px-3 py-1.5"
                          name="description"
                          id=""
                        />
                      </div>
                      <div className="flex gap-1 flex-col">
                        <label className="w-fit font-medium" htmlFor="author">
                          Author
                        </label>
                        <input
                          required
                          onChange={handleChangeDetails}
                          type="text"
                          className="rounded-md px-3 py-1.5"
                          name="author"
                          id=""
                        />
                      </div>
                      <div className="flex gap-1 flex-col">
                        <label className="w-fit font-medium" htmlFor="image">
                          Main image
                        </label>
                        <input
                          required
                          name="coverImage"
                          onChange={onImageChangeImage}
                          type="file"
                          className="rounded-md px-3 py-1.5"
                          id=""
                        />
                      </div>

                      <div className="mt-4 flex justify-between">
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={closeModal}
                        >
                          Close
                        </button>
                        <button
                          type="submit"
                          className="inline-flex justify-center rounded-md border border-transparent bg-deep_purple_400 px-4 py-2 text-sm font-medium text-white hover:bg-deep_purple_500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          // onClick={closeModal}
                        >
                          Post
                        </button>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
