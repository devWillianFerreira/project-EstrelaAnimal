import { serve } from "https://deno.land/std/http/server.ts";
import Stripe from "npm:stripe";

const stripe = new Stripe(Deno.env.get("VITE_STRIPE_SECRET_KEY"), {
  apiVersion: "2022-11-15",
});

serve(async (req) => {

   if (req.method === "OPTIONS") {
    return new Response("ok", {
      status: 200,
        headers: {
        "Access-Control-Allow-Origin": "http://localhost:5173",
        "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  }

  try{


  const { cart, userId, checkoutInfo, success_url, cancel_url } = await req.json();

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card", ],
    line_items: cart.map((item: any) => ({
      price_data: {
        currency: "brl",
        product_data: {
          name: item.name,
          images: [item.image],
        },
        unit_amount: Math.round(item.price * 100), // em centavos
      },
      quantity: item.amount,
    })),
    mode: "payment",
    success_url,
    cancel_url,
    metadata: {
      userId,
      cart: JSON.stringify(cart),
      checkoutInfo: JSON.stringify(checkoutInfo),
    },
  });

  return new Response(JSON.stringify({ url: session.url }), {
    status: 200,
   headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:5173",
        "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
  })
} catch(err){
   return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:5173",
        "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
};
});
