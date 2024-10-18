import prisma from './prisma'

async function main() {
  // Create sample users
  const user1 = await prisma.user.create({
    data: {
      username: 'john_doe',
      password: 'jsdwsaf9'
    },
  });

  const user2 = await prisma.user.create({
    data: {
      username: 'jane_smith',
      password: '2dq0wdja'
    },
  });

  console.log({ user1, user2 });
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
