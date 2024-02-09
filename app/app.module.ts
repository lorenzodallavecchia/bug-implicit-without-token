import { NgModule, APP_INITIALIZER } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AuthModule, LogLevel } from "angular-auth-oidc-client";

import { AppComponent } from "./app.component";

@NgModule({
    imports: [
        BrowserModule,
        AuthModule.forRoot({
            config: {
				authority: "https://oidctest.wsweet.org/",
				clientId: "public",
				responseType: "id_token",
				scope: "openid profile email offline_access",
				redirectUrl: window.location.origin + window.location.pathname,
				logLevel: LogLevel.Debug,
			},
        }),
    ],
    declarations: [
        AppComponent,
    ],
    bootstrap: [
        AppComponent,
    ]
})
export class AppModule {
}
