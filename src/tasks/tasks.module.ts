import { Module } from '@nestjs/common';
import { TaskController } from './tasks.controllers';
import { TasksService } from './tasks.service';
@Module({
    controllers: [TaskController],
    providers: [TasksService] , 
})
export class TasksModule {}