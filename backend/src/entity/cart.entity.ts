import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { CartDetailEntity } from './cart_detail.entity'
import { CustomerEntity } from './customer.entity'

@Entity('cart')
export class CartEntity {
    @PrimaryGeneratedColumn('uuid')
    cart_id: string

    @Column({ type: 'tinyint', width: 2})
    isCompleted: boolean

    @ManyToOne(() => CustomerEntity, (customer) => customer.carts)
    @JoinColumn({ name: 'customer_id' })
    customer: CustomerEntity

    @OneToMany(() => CartDetailEntity, (cartDetail) => cartDetail.cart)
    cartDetail: CartDetailEntity[]
}