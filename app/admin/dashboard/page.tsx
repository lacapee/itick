import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import ConsultationsTable from "@/components/admin/consultations-table"
import AdminHeader from "@/components/admin/admin-header"

export default async function AdminDashboard() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/admin/login")
  }

  let consultations = []
  let tableError = null

  try {
    const { data, error } = await supabase.from("consultations").select("*").order("created_at", { ascending: false })

    if (error) {
      console.error("[v0] Error fetching consultations:", error.message)
      tableError = error.message
    } else {
      consultations = data || []
    }
  } catch (err) {
    console.error("[v0] Exception fetching consultations:", err)
    tableError = "Failed to load consultations table"
  }

  const stats = {
    total: consultations.length || 0,
    new: consultations.filter((c: any) => c.status === "new").length || 0,
    inProgress: consultations.filter((c: any) => c.status === "in-progress").length || 0,
    completed: consultations.filter((c: any) => c.status === "completed").length || 0,
  }

  return (
    <div className="min-h-screen bg-background">
      <AdminHeader user={user} />

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Dashboard Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-2">Welcome back! Here's your consultation overview.</p>
        </div>

        {tableError && (
          <Card className="mb-6 border-red-200 bg-red-50">
            <CardContent className="pt-6">
              <p className="text-red-800 font-medium">Database Setup Required</p>
              <p className="text-red-700 text-sm mt-1">
                The consultations table hasn't been created yet. Run the SQL script from
                scripts/01-create-consultations-table.sql to set up the database.
              </p>
            </CardContent>
          </Card>
        )}

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Consultations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats.total}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">New Requests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">{stats.new}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">In Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">{stats.inProgress}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Completed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">{stats.completed}</div>
            </CardContent>
          </Card>
        </div>

        {/* Consultations Table */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Consultations</CardTitle>
            <CardDescription>Manage and track all client consultation requests</CardDescription>
          </CardHeader>
          <CardContent>
            {tableError ? (
              <div className="text-center py-8 text-muted-foreground">
                <p>Unable to load consultations table</p>
                <p className="text-sm mt-2">Please run the database setup script first</p>
              </div>
            ) : (
              <ConsultationsTable initialData={consultations} />
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
