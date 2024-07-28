import { Injectable, HttpCode, NotFoundException } from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";

@Injectable()
export class TasksService {

    private tasks = [] ; 

    getTasks() {
        return this.tasks ; 
    } 
    
  getTask(id:number) {
  const result = this.tasks.find(task => task.id === id);
  if(!result) {
    return new NotFoundException('Task not found')
  } else {
    return result; 
  }
  }

    createTask(task:CreateTaskDto) {

        console.log(task)
        this.tasks.push({
            ...task,
            id: this.tasks.length + 1
        });
        return task ; 
}

    updateTask(task:UpdateTaskDto) {
        return 'update task';
    }

    deleteTask() {
        return 'delete task';
    }

    patchTask() {
        return 'patch task';
    }
}