import { Controller, Get, HttpCode, Req, Res,Param, ParseIntPipe, ParseBoolPipe,Query, UseGuards } from '@nestjs/common';
import { Request,Response } from 'express';
import { ValidateuserPipe } from './pipe/validateuser/validateuser.pipe';
import { AuthGuard } from './guards/auth/auth.guard';
@Controller('')
export class HelloController {
    @Get('/')
    indexedDB(@Req() request: Request, @Res() response: Response){
        response.status(200).json({
            message: 'Hello World'
        })
    }
     
    @Get('new')
    @HttpCode(201)
    somethingNew(){
    return 'something new'
    }

    @Get('/notfound')
    @HttpCode(404)
    notFoundPage() {
        return '404 not found'
    }

    @Get('/error')
    @HttpCode(500)
    ErrorPage() {
        return 'error rute'
    }

    @Get('ticket/:num')
    getNumber(@Param('num', ParseIntPipe) num: number) {
       return num + 14 ; 
    }

    @Get('active/:status')
    isUserActive(@Param('status', ParseBoolPipe) status:boolean) {
      console.log(typeof status)
        return status;
    }
     @Get('greet')
     @UseGuards(AuthGuard)
    greet(@Query(ValidateuserPipe) query:{name:string , age:number}) {
        console.log(typeof query.name)
        console.log(typeof query.age)
       return `hello ${query.name} your age is ${query.age}`
    }
}
