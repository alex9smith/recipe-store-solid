import { Session } from "@inrupt/solid-client-authn-browser";

// If your Pod is *not* on `solidcommunity.net`, change this to your identity provider.
const SOLID_IDENTITY_PROVIDER = "http://localhost:3000";

const session = new Session();

export function login(req, res) {
  res.send("Not implemented - login");
}
