import app from "./app/server"

const port = Number(process.env.PORT ?? 3000);

app.listen({ port: port }, (err, address) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  console.log(`🚀 Server ready at ${address}`);
});