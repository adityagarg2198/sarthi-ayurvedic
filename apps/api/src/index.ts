import Fastify from "fastify";

const fastify = Fastify({
  logger: true,
});
const port = Number(process.env.PORT) || 3000;

fastify.get("/", async (_request, reply) => {
  reply.send({ hello: "world" });
});

const start = async () => {
  try {
    await fastify.listen({ port, host: "0.0.0.0" });
    console.log("Server listening on", port);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
