'use server';

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
 
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

 

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}


// Skills
const SkillFormSchema = z.object({
  id: z.string(),
  name: z.string(
    {invalid_type_error: 'Please select a name.',}
  ),
  image_url: z.string(
    {invalid_type_error: 'Please select a image_url.',}
  ),
});


export type SkillState = {
  errors?: {
    id?: string[];
    name?: string[];
    image_url?: string[];
  };
  message?: string | null;
};


const CreateSkill = SkillFormSchema.omit({ id: true });
const UpdateSkill = SkillFormSchema.omit({ id: true });


export async function createSkill(prevState: SkillState, formData: FormData) {
  const validatedFields = CreateSkill.safeParse({
    name: formData.get('name'),
    image_url: formData.get('image_url'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    };
  }

  const { name, image_url } = validatedFields.data;

  try {
    await sql`
      INSERT INTO skills (name, image_url)
      VALUES (${name}, ${image_url})
    `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Skill.',
    };
  }

  revalidatePath('/admin/skill');
  redirect('/admin/skill');
}


export async function updateSkill(
  id: string,
  prevState: SkillState,
  formData: FormData,
) {
  const validatedFields = UpdateSkill.safeParse({
    name: formData.get('name'),
    image_url: formData.get('image_url'),
  });
 
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Skill.',
    };
  }
 
  const { name, image_url } = validatedFields.data;
 
  try {
    await sql`
      UPDATE skills
      SET name = ${name}, image_url = ${image_url}
      WHERE id = ${id}
    `;
  } catch (error) {
    return { message: 'Database Error: Failed to Update Skill.' };
  }
 
  revalidatePath('/admin/skill');
  redirect('/admin/skill');
}


export async function deleteSkill(id: string) {

  try {
    await sql`DELETE FROM skills WHERE id = ${id}`;
    revalidatePath('/admin/skill');
    return { message: 'Deleted Skill.' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Skill.' };
  }
}


// Projects
const ProjectFormSchema = z.object({
  id: z.string(),
  name: z.string(
    {invalid_type_error: 'Please select a name.',}
  ),
  image_url: z.string(
    {invalid_type_error: 'Please select a image_url.',}
  ),
  description: z.string(
    {invalid_type_error: 'Please select a description.',}
  ),
  items: z.string(
    {invalid_type_error: 'Please select items.',}
  ),
});


export type ProjectState = {
  errors?: {
    id?: string[];
    name?: string[];
    image_url?: string[];
    description?: string[];
    items?: string[];
  };
  message?: string | null;
};


const CreateProject = ProjectFormSchema.omit({ id: true });
const UpdateProject = ProjectFormSchema.omit({ id: true });


export async function createProject(prevState: ProjectState, formData: FormData) {
  const validatedFields = CreateProject.safeParse({
    name: formData.get('name'),
    image_url: formData.get('image_url'),
    description: formData.get('description'),
    items: formData.get('items'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Project.',
    };
  }

  const { name, image_url, description, items } = validatedFields.data;

  try {
    await sql`
      INSERT INTO projects (name, image_url, description, items)
      VALUES (${name}, ${image_url}, ${description}, ${items})
    `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Project.',
    };
  }

  revalidatePath('/admin/project');
  redirect('/admin/project');
}


export async function updateProject(
  id: string,
  prevState: ProjectState,
  formData: FormData,
) {
  const validatedFields = UpdateProject.safeParse({
    name: formData.get('name'),
    image_url: formData.get('image_url'),
    description: formData.get('description'),
    items: formData.get('items'),
  });
 
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Project.',
    };
  }
 
  const { name, image_url, description, items } = validatedFields.data;
 
  try {
    await sql`
      UPDATE projects
      SET name = ${name}, image_url = ${image_url}, description = ${description}, items = ${items}
      WHERE id = ${id}
    `;
  } catch (error) {
    return { message: 'Database Error: Failed to Update Project.' };
  }
 
  revalidatePath('/admin/project');
  redirect('/admin/project');
}


export async function deleteProject(id: string) {

  try {
    await sql`DELETE FROM projects WHERE id = ${id}`;
    revalidatePath('/admin/project');
    return { message: 'Deleted Project.' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Project.' };
  }
}

/* const FormSchema = z.object({
  id: z.string(),
  customerId: z.string(
    {invalid_type_error: 'Please select a customer.',}
  ),
  amount: z.coerce.number()
    .gt(0, { message: 'Please enter an amount greater than $0.' }),
  status: z.enum(['pending', 'paid'], {
    invalid_type_error: 'Please select an invoice status.',
  }),
  date: z.string(),
});


export type State = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};


const CreateInvoice = FormSchema.omit({ id: true, date: true });
const UpdateInvoice = FormSchema.omit({ id: true, date: true });


export async function createInvoice(prevState: State, formData: FormData) {
  const validatedFields = CreateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    };
  }

  const { customerId, amount, status } = validatedFields.data;
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];

  try {
    await sql`
      INSERT INTO invoices (customer_id, amount, status, date)
      VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
    `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Invoice.',
    };
  }

  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}


export async function updateInvoice(
  id: string,
  prevState: State,
  formData: FormData,
) {
  const validatedFields = UpdateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });
 
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Invoice.',
    };
  }
 
  const { customerId, amount, status } = validatedFields.data;
  const amountInCents = amount * 100;
 
  try {
    await sql`
      UPDATE invoices
      SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
      WHERE id = ${id}
    `;
  } catch (error) {
    return { message: 'Database Error: Failed to Update Invoice.' };
  }
 
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}


export async function deleteInvoice(id: string) {

  try {
    await sql`DELETE FROM invoices WHERE id = ${id}`;
    revalidatePath('/dashboard/invoices');
    return { message: 'Deleted Invoice.' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Invoice.' };
  }
} */
