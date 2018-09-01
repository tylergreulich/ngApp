import { Document } from 'mongoose';
import { IUser } from './user.interface';

export interface IMessage extends Document {
  content: string;
  user: IUser;
}
