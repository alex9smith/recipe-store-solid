import {
  getSolidDataset,
  getThing,
  getStringNoLocale,
  getUrlAll
} from "@inrupt/solid-client";

import { SOLID } from '@inrupt/vocab-solid';
import { VCARD, FOAF } from "@inrupt/vocab-common-rdf";

import { 
  Session,
  getSessionFromStorage  
} from "@inrupt/solid-client-authn-node"

const HOST = 'http://localhost:3001'
const CALLBACK_URL = `${HOST}/solid/login/callback`

export async function render_login(req, res) {
  const session = await getSessionFromStorage(req.session.sessionId);

  if(!session || !session.info.isLoggedIn) {
    res.render('solid/login', { title: 'Login' });
    return
  }

  res.redirect('/solid/home');
};

export async function login(req, res) {
  const session = new Session();
  req.session.sessionId = session.info.sessionId;
  const webID = req.body.webid
  
  const profileUrl = new URL(webID);
  profileUrl.hash = "";

  const dataset = await getSolidDataset(profileUrl.href);
  const profile = getThing(dataset, webID);
  const issuer = getUrlAll(profile, 'http://www.w3.org/ns/solid/terms#oidcIssuer')[0];
  const redirectToOIDC = (url) => { res.redirect(url) };

  session.login({
    redirectUrl: CALLBACK_URL,
    oidcIssuer: issuer,
    clientName: 'Recipe demo',
    handleRedirect: redirectToOIDC
  })
};

export function home(req, res) {
  res.send("Not implemented - home screen");
};

export async function callback(req, res) {
  const session = await getSessionFromStorage(req.session.sessionId);
  await session.handleIncomingRedirect(`${HOST}${req.url}`);
  console.log(session.info);
  res.send('login');
}
