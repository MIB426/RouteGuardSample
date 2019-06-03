import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const canActivate = next.queryParams.name === 'Leo';

    if (!canActivate) {
      alert('你不是Leo，不能進去！');
      this.router.navigate(['/login'], {
        queryParams: {
          return: state.url
        }
      });

    }

    return canActivate;
  }
}
