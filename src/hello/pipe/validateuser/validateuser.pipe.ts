import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidateuserPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('value', value)
  const ageNumber =  parseInt(value.age.toString(), 10)
    return value;
  }
}
