import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>; // toda la consulta que se realice devolvera informacion sobre la coleccion

@Schema()
export class User {
  @Prop({ required: true })
  first_name: string; // esto es una propiedad del schema User

  @Prop()
  last_name: string;

  @Prop({ required: true, unique: true })
  email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
