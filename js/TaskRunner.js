let pyodide;

async function initPython() {

    console.log("Ładowanie Pythona...");

    pyodide = await loadPyodide();

    console.log("✅ Python gotowy!");

}

initPython();