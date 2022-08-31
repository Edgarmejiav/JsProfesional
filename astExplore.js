export default function (context) {
  return {
    VariableDeclarator(node) {
      // tipo const
      const declaration = node.parent.declarations[0];
      console.log(node.parent.kind);
      if (node.parent.kind === "const") {
        //asegurarnos que el valor es un numero
        if (typeof declaration.init.value === "number") {
          if (declaration.id.name !== declaration.id.name.toUpperCase()) {
            context.report({
              node: declaration.id,
              message: "Const name not in Upper case",
              fix: function (fixer) {
                return fixer.replaceText(
                  declaration.id,
                  declaration.id.name.toUpperCase()
                );
              },
            });
          }
        }
      }
    },
  };
}
/* https://astexplorer.net/ */
