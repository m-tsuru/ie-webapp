import { type Provider } from "@supabase/supabase-js";
import { createClient } from "../supabase/client";

export async function signInWithOAuth(provider: Provider, redirectUrl: String) {
  const supabase = createClient();
  await supabase.auth.signInWithOAuth({
    provider: provider,
    options: {
      // redirectTo: getURL(`/auth/callback?next=/${redirectUrl}`),
      redirectTo: `https://ie-webapp.vercel.app/auth/callback?next=/${redirectUrl}`,
    },
  });
}
