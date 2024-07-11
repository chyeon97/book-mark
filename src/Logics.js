export const getGroupList = (datas) => {
    const result = new Set([]);
    datas.map((item) => result.add(item.group))
    return [...result];
}