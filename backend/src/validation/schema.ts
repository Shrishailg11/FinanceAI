import { z } from 'zod';

// User Schema
export const UserSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  passwordHash: z.string(),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  createdAt: z.date(),
  updatedAt: z.date(),
  salary: z.number().nullable(),
  primaryCurrency: z.string().nullable(),
  cityId: z.string().nullable(),
});

export const CreateUserSchema = UserSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

// City Schema
export const CitySchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  country: z.string(),
  costOfLivingIndex: z.number().nullable(),
  latitude: z.number().nullable(),
  longitude: z.number().nullable(),
});

// Category Schema
export const CategorySchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  icon: z.string().nullable(),
  color: z.string().nullable(),
  isDefault: z.boolean(),
  userId: z.string().nullable(),
});

// Budget Schema
export const BudgetSchema = z.object({
  id: z.string().uuid(),
  userId: z.string(),
  categoryId: z.string(),
  amountLimit: z.number(),
  month: z.date(),
  isStrictMode: z.boolean(),
  createdAt: z.date(),
});

// Expense Schema
export const ExpenseSchema = z.object({
  id: z.string().uuid(),
  userId: z.string(),
  categoryId: z.string(),
  amount: z.number(),
  currency: z.string().nullable(),
  description: z.string().nullable(),
  date: z.date(),
  locationName: z.string().nullable(),
  latitude: z.number().nullable(),
  longitude: z.number().nullable(),
  receiptImage: z.string().nullable(),
  isRecurring: z.boolean(),
  createdAt: z.date(),
});

// Recurring Payment Schema
export const RecurringPaymentSchema = z.object({
  id: z.string().uuid(),
  userId: z.string(),
  categoryId: z.string(),
  amount: z.number(),
  frequency: z.enum(['daily', 'weekly', 'monthly', 'yearly']),
  startDate: z.date(),
  endDate: z.date().nullable(),
  description: z.string().nullable(),
  nextPaymentDate: z.date(),
});

// Request Validation Schemas
export const RegisterUserRequestSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
});

export const LoginUserRequestSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const CreateExpenseRequestSchema = z.object({
  categoryId: z.string(),
  amount: z.number().positive(),
  currency: z.string().optional(),
  description: z.string().optional(),
  date: z.date().optional(),
  locationName: z.string().optional(),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
  isRecurring: z.boolean().optional(),
});

export const CreateBudgetRequestSchema = z.object({
  categoryId: z.string(),
  amountLimit: z.number().positive(),
  month: z.date(),
  isStrictMode: z.boolean().optional(),
});
