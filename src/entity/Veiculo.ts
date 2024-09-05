import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Apartamento } from "./Apartamento";

@Entity()
export class Veiculo {

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Apartamento, apartamento => apartamento.veiculos)
    apartamento: Apartamento;

    @Column({ length: 30, nullable: false})
    marca: string

    @Column({ length: 30, nullable: false})
    modelo: string

    @Column({ length: 15, nullable: false})
    cor: string

    @Column({ length: 7, nullable: false})
    placa: string
}
