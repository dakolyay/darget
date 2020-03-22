import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({name: 'workers'})
export class Worker {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    position: string;

    @Column()
    phoneNumber: string;

    @Column()
    email: string;
}