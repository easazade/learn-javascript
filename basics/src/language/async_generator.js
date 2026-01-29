async function* streamData(chunks) {
  for (let chunk of chunks) {
    await new Promise((resolve) => setTimeout(resolve, 200)); // simulate I/O
    yield chunk;
  }
}

(async () => {
  const data = ['Hello', 'Async', 'Iteration'];
  for await (let part of streamData(data)) {
    console.log('chunk:', part);
  }
})();
