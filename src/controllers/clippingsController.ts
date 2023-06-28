import { Request, Response } from 'express'; 
import { ClippingModel } from '../models/clipping';

class ClippingController { 

  async createClipping(req: Request, res: Response) { 

    try {
      const { username, password } = req.body;
      const clipping = await ClippingModel.create({ username, password });
      res.status(201).json(clipping);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    } 
    
  }

  async getClipping(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const clipping = await ClippingModel.findById(id);
      if (!clipping ) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  async updateUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { username, password } = req.body;
      const user = await ClippingModel.findByIdAndUpdate(id, { username, password }, { new: true });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const user = await ClippingModel.findByIdAndDelete(id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}

export { ClippingController };
