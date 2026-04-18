export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    // Use service role on server side — bypasses RLS safely
    const supabase = createSupabaseClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    const { error } = await supabase.from("submissions").insert({
      full_name: body.full_name,
      phone: body.phone,
      email: body.email || null,
      company_name: body.company_name || null,
      business_type: body.business_type || null,
      city: body.city || null,
      service_needed: body.service_needed,
      package_interest: body.package_interest || null,
      current_links: body.current_links || null,
      goal: body.goal || null,
      budget_range: body.budget_range,
      preferred_contact: body.preferred_contact,
      notes: body.notes || null,
      status: "جديد",
    });

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "تعذر حفظ الطلب. يرجى المحاولة مرة أخرى." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "حدث خطأ غير متوقع." },
      { status: 500 }
    );
  }
}
