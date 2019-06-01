import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from './login.component';
@Injectable({
  providedIn: 'root'
})
export class EnsureLoginGuard implements CanDeactivate<LoginComponent>  {
  canDeactivate(
    component: LoginComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    if (component.name.trim()) {
      return confirm('是否要離開此頁面？');
    }

    return true;
  }
}
