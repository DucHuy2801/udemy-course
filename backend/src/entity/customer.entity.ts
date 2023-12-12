import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CartEntity } from "./cart.entity";

@Entity('customer')
export class CustomerEntity {
    @PrimaryGeneratedColumn('uuid')
    customer_id: string

    @Column({ type: 'nvarchar', length: 100, nullable: true })
    avatar: string

    @Column({ type: 'nvarchar', length: 30 })
    first_name: string

    @Column({ type: 'nvarchar', length: 60 })
    last_name: string

    @Column({ type: 'tinyint', width: 2 })
    gender: boolean

    @Column({ type: 'date', nullable: true })
    date_of_birth: Date

    @Column({ type: 'char', length: 10 })
    phone_number: string

    @Column({ type: 'varchar', length: 100 })
    email: string

    @Column({ type: 'varchar', length: 100 })
    password: string

    @Column({ type: 'varchar', length: 200, nullable: true })
    hashedRt: string

    @Column({ type: 'varchar', length: 20 })
    role: string

    @OneToMany(() => CartEntity, (cart) => cart.customer)
    carts: CartEntity[]
}