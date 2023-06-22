import { Schema, model } from 'mongoose';

interface Auth {
  user: string;
  token: string;
}

const authSchema = new Schema<Auth>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  token: { type: String, required: true },
});

const AuthModel = model<Auth>('Auth', authSchema);

export { Auth, AuthModel };
