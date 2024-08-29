import {useState} from "react";
import { SearchInput } from "@/components";
import FormButton from "./FormButton";
import {DocDataType} from "@/types";

interface MobileFormProps {
    onToggleForm: () => void
}

interface matchKeyProps {
    [index: string] : string
    카테고리: string
    URL: string
    설명: string
}

const MobileForm = ({ onToggleForm }: MobileFormProps) => {
    const [info, setInfo] = useState<DocDataType>({
        group: "",
        content: "",
        url: "",
        deleteTime: "",
        storeTime: new Date(),
    })

    const onChangeInfo = (e:React.ChangeEvent<HTMLInputElement>) => {
        const matchKey:matchKeyProps = {
            "카테고리": "group",
            "URL": "url",
            "설명": "content",
        }
        return setInfo((prev) => {
            return {
                ...prev,
                [matchKey[e.target.id]]: e.target.value
            }
        })

    }

    return (
        <>
            <div className="absolute top-0 left-0 right-0 h-full bg-slate-50 opacity-60" onClick={onToggleForm}/>
            <div className="absolute w-full bottom-0 left-0 right-0 p-6 border rounded-t-2xl border-solid bg-white animate-slideUp">
                <form action="" method="post">
                    <h3 className="font-bold">나중에 방문할 웹 사이트를 등록해보세요</h3>
                    <h6 className="text-sm">잊지말고 기록하세요</h6>

                    <br />
                    <SearchInput label="카테고리" value={info.group} onChangeValue={onChangeInfo} />
                    <SearchInput label="URL" value={info.url} onChangeValue={onChangeInfo} />
                    <SearchInput label="설명" value={info.content} onChangeValue={onChangeInfo} />

                    <div className="text-right space-x-7">
                        <FormButton label="취소" type="button" bgColor="white" onClickBtn={onToggleForm} />
                        <FormButton label="확인" type="submit" bgColor="black" onClickBtn={() => { }} />
                    </div>

                </form>

            </div>
        </>

    )
}

export default MobileForm;