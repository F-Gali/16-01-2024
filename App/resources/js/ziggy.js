const Ziggy = {"url":"http:\/\/localhost","port":null,"defaults":{},"routes":{"sanctum.csrf-cookie":{"uri":"sanctum\/csrf-cookie","methods":["GET","HEAD"]},"perfil":{"uri":"perfil","methods":["GET","HEAD"]},"registro":{"uri":"registro","methods":["GET","HEAD"]},"register":{"uri":"register","methods":["POST"]},"login":{"uri":"login","methods":["GET","HEAD"]},"password.confirm":{"uri":"confirm-password","methods":["GET","HEAD"]},"logout":{"uri":"logout","methods":["GET","HEAD"]},"storage.local":{"uri":"storage\/{path}","methods":["GET","HEAD"],"wheres":{"path":".*"},"parameters":["path"]}}};
if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
  Object.assign(Ziggy.routes, window.Ziggy.routes);
}
export { Ziggy };
