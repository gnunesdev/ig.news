import Stipe from "stripe";
import { version } from "../../package.json";

export const stripe = new Stipe(process.env.STRIPE_API_KEY, {
  apiVersion: "2020-08-27",
  appInfo: {
    name: "igNews",
    version,
  },
});
