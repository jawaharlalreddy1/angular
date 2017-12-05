import { TaskHistory } from "./taskHistory";

export interface TaskHistoryHeader {
    enterpriseItemid?:string;
    parentProcessId?:number;
    taskHistory:Array<TaskHistory>;
}