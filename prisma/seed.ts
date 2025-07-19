import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const products = [
    {
      name: 'Camiseta básica',
      description: 'Camiseta de algodón 100% color blanco',
      price: 35000,
      stock: 100,
    },
    {
      name: 'Jeans slim fit',
      description: 'Jeans azul oscuro, corte slim',
      price: 90000,
      stock: 50,
    },
    {
      name: 'Chaqueta impermeable',
      description: 'Chaqueta ligera para lluvia, color negro',
      price: 120000,
      stock: 30,
    },
    {
      name: 'Sudadera deportiva',
      description: 'Sudadera gris para entrenamiento',
      price: 60000,
      stock: 70,
    },
    {
      name: 'Zapatos casuales',
      description: 'Zapatos de cuero color marrón',
      price: 150000,
      stock: 40,
    },
  ];

  for (const product of products) {
    await prisma.products.upsert({
      where: { name: product.name },
      update: {},
      create: product,
    });
  }
}

main()
  .then(() => {
    console.log('Seed completado');
    return prisma.$disconnect();
  })
  .catch((e) => {
    console.error(e);
    return prisma.$disconnect();
  });