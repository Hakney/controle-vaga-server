import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

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
}
