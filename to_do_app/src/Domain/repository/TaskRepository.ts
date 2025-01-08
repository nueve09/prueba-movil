export interface Taskrepository {
    getTasks(limit:number):Promise<any>
}