'use server';

import { serverMutate } from "@/lib/serverMutate"; // Adjust this path to match your project structure

export interface PeriodLogInput {
  startDate: string; // ISO string format (e.g. "2026-08-12T00:00:00.000Z" or "YYYY-MM-DD")
  endDate?: string | null;
  cycleLength?: number;
  periodDuration?: number;
  flowLevel?: 'LIGHT' | 'MEDIUM' | 'HEAVY';
  symptoms?: string[];
  moods?: string[];
  notes?: string;
}

export type PartialPeriodLogInput = Partial<PeriodLogInput>;

// ==========================================
// 1. READ: Fetch all logs for the current user
// ==========================================
export interface PeriodLogInput {
  startDate: string;
  endDate?: string | null;
  cycleLength?: number;
  periodDuration?: number;
  flowLevel?: 'LIGHT' | 'MEDIUM' | 'HEAVY';
  symptoms?: string[];
  moods?: string[];
  notes?: string;
}

// Add this interface
export interface PeriodLogRecord extends PeriodLogInput {
  id: string;
}

// Update the generic type parameter from PeriodLogInput[] to PeriodLogRecord[]
export async function getPeriodLogsAction() {
  return await serverMutate<PeriodLogRecord[]>({
    path: "/api/v1/period/my-logs",
    method: "GET",
  });
}

// ==========================================
// 2. CREATE: Add a new period log
// ==========================================
export async function createPeriodLogAction(body: PeriodLogInput) {
  return await serverMutate({
    path: "/api/v1/period",
    method: "POST",
    body,
    revalidatePathUrl: "/tracker", // Invalidate cache on the tracker page
  });
}

// ==========================================
// 3. UPDATE: Edit an existing log by ID
// ==========================================
export async function updatePeriodLogAction(
  id: string,
  body: PartialPeriodLogInput
) {
  return await serverMutate({
    path: `/api/v1/period/${id}`,
    method: "PUT",
    body,
    revalidatePathUrl: "/tracker",
  });
}

// ==========================================
// 4. DELETE: Remove a period log by ID
// ==========================================
export async function deletePeriodLogAction(id: string) {
  return await serverMutate({
    path: `/api/v1/period/${id}`,
    method: "DELETE",
    revalidatePathUrl: "/tracker",
  });
}