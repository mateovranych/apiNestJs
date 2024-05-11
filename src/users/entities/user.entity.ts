import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    username: string;
    @Column({unique:true , nullable :false })
    email: string;
    @Column()
    password: string;
    @Column({default: 'user'})
    role: string;
    @DeleteDateColumn()
    deleteAt: Date;

}