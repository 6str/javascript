async function thisThrows() {
    throw new Error("Thrown from thisThrows()");
}

async function run() {
    try {
        await thisThrows();
    } catch (e) {
        console.error(e.message);
    } finally {
        console.log('We do cleanup here');
    }
}

await run();

console.log("finished")