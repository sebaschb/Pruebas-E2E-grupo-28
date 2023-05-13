const compareImages = require("resemblejs/compareImages")
const fs = require("fs")
const config = require("./config.json");
const { options } = config;

function createReport(datetime, resInfo, image1, image2, image3){
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

            <div class=" btitle">
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
    </html>`
}

async function executeTest(){
    let resultInfo = {}
    let datetime = new Date().toISOString().replace(/:/g,".");
    
    if (!fs.existsSync(`./results/${datetime}`)){
        fs.mkdirSync(`./results/${datetime}`, { recursive: true });
    }

    const folder1 = 'C:/Users/santi/OneDrive/Escritorio/Imgaes/Test 1';
    const folder2 = 'C:/Users/santi/OneDrive/Escritorio/Imgaes/Test 2';
    
    const files1 = fs.readdirSync(folder1);
    const files2 = fs.readdirSync(folder1);

    for (let i = 0; i < files1.length; i++) {
        const data = await compareImages(
            fs.readFileSync(`${folder1}/${files1[i]}`),
            fs.readFileSync(`${folder2}/${files2[i]}`)
        );
        resultInfo = {
            isSameDimensions: data.isSameDimensions,
            dimensionDifference: data.dimensionDifference,
            rawMisMatchPercentage: data.rawMisMatchPercentage,
            misMatchPercentage: data.misMatchPercentage,
            diffBounds: data.diffBounds,
            analysisTime: data.analysisTime
        }
        fs.writeFileSync(`./results/${datetime}/compare-${files1[i]}`, data.getBuffer());
        fs.writeFileSync(`./results/${datetime}/report.html`, createReport(datetime, resultInfo, `${folder1}/${files1[i]}`, `${folder2}/${files2[i]}`, `./results/${datetime}/compare-${files1[i]}`));
        fs.copyFileSync('./index.css', `./results/${datetime}/index.css`);           
    }
    console.log('------------------------------------------------------------------------------------')
    console.log("Execution finished. Check the report under the results folder")
    return resultInfo;  
}



(async ()=>console.log(await executeTest()))();