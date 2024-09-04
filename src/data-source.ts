import "reflect-metadata"
import { DataSource } from "typeorm"
import { Apartamento } from "./entity/Apartamento"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123456",
    database: "controle_vaga",
    synchronize: true,
    logging: false,
    entities: [Apartamento],
    migrations: [],
    subscribers: [],
})
