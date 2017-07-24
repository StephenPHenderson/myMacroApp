import { Route } from "@angular/router/src";
import { Type } from "@angular/core/src/type";

export class NavItem implements Route {
    public title:string;
    public path:string;
    public component: Type<any>;;
}