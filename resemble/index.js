const compareImages = require("resemblejs/compareImages");
const fs = require("fs");
const config = require("./config.json");
const { options } = config;

function createReport(datetime, resInfo, image1, image2) {
  return `
    <html>
        <head>
            <title> VRT Report </title>
            <link href="index.css" type="text/css" rel="stylesheet">
        </head>
        <body>
            <h1>Report for 
                 <a href="https://github.com/sebaschb/Pruebas-E2E-grupo-28">Pruebas-E2E-grupo-28</a>
            </h1>
            <p>Executed: ${datetime}</p>

            <div class="btitle">
                <p>Data: ${JSON.stringify(resInfo)}</p>
            </div>
            <div class="imgline">
            <div class="imgcontainer">
                <span class="imgname">Reference</span>
                <img class="img2" src="${image1}" id="refImage" label="Reference">
            </div>
            <div class="imgcontainer">
                <span class="imgname">Test</span>
                <img class="img2" src="${image2}" id="testImage" label="Test">
            </div>
        </div>
        </body>
    </html>`;
}

async function executeTest() {
  try {
    const escenarios = [
      "Editar pagina/Editar el titulo de una pagina creada",
      "Editar pagina/Editar la descripcion de una pagina creada",
      "Eliminar post/Eliminar el primer post de la lista de posts",
      "Eliminar post/Eliminar un post editado",
      "Eliminar post/Eliminar un post guardado como draft",
      "Editar post/Cancelar la edicion de un post",
      "Editar post/Editar un post nuevo",
      "Editar post/Editar un post ya existente",
      "Editar pagina/Editar el url de una pagina creada",
      "Editar pagina/Editar una pagina creada y hacerla featured",
    ];

    await Promise.all(
      escenarios.map(async (escenario) => {
        let resultInfo = {};
        let datetime = new Date().toISOString().replace(/:/g, ".");

        if (!fs.existsSync(`./results/${escenario}`)) {
          fs.mkdirSync(`./results/${escenario}`, { recursive: true });
        }

        const folder1 = `../Screenshots/Version1/Kraken/${escenario}`;
        const folder2 = `../Screenshots/Version2/Kraken/${escenario}`;
        const files1 = fs.readdirSync(folder1);
        const files2 = fs.readdirSync(folder2);

        for (let i = 0; i < files1.length; i++) {
          const data = await compareImages(
            fs.readFileSync(`${folder1}/${files1[i]}`),
            fs.readFileSync(`${folder2}/${files2[i]}`),
            options
          );

          resultInfo = {
            isSameDimensions: data.isSameDimensions,
            dimensionDifference: data.dimensionDifference,
            rawMisMatchPercentage: data.rawMisMatchPercentage,
            misMatchPercentage: data.misMatchPercentage,
            diffBounds: data.diffBounds,
            analysisTime: data.analysisTime,
          };

          fs.writeFileSync(
            `./results/${escenario}/compare-${files1[i]}`,
            data.getBuffer()
          );

          fs.writeFileSync(
            `./results/${escenario}/report-${files1[i]}.html`,
            createReport(
              datetime,
              resultInfo,
              `./../../../../Screenshots/Version1/Kraken/${escenario}/${files1[i]}`,
              `./../../../../Screenshots/Version2/Kraken/${escenario}/${files2[i]}`
            )
          );

          fs.copyFileSync("./index.css", `./results/${escenario}/index.css`);
        }
      })
    );

    console.log(
      "------------------------------------------------------------------------------------"
    );
    console.log(
      "Ejecución finalizada. Verifica el informe en la carpeta 'results'."
    );
  } catch (error) {
    console.error("Se produjo un error:", error);
  }
}

(async () => {
  try {
    await executeTest();
  } catch (error) {
    console.error("Se produjo un error en la ejecución:", error);
  }
})();
