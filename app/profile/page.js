'use client'
import { useRouter } from "next/navigation";
import {BiLogOut} from "react-icons/bi"
import Image from "next/image";
import withAuth from "@/Components/protected/Protected";
import {TfiShareAlt} from "react-icons/tfi"
import { collection, doc, getDocs, query, where } from "firebase/firestore";
import { db } from "@/utils/firebase";
import Login from "@/Components/Login/login";
import { useEffect, useState } from "react";

const ProfilePage = ()=>{
    const router = useRouter()
    const [input,setInput] = useState([]);

  const getDatas = async()=>{
    const q = query(collection(db,"data"),where("email", "==",userEmail))
  // console.log(q);
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc)=>{
    let data = doc.data();
    data.id = doc.id;
    setInput((userPost)=>[...userPost,data])
  })
  console.log(querySnapshot);
  console.log(setInput);
  console.log(typeof setInput);

}
    const userEmail = JSON.parse(localStorage.getItem('user'));
    console.log(userEmail);
    useEffect(()=>{
      getDatas()
    },[])
    const handleLogout = ()=>{
      localStorage.removeItem("user")
      console.log("Logout success");
      router.push("/")

    }
    return (
      <>
        <div>
          <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <a href="https://flowbite.com/" className="flex items-center">

                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Darth Vectivus
                </span>
              </a>
              <div className="flex md:order-2">
                <button
                  type="button"
                  className="text-white flex justify-center items-center gap-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={handleLogout}
                >
                  <BiLogOut size={20} /> Log Out
                </button>
                <button
                  data-collapse-toggle="navbar-sticky"
                  type="button"
                  className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="navbar-sticky"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div
                className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                id="navbar-sticky"
              >
                <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  <li>
                    <a
                      href="#"
                      className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                      aria-current="page"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      onClick={() => router.push("/profile/todo")}
                    >
                      Todo's
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        {/* <div className=" w-screen h-screen">
        <div className="relative bg-gray-300 w-full h-[300px] rounded-2xl">
          <div className="bg-red-300 w-36 first-letter: h-40 rounded-full border-2 border-white absolute bottom-0 left-20">
              
          </div>
        </div>
        </div> */}
        <div className="w-screen h-screen bg-white shadow-2xl">
          <div className="bg-orange-300 w-full h-80 rounded-2xl relative">
            <div className=" w-36 h-52 rounded-full absolute  bottom-0 left-0 ms-20 border-2">
              <Image
                src="/images/virat.png"
                width={100}
                height={500}
                alt="virat.png"
                className="w-36 h-52 rounded-full"
              />
            </div>
          </div>
          <div className="mt-4">
            <h2 className="ms-10 text-2xl">Dheena</h2>
            <p className="ms-10 text-lg opacity-80">
              Los Angeles, United States
            </p>
            <p className="ms-10 text-md opacity-40">@amanda</p>

            <button
              type="button"
              className="py-2.5 px-5 ms-10 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            onClick={()=>router.push("/profile/todo")}
            >
              Message
            </button>
            <button
              type="button"
              className="text-white ms-10 flex justify-center items-center gap-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              <TfiShareAlt size={20}/>Share Profile
            </button>
          </div>
        </div>
      </>
    );
};

export default withAuth (ProfilePage);