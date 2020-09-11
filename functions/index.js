const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HQFMvFOcorQi9yQCzKmbDOTy33vMdgVbiZQrV3i6Y1SN1iUYWsuOVlh3tdgTX6RVOL28zpk8Sx5icRC1IKNgWP2005VR8KWj8"
);

//api

//App config

const app = express();

//midddlewares
app.use(cors({ origin: true }));
app.use(express.json());

//api routes
app.get("/", (request, response) => response.status(200).send("hell world"));
// http://localhost:5001/clone-78aed/us-central1/api

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment req receive: ", total);

  const paymentIntent = await stripe.paymentIntent.create({
    amount: total, //sub inits of the currency
    currency: "usd",
  });

  //   ok
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//listen command
exports.api = functions.https.onRequest(app);
