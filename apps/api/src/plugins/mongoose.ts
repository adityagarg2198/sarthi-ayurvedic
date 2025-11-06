// src/plugins/mongoose.ts
import fp from "fastify-plugin";
import mongoose from "mongoose";

declare module "fastify" {
  interface FastifyInstance {
    mongoose: typeof mongoose;
  }
}

async function mongoosePlugin(fastify: any, opts: any) {
  const uri = process.env.MONGODB_URI ?? "";
  try {
    await mongoose.connect(uri);
    fastify.decorate("mongoose", mongoose);
    fastify.log.info("Mongoose connected to " + uri);
  } catch (err) {
    fastify.log.error("Mongoose connect error", err);
    throw err;
  }

  // ensure graceful disconnect
  fastify.addHook("onClose", async () => {
    await mongoose.disconnect();
    fastify.log.info("Mongoose disconnected");
  });
}

export default fp(mongoosePlugin, { name: "plugin-mongoose" });
