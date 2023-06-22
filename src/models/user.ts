import { Schema, model } from 'mongoose';

interface User {
  username: string;
  password: string;
}

const userSchema = new Schema<User>({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

const UserModel = model<User>('User', userSchema);

export { User, UserModel };
