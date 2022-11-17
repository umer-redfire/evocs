import type { Prisma } from '@prisma/client';
import { db } from 'api/src/lib/db';

export default async () => {
  try {
    //
    // Manually seed via `yarn rw prisma db seed`
    // Seeds automatically with `yarn rw prisma migrate dev` and `yarn rw prisma migrate reset`
    //
    // Update "const data = []" to match your data model and seeding needs
    //

    const customers: Prisma.CustomerCreateArgs[] = [
      {
        data: {
          auth0ID: 'org_Ij86iZSnHeSggo5u',
          name: 'evocs',
          displayName: 'Evocs',
          status: 'ACTIVE',
          vaultKey: 'abc',
        },
      },
    ];
    const users: Prisma.UserCreateArgs[] = [
      {
        data: {
          auth0ID: 'google-oauth2|110902788667080617330',
          email: 'spencer@evocs.tech',
          customer: {
            connect: {
              name: 'evocs',
            },
          },
          status: 'ACTIVE',
        },
      },
      {
        data: {
          auth0ID: '8ZoJoUwbI7GL99T9Om5cl8OwVAtL9XCW@clients',
          email: '',
          status: 'ACTIVE',
          customer: {
            connect: {
              name: 'evocs',
            },
          },
        },
      },
    ];
    // const data: Prisma.UserCreateArgs['data'][] = [
    // To try this example data with the UserExample model in schema.prisma,
    // uncomment the lines below and run 'yarn rw prisma migrate dev'
    //
    // { name: 'alice', email: 'alice@example.com' },
    // { name: 'mark', email: 'mark@example.com' },
    // { name: 'jackie', email: 'jackie@example.com' },
    // { name: 'bob', email: 'bob@example.com' },
    // ];
    console.log(
      "\nUsing the default './scripts/seed.{js,ts}' template\nEdit the file to add seed data\n"
    );

    // Note: if using PostgreSQL, using `createMany` to insert multiple records is much faster
    // @see: https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#createmany
    await Promise.all(
      customers.map(async (data) => {
        const record = await db.customer.create(data);
        console.log(record);
      })
    );

    Promise.all(
      //
      // Change to match your data model and seeding needs
      //
      users.map(async (data: Prisma.UserCreateArgs) => {
        const record = await db.user.create(data);
        console.log(record);
      })
    );
  } catch (error) {
    console.warn('Please define your seed data.');
    console.error(error);
  }
};
