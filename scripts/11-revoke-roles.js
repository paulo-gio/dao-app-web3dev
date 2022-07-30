import sdk from "./1-initialize-sdk.js";

const token = sdk.getToken("0x80711e2d72457f28EC5C01ff07E59b9FF782B177");
(async () => {
  try {
    // Mostre os papeis atuais.
    const allRoles = await token.roles.getAll();
    console.log("👀 Papéis que existem agora:", allRoles);

    // Remova todos os superpoderes que sua carteira tinha sobre o contrato ERC-20.
    await token.roles.setAll({ admin: [], minter: [] });
    console.log(
      "🎉 Papéis depois de remover nós mesmos",
      await token.roles.getAll()
    );
    console.log("✅ Revogados nossos super-poderes sobre os tokens ERC-20");

  } catch (error) {
    console.error("Falha ao remover nossos direitos sobre o tesouro da DAO", error);
  }
})();
