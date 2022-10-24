import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

const HTML = await Deno.readFile("./index.html");


const CSS_ROUTE = new URLPattern({ pathname: "/style.css" });
const CSS = await Deno.readFile("./style.css");

const CLICK_ROUTE = new URLPattern({ pathname: "/click" });
const SAMPLE_TEXT = "<p>RESPONSE TEXT</p>";

function handler(req: Request): Response {
  const headers = {
    "content-type": "text/html",
  }

  if (CSS_ROUTE.exec(req.url)) {
    return new Response(CSS, {
      headers,
    });
  }

  if (CLICK_ROUTE.exec(req.url)) {
    return new Response(SAMPLE_TEXT, {
      headers,
    });
  }

  return new Response(HTML, {
    headers,
  });
}

serve(handler);

