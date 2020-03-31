import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({name: 'rooms'})
export class Room {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    location: string;

    @Column()
    description: string;

    @Column({
        default: true
    })
    available: boolean;

    @Column()
    imageUrl: string;

}