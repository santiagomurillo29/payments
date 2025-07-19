export class Customer {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public address: string,
    public city: string
  ) 
  {
    this.validateEmail(email);
    this.validateName(name);
  }

  private validateEmail(email: string): void {
    if (!email.includes('@')) throw new Error("Invalid email format");
  }

  private validateName(name: string): void {
    if (name.length === 0) throw new Error("Name cannot be empty");
  }
}