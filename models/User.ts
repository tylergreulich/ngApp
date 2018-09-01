import * as jwt from 'jsonwebtoken';
import { Schema, Document, model } from 'mongoose';
import { IUser } from '../interfaces/user.interface';
import { IPayload } from '../interfaces/payload.interface';
import { Response } from 'express';

const UserSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  messages: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Message'
    }
  ]
});

UserSchema.methods.generateAuthToken = (payload: IPayload, res: Response) => {
  const token = jwt.sign(
    payload,
    'secret',
    { expiresIn: 3600 },
    (err: Error, token: string) => {
      res.status(200).json({ success: true, token: `Bearer ${token}` });
    }
  );
};

export default model<IUser>('User', UserSchema);
