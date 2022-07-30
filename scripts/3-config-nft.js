import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0xa2F279Ad1C3d114028b3a8e9aD1Cb6802118E32f");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Taça BrDAO",
        description: "Esse NFT vai te dar acesso ao BrejaDAO!",
        image: readFileSync("scripts/assets/TBrDAO.png"),
      },
    ]);
    console.log("✅ Novo drop de NFT criado com sucesso!");
  } catch (error) {
    console.error("Falha ao criar o novo NFT", error);
  }
})()
