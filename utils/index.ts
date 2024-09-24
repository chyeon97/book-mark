import api from './api';
import url from "@/Enums/url";
import {DocDataType} from "@/types";

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

export const filterGroupData = (datas: DocDataType[]): string[] => {
    return [...datas.reduce<Set<string>>((acc, cur) => {
        acc.add(cur.group)
        return acc;
    }, new Set<string>())];
}

export const isEmptyData = (type: "enroll" | "delete" | "modify", datas: DocDataType): boolean => {
    switch(type){
        case "enroll":
            return Object.values(datas).some((value) => value === "" || value === undefined || value === null)
            

            default:
                return true; 
    }
}

