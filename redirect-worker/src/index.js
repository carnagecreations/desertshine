const worker = {
  async fetch(request) {
    const url = new URL(request.url);
    url.hostname = 'www.cleanconvictions.com';
    return Response.redirect(url.toString(), 301);
  },
};

export default worker;
