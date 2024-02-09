import { Component, Inject, OnDestroy } from "@angular/core";
import { OidcSecurityService } from "angular-auth-oidc-client";
import { Subscription } from "rxjs";

@Component({
    selector: "my-app",
    template: `
        <h1>App</h1>
        <p *ngIf="authChecked">
            <b>Is authenticated:</b><br>
            {{ isAuthenticated }}
            <br>
            <b>Id token:</b><br>
            <code>{{ idToken }}</code>
            <br>
        </p>
        <p *ngIf="!authChecked">
            Checking auth...
        </p>
        <p>
            <button (click)="authorize()">Authorize</button>
        </p>
    `,
})
export class AppComponent implements OnDestroy {

    private readonly sub: Subscription;

    public authChecked = false;
    public isAuthenticated: boolean = false;
    public idToken?: string;

    constructor(
        private readonly oidcSecurityService: OidcSecurityService,
    ) {
        this.sub = this.oidcSecurityService.checkAuth().subscribe(({ isAuthenticated, idToken }) => {
            this.authChecked = true;
            this.isAuthenticated = isAuthenticated;
            this.idToken = idToken;
        });
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    authorize(): void {
        this.oidcSecurityService.authorize();
    }

}
