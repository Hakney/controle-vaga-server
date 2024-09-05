import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Veiculo } from "./Veiculo"

@Entity()
export class Apartamento {

    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable: false})
    bloco: number

    @Column({nullable: false})
    apartamento: number

    @Column({ length: 150, nullable: false})
    morador: string

    @Column({ length: 13, nullable: false})
    telefone: string

    @Column({ length: 100, nullable: true})
    email: string

    @OneToMany(() => Veiculo, veiculo => veiculo.apartamento)
    veiculos: Veiculo[];
}
