import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hidePassword'
})
export class HidePasswordPipe implements PipeTransform {

  transform(input: string): string {
    let inputsize=input.length;
        let output='';
        for(let i=0;i<inputsize;i++){
    
          output=output+'*';
        }
        return output;
      }

}
