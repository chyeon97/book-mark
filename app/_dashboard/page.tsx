"use client"
import {Card, MobileForm} from "@/components"
import {useState} from "react";

const DashBoard = () => {
    const [formOpen, setFormOpen] = useState(false)
    const onClickEnrollMobile = () => {
      console.log("onClickEnrollMobile")
      return setFormOpen(true)
    }

    const onClickAlarmMobile = () => {
      console.log("onClickAlarmMobile")
    }


    return (
      <>
        {formOpen && <MobileForm/>}
        <div className="flex flex-col w-full space-y-4 sm:space-y-4">
          <div className="hidden sm:flexRowMode sm:space_between space-x-4">
            <Card width="50%" bgColor="black" minHeight="1rem" padding="10">
              <h2>북마크 등록</h2>
              <p className="text-4xl text-right">⇀</p>
            </Card>

            <Card width="50%" bgColor="white" minHeight="1rem" padding="10">
              오늘 알람
            </Card>
          </div>

          <div className="space-y-4 mt-2 sm:hidden sm:space-y-0">
            <Card width="100%" bgColor="black" minHeight="1rem" padding="10" onClickCard={onClickEnrollMobile}>
              <h2>북마크 등록</h2>
            </Card>

            <Card width="100%" bgColor="white" minHeight="1rem" padding="10" onClickCard={onClickAlarmMobile}>
              오늘 알람
            </Card>
          </div>

          {/*<Card width="100%" bgColor="white" minHeight="2rem" padding="10">*/}
          {/*  차트*/}
          {/*</Card>*/}

        </div>
      </>

    )
}
export default DashBoard