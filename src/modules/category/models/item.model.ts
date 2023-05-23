import {
  Table,
  Column,
  DataType,
  PrimaryKey,
  AutoIncrement,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  Model,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Category } from '.';

const { INTEGER, STRING } = DataType;

@Table({
  tableName: 'items',
  underscored: true,
  paranoid: true,
})
export class Item extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(INTEGER)
  id: number;

  @Column(STRING)
  name?: string;

  @Column(INTEGER)
  price?: number;

  @ForeignKey(() => Category)
  @Column(INTEGER)
  categoryId: number;

  @BelongsTo(() => Category)
  category: Category;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;

  @Column(INTEGER)
  createdBy: number;

  @Column(INTEGER)
  updatedBy: number;

  @Column(INTEGER)
  deletedBy: number;
}
