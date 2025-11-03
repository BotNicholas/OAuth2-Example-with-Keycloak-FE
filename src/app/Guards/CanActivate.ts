import {inject} from '@angular/core';
import {TestService} from '../services/test.service';
import {filter, map, retry} from 'rxjs';

export const canActivate = () => {
  alert("guard")
  const testService = inject(TestService);    // получаем сервис
  console.log(testService.subj.getValue())
  if(!testService.subj.getValue()) {
    testService.getActivation();
    return testService.subj.pipe(filter(res => res), map(res => res));
  } else {
    return true;
  }

};
