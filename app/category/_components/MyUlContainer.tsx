"use client"
import useDBStore from "@/hooks/useDBStore";

const MyUlContainer = () => {
  const {allGroupInfo} = useDBStore()

  return (
    <ul className="animate-slideDown mt-1 p-1 border border-solid border-gray-300 rounded-md divide-y divide-gray-200 sm:border-none sm:p-2">
          {allGroupInfo.map((item) => <li className="list" key={item}>{item}</li>)}
    </ul>
  )

}

export default MyUlContainer;