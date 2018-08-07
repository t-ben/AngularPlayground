import {Pipe, PipeTransform} from '@angular/core';
/**
 * custom pipe. adding a char before and after some given string.
 */
@Pipe({
    name: 'decorate'
})
export class DecoratorPipe implements PipeTransform {
    transform(value: string, character: string) {
        return character + value + character;
    }

}