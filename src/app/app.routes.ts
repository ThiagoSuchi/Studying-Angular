import { Routes } from '@angular/router';
import { Home } from './screens/home/home';

export const routes: Routes = [
    {
        path: '',
        component: Home 
        // Carregamento direto - carregado na inicialização
    },
    {
        // Lazy loading - não carrega o componente no início
        // só baixa esse código quando você acessa /counter
        path: 'counter',
        loadComponent: () => import('./screens/counter/counter').then(m => m.Counter)
    },
    {
        path: 'todos',
        loadComponent: () => import('./screens/todos/todos').then(m => m.Todos)
    }
];

// OBS: Tudo que não precisa carregar na inicialização → usa lazy loading