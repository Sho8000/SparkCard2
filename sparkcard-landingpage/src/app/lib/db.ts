/* import { PrismaClient } from "@prisma/client";

const prisma  = new PrismaClient();

prisma.$connect()
    .then(()=>{console.log("✅ connected to db")} )
    .catch((err:unknown) => {console.log('❌ failed to connect to db', err)})

export default prisma */

import { PrismaClient } from '@prisma/client';
// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
const globalForPrisma = global as unknown as { prisma: PrismaClient };
export const prisma = globalForPrisma.prisma || new PrismaClient();

if (true) globalForPrisma.prisma = prisma;