import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "", loadComponent: () => import("./componentes/home/home.component").then(h => h.HomeComponent), pathMatch: "full"

    },
    {
        path: "login", loadComponent: () => import("./componentes/login/login.component").then(l => l.LoginComponent)
    },
    {
        path: "registro", loadComponent: () => import("./componentes/nav-regsitro/nav-regsitro.component").then(r => r.NavRegsitroComponent),
        children: [
            {

                path: "", loadComponent: () => import("./componentes/card-usuarios/card-usuarios.component").then(c => c.CardUsuariosComponent), pathMatch: "full"
            },
            {
                path: "paciente", loadComponent: () => import("./componentes/registro/registro.component").then(r => r.RegistroComponent)
            },
            {
                path: "especialista", loadComponent: () => import("./componentes/registro/registro.component").then(r => r.RegistroComponent)
            }
        ]
    },

];