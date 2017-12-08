import { TaskHistory } from "./taskHistory";

export interface TaskHistoryHeader {
    enterpriseItemid?:string;
    parentProcessId?:string;
    taskHistory:Array<TaskHistory>;
}