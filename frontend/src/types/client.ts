export interface Client {
  id?: string;
  name: string;
  email: string;
  phone: string;
  coordinate_x: number;
  coordinate_y: number;
  distance?: number;
}
