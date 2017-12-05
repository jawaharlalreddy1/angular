import { TaskHistoryDetails } from "./taskHistoryDetails";


export interface TaskHistory {
    taskId?:number;
    taskDescription?:string;
    status?:string;
    user?:string;
    dateTimeStamp?:Date;
    taskHistoryDetails:Array<TaskHistoryDetails>;        
};
    