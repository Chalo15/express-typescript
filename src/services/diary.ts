import { DiaryEntry ,NonSensitiveInfoDiary} from "../types";
import diaryData from "./diaries.json";

const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>;
export const getEntries = () => diaries;

export const getEntriesWithoutSensitiveInfo=(): NonSensitiveInfoDiary[]=>diaries
export const addEntry = ():undefined => undefined;
