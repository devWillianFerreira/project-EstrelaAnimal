import { serve } from "https://deno.land/std/http/server.ts";
import Stripe from "npm:stripe";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const stripe = new Stripe(Deno.env.get("VITE_STRIPE_SECRET_KEY")!, {
  apiVersion: "2022-11-15",
});

const supabase = createClient(
  Deno.env.get("VITE_SUPABASE_URL")!,
  Deno.env.get("VITE_SUPABASE_SERVICE_ROLE_KEY")!
);

serve(async (req) => {
  let body: string;
  let sig: string | null;
  let event: Stripe.Event;

  try {
    body = await req.text();
    sig = req.headers.get("stripe-signature");
    if (!sig) throw new Error("Assinatura ausente");

   event = await stripe.webhooks.constructEventAsync(
  body,
  sig,
  Deno.env.get("VITE_STRIPE_WEBHOOK_SIGNING_KEY")!
);
  } catch (err) {
    console.error("Erro na verificação do webhook:", err.message);
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    console.log("🔔 Evento checkout.session.completed recebido");

    let cart = [];
    let checkoutInfo = {};
    let userId = "";
    try {
      if (session.metadata?.userId) {
    userId = session.metadata.userId;
  }
      if (session.metadata?.cart) {
        cart = JSON.parse(session.metadata.cart);
      }
      if (session.metadata?.checkoutInfo) {
        checkoutInfo = JSON.parse(session.metadata.checkoutInfo);
      }
    } catch (err) {
      console.error("Erro ao fazer parse do metadata:", err.message);
      return new Response("Erro ao ler cart ou checkoutInfo", { status: 400 });
    }

    try {
      // Inserir pedidos
      for (const item of cart) {
        const { error } = await supabase.from("Orders").insert({
          amount: item.amount,
          price: item.price,
          image: item.image,
          category: item.category,
          name: item.name,
          total: item.total,
          type: item.type,
          userId: userId
        });
        if (error) {
          console.error("Erro ao salvar pedido:", error.message);
          return new Response("Erro ao salvar pedido", { status: 500 });
        }
      }

      // Inserir checkout info
      const { error: checkoutError } = await supabase.from("Checkout_info").insert({
        ...checkoutInfo,
      });
      if (checkoutError) {
        console.error("Erro ao salvar checkout_info:", checkoutError.message);
        return new Response("Erro ao salvar checkout_info", { status: 500 });
      }

      console.log("✅ Dados salvos no Supabase com sucesso!");
    } catch (err) {
      console.error("Erro inesperado ao salvar dados:", err.message);
      return new Response("Erro ao salvar dados", { status: 500 });
    }
  }

  return new Response("ok", { status: 200 });
});
