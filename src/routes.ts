import { ApartamentoController } from "./controller/ApartamentoController"

export const Routes = [
    { method: "get", route: "/apartamentoList", controller: ApartamentoController, action: "all" },
    { method: "get", route: "/apartamento/:id", controller: ApartamentoController, action: "one" },
    { method: "post", route: "/apartamento", controller: ApartamentoController, action: "save" },
    { method: "delete", route: "/apartamento/:id", controller: ApartamentoController, action: "remove" }
]