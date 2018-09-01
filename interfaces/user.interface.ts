import { Document } from 'mongoose';
import { Response } from 'express';
import { IPayload } from './payload.interface';
import { IMessage } from './message.interface';

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  messages: [IMessage];
  generateAuthToken: (payload: IPayload, res: Response) => object;
}
