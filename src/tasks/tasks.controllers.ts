import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";
@Controller('/tasks')
export class TaskController {  

    constructor( private taskService: TasksService) {
     
    } 

    @Get()
    getAllTasks(@Query() query: any) {
      console.log(query); 
      return   this.taskService.getTasks(); 
  }
  @Get('/:id')
  getTask(@Param('id') id:string) { 
    return   this.taskService.getTask(parseInt(id)); 
}


  @Post()
  createTask(@Body() task:CreateTaskDto) { 
    return  this.taskService.createTask(task); 
} ; 

@Put()
updateTask(@Body() task:UpdateTaskDto) {
  return this.taskService.updateTask(task);  
}


@Delete()
deleteTask() {
  return this.taskService.deleteTask(); 
}

@Patch() 
  patchTask() {
  return  this.taskService.patchTask();  
  }

}