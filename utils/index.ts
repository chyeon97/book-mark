import api from './api';
import url from "@/Enums/url";


export const getURL = (text: string) => {
    switch (text) {
        case "대시보드":
            return url.MAIN

        case "카테고리":
            return url.CATEGORY

        case "알림":
            return "/"

        default:
            return url.MAIN
    }
}

export {
  api,

}