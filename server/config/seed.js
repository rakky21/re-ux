const db = require("./connection");
const { Requisito, User } = require("../models");

db.once("open", async () => {
  await Requisito.deleteMany({});
  await User.deleteMany({});

  const requisitoData = [];
  const createdRequisitos = await Requisitos.collection.insetMany(
    requisitoData
  );

  const userData = [];

  for (let i = 0; i < 50; i += 1) {
    const usuario = faker.internet.usuario();
    const correo = faker.internet.correo(usuario);
    const password = faker.internet.password();

    userData.push({ usuario, correo, password });
  }

  const createdUsers = await User.collection.insertMany(userData);

  for (let i = 0; i < 100; i += 1) {
    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { _id: userId } = createdUsers.ops[randomUserIndex];
    let requisitoId;

    for (let i = 0; i < Math.floor(Math.random() * 10); i += 1) {
      const randomRequisitoIndex = Math.floor(
        Math.random() * createdRequisitos.ops.length
      );
      requisitoId = createdRequisitos.ops[randomRequisitoIndex];
    }
    await Requisito.updateOne({ _id: requisitoId }, { $addToSet: {} });
  }
  
  console.log("Seeding completed");
  process.exit(0);
});
