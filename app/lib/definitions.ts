// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type User = {
    id: string;
    username: string;
    email: string;
    password: string;
};
  
export type Skill = {
  id: string;
  name: string;
  image_url: string;
};

export type Project = {
  id: string;
  name: string;
  image_url: string;
  description?: string;
  items: string;
};

export type Invoice = {
    id: string;
    customer_id: string;
    amount: number;
    date: string;
    status: 'pending' | 'paid';
  };
  