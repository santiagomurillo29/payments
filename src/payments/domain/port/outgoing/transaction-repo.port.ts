import { TransactionStatus } from "@prisma/client";
import { Transaction } from "../../model/transaction.entity";

export interface TransactionRepoPort {
  findMany(): Promise<Transaction[]>;
  findById(id: string): Promise<Transaction>;
  saveTransaction(data: Transaction): Promise<Transaction | null>;
  updateStatus(id: string, status: TransactionStatus): Promise<Transaction | null>;
}