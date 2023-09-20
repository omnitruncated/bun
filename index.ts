import figlet from 'figlet';

const server = Bun.serve({
  fetch() {
    const body = figlet.textSync('Hello World!');
    return new Response(body);
    //return new Response('Bun!');
  },
  port: 3000,
});
