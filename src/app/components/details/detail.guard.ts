import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailGuard implements CanActivate {
  constructor(private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      let id = next.url[1].path;  // the first 0 is 'list', the second 1 is the id
      console.log(id);
      if(id.length && (isNaN(+id) || +id < 1)) {
        alert(`invalid id: ${id}` );    // this shows that can Activate will be triggered twice!! # routing has a bug (except firefox)
        this.router.navigate(['/list']);
        return false;
      };
      return true;
  }
}
