import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { AuthModel } from '../models/auth';
import { UserModel } from '../models/user';

class AuthController {
  async login(req: Request, res: Response) {
    try {
      const { username, password } = req.body;
      const user = await UserModel.findOne({ username, password });
      if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!);
      await AuthModel.create({ user: user._id, token });
      res.json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  async logout(req: Request, res: Response) {
    try {
      const { authorization } = req.headers;
      const token = authorization?.split(' ')[1];
      await AuthModel.findOneAndDelete({ token });
      res.json({ message: 'Logout successful' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}

export { AuthController };
