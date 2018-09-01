import { Schema, model } from 'mongoose';
import { IMessage } from '../interfaces/message.interface';

const MessageSchema: Schema = new Schema({
  content: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

export default model<IMessage>('Message', MessageSchema);
