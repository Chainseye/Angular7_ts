import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  contructor() {}
  // 路由守卫 => 进入
  canActivate(ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.switchCanActivateUrl(state.url);
  }
  // 路由守卫 => 离开
  canDeactivate(Component, ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.switchCanDeactivateUrl(state.url);
  }

  switchCanActivateUrl(url: string): boolean {
    // url such as "/model"
    return true;
  }
  switchCanDeactivateUrl(url: string): boolean {
    // url such as "/model"
    return true;
  }
}
