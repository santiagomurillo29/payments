import { TransactionStatus } from "@prisma/client";
import { Transaction } from "../../model/transaction.entity";
import { Result } from "../result";

export interface TransactionPort {
  getTransactions(): Promise<Transaction[]>;
  saveTransaction(data: Partial<Transaction>): Promise<Result<Transaction, string>>;
  updateTransactionStatus(id: string, data: { status: TransactionStatus }): Promise<Result<Transaction, string>>;
}