module.exports = {
  async index(ctx, next) { // called by GET /hello
    ctx.body = 'Hello World! With added content so we can test the whole GitHub workflow!'; // we could also send a JSON
  },
};
