import { newsList } from "../data/mockNews";

export function getNewsList() {
    return Promise.resolve(newsList);
}