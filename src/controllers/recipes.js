import { getSessionFromStorage } from "@inrupt/solid-client-authn-node"

export async function home(req, res) {
  const session = await getSessionFromStorage(req.session.sessionId);

  if(!session || !session.info.isLoggedIn) {
    res.redirect('/login')
    return
  };
  res.send('home');
}