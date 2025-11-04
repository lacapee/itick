import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, message } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Create Supabase client
    const cookieStore = await cookies()
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return cookieStore.getAll()
          },
          setAll(cookiesToSet) {
            try {
              cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options))
            } catch (error) {
              // setAll might be called from a Server Component which can throw an error if attempting to set cookies
            }
          },
        },
      },
    )

    // Insert consultation into database
    const { error } = await supabase.from("consultations").insert({
      name,
      email,
      company,
      message,
      status: "new",
    })

    if (error) {
      console.error("Database error:", error)
      return NextResponse.json({ error: "Failed to save consultation" }, { status: 500 })
    }

    return NextResponse.json({ success: true, message: "Consultation request submitted" }, { status: 201 })
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
