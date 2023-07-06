// 'use client'
// import { useEffect, useState } from "react";
// import { addDoc, collection, deleteDoc, doc, getDocs, setDoc, updateDoc } from "firebase/firestore";
// import { db } from "@/utils/firebase";
// import { useRouter } from "next/navigation";
// // import { deleteDoc } from "firebase/firestore";
// import {BsFillSkipBackwardCircleFill} from "react-icons/bs"


// const TodoMsg = ()=>{
//     const router = useRouter()
//     // const [inputs,setInputs] = useState("")
//     const [id, setId] = useState("")
//     const [val,setVal] = useState([])
//     const [description,setDescription] = useState("")
//     const [show, setShow]=useState(false)

//     // const handleChange = (e)=>{
//     //     const name = e.target.name;
//     //     const value = e.target.value;

//     //     setInputs((values)=>({...values,[name]:value}))
//     // }

//     const handleSubmit = async(e)=>{
//         e.preventDefault();
//         await setDoc(doc(db,"todo",Date.now().toString()),{description:description})
//     };

//     const value = collection(db,"todo");

//     useEffect(()=>{
//         const getData = async (e)=>{
//             const dbVal = await getDocs(value);
//             setVal(dbVal.docs.map((doc)=>({...doc.data(),id:doc.id})))
//         };
//         getData();
//     },[val]);
//     const handleEdit = async(e)=>{
//       e.preventDefault();
//       const updatateData = doc(db,"todo",id)
//       await updateDoc(updatateData,{description:description})
//       setShow(false)
//       setDescription("")

//     }

//     const handleDelete =async(id)=>{
//         await deleteDoc(doc(db,"todo",id))
//     };

//     const handleUpdate=(id,description)=>{
//       setDescription(description)
//       setId(id)
//       setShow(true)
//     }
   
  
//     return (
//       <div>
        
//         <form>
//           <label htmlFor="chat" className="sr-only">
//             Your message
//           </label>
//           <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
//             <button
//               type="button"
//               className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
//             >
//               <svg
//                 aria-hidden="true"
//                 className="w-6 h-6"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
//                   clipRule="evenodd"
//                 ></path>
//               </svg>
//               <span className="sr-only">Upload image</span>
//             </button>
//             <button
//               type="button"
//               className="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
//             >
//               <svg
//                 aria-hidden="true"
//                 className="w-6 h-6"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
//                   clipRule="evenodd"
//                 ></path>
//               </svg>
//               <span className="sr-only">Add emoji</span>
//             </button>
//             <input
//               name="description"
//               id="chat"
//               rows="5"
//               value={description}
//               className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//               placeholder="Your message..."
//               onChange={(e)=>setDescription(e.target.value)}
//             ></input>
//             {show? <button
//               type="submit"
//               onClick={handleEdit}
//               className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
//             >
//               <svg
//                 aria-hidden="true"
//                 className="w-6 h-6 rotate-90"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
//               </svg>
//               <span className="sr-only">Send message</span>
//             </button>:
//             <button
//               type="submit"
//               onClick={handleSubmit}
//               className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
//             >
//               <svg
//                 aria-hidden="true"
//                 className="w-6 h-6 rotate-90"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
//               </svg>
//               <span className="sr-only">Send message</span>
//             </button>}
//           </div>
//           <div className="mt-10 ">
//               <button
//                 type="button"
//                 onClick={()=>router.push("/profile")}
//                 className="text-gray-900 bg-gradient-to-r flex items-center gap-2 from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
//               >
//                <BsFillSkipBackwardCircleFill size={30}/> <span className="text-xl">Back</span>
//               </button>
//             </div>
//         </form>
//         {val.map((item, key) => {
//           return (
//             <div className="flex justify-center items-center flex-col mt-5">
//               <div className="border-2 border-black w-96 flex justify-center items-center flex-col gap-2 bg-black rounded-lg">
//                 <div className=" flex gap-2">
//                   <h1 key={key} className="text-xl text-white">
//                     {item.description}
//                   </h1>
//                 </div>
//                 <div className="flex justify-center gap-2">
//                   <button className="bg-green-500 text-white  p-2 px-4 rounded-md" onClick={()=>handleUpdate(item.id,item.description)}>
//                     UPDATE
//                   </button>
//                   <button
//                     onClick={() => handleDelete(item.id)}
//                     className="bg-red-600 text-white p-2 rounded-md"
//                   >
//                     DELETE
//                   </button>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     );
// };

// export default TodoMsg;