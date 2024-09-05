import { ApartamentoController } from "./controller/ApartamentoController"
import { VeiculoController } from "./controller/VeiculoController "

export const Routes = [

    // Apartamento
    { method: "get", route: "/apartamentoList", controller: ApartamentoController, action: "all" },
    { method: "get", route: "/apartamento/:id", controller: ApartamentoController, action: "one" },
    { method: "post", route: "/apartamento", controller: ApartamentoController, action: "save" },
    { method: "put", route: "/apartamento/:id", controller: ApartamentoController, action: "update" },
    { method: "delete", route: "/apartamento/:id", controller: ApartamentoController, action: "remove" },

    // Veiculo
    { method: "get", route: "/veiculoList", controller: VeiculoController, action: "all" },
    { method: "get", route: "/veiculo/:id", controller: VeiculoController, action: "one" },
    { method: "post", route: "/veiculo", controller: VeiculoController, action: "save" },
    { method: "put", route: "/veiculo/:id", controller: VeiculoController, action: "update" },
    { method: "delete", route: "/veiculo/:id", controller: VeiculoController, action: "remove" }
]