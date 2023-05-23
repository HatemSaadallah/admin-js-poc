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
} from 'sequelize-typescript';

const { INTEGER, STRING } = DataType;

@Table({
  tableName: 'categories',
  underscored: true,
  paranoid: true,
})
export class Category extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(INTEGER)
  id: number;

  @Column(STRING)
  name?: string;

  @Column(INTEGER)
  price?: number;

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
