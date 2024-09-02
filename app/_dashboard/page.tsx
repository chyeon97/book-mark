"use client"
import {Card, MyObjectList} from "@/components"
import {MobileForm} from "./components"
import {useState, useEffect, useMemo} from "react";
import API from "@/utils/api";
import {DocDataType} from "@/types";
import useDBStore from "@/hooks/useDBStore";
import useMenu from "@/hooks/useMenu";
import {filterGroupData} from "@/utils";

const DashBoard = () => {
    const {onSelectedItem} = useMenu()
    const {setGroupInfo} = useDBStore();
    const api = useMemo(() => new API(), [])
    const [formOpen, setFormOpen] = useState(false)
    const [allList, setAllList] = useState<DocDataType[]>([]);

    useEffect(() => {
      ( async () => {
        const getAllDatas = await api.getAllData();
        const filterGroupInfo = filterGroupData(getAllDatas)
        setGroupInfo(filterGroupInfo);
        onSelectedItem(filterGroupInfo[0]);
        setAllList(getAllDatas)
      })();

    }, [])

    const onToggleEnrollMForm = () => {
      return setFormOpen((state) => !state)
    }

    const onClickAlarmMobile = () => {
      console.log("onClickAlarmMobile")
    }

    return (
      <>
        {formOpen && <MobileForm onToggleForm={onToggleEnrollMForm}/>}
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
            <Card width="100%" bgColor="black" minHeight="1rem" padding="10" onClickCard={onToggleEnrollMForm}>
              <h2>북마크 등록</h2>
            </Card>

            <Card width="100%" bgColor="white" minHeight="1rem" padding="10" onClickCard={onClickAlarmMobile}>
              <h3 className="bold">오늘 알람</h3>
            </Card>

            <div>
              <h3 className="bold">최근 저장한 북마크</h3>
              <Card width="100%" bgColor="white" minHeight="1rem" padding="0">

                <ul>
                  {allList.map((items) => {
                    return (
                      <MyObjectList col={true}>
                        {items}
                      </MyObjectList>
                    )
                  })}
                </ul>
              </Card>
            </div>
          </div>

          {/*<Card width="100%" bgColor="white" minHeight="2rem" padding="10">*/}
          {/*  차트*/}
          {/*</Card>*/}

        </div>
      </>

    )
}
export default DashBoard