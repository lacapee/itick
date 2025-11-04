"use client"

import { useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Eye } from "lucide-react"
import ConsultationModal from "./consultation-modal"

interface Consultation {
  id: string
  name: string
  email: string
  company: string
  message: string
  status: string
  created_at: string
}

export default function ConsultationsTable({ initialData }: { initialData: Consultation[] }) {
  const [consultations, setConsultations] = useState(initialData)
  const [selectedConsultation, setSelectedConsultation] = useState<Consultation | null>(null)
  const supabase = createClient()

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffMins = Math.floor(diffMs / 60000)
    const diffHours = Math.floor(diffMs / 3600000)
    const diffDays = Math.floor(diffMs / 86400000)

    if (diffMins < 1) return "just now"
    if (diffMins < 60) return `${diffMins}m ago`
    if (diffHours < 24) return `${diffHours}h ago`
    if (diffDays < 7) return `${diffDays}d ago`
    return date.toLocaleDateString()
  }

  const getStatusColor = (status: string) => {
    const colors = {
      new: "bg-yellow-100 text-yellow-800",
      "in-progress": "bg-blue-100 text-blue-800",
      completed: "bg-green-100 text-green-800",
      "not-interested": "bg-gray-100 text-gray-800",
    }
    return colors[status as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      const { error } = await supabase.from("consultations").update({ status: newStatus }).eq("id", id)

      if (error) throw error

      setConsultations(consultations.map((c) => (c.id === id ? { ...c, status: newStatus } : c)))
    } catch (err) {
      console.error("[v0] Error updating status:", err)
    }
  }

  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3 px-4 font-medium">Name</th>
              <th className="text-left py-3 px-4 font-medium">Company</th>
              <th className="text-left py-3 px-4 font-medium">Email</th>
              <th className="text-left py-3 px-4 font-medium">Date</th>
              <th className="text-left py-3 px-4 font-medium">Status</th>
              <th className="text-right py-3 px-4 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {consultations.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center py-8 text-muted-foreground">
                  No consultations yet
                </td>
              </tr>
            ) : (
              consultations.map((consultation) => (
                <tr key={consultation.id} className="border-b hover:bg-muted/50 transition">
                  <td className="py-3 px-4">{consultation.name}</td>
                  <td className="py-3 px-4">{consultation.company || "-"}</td>
                  <td className="py-3 px-4 text-xs text-muted-foreground">{consultation.email}</td>
                  <td className="py-3 px-4 text-xs text-muted-foreground">{formatDate(consultation.created_at)}</td>
                  <td className="py-3 px-4">
                    <Select value={consultation.status} onValueChange={(value) => updateStatus(consultation.id, value)}>
                      <SelectTrigger className="w-32 h-8">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">New</SelectItem>
                        <SelectItem value="in-progress">In Progress</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="not-interested">Not Interested</SelectItem>
                      </SelectContent>
                    </Select>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedConsultation(consultation)}
                      className="gap-2"
                    >
                      <Eye className="w-4 h-4" />
                      View
                    </Button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {selectedConsultation && (
        <ConsultationModal consultation={selectedConsultation} onClose={() => setSelectedConsultation(null)} />
      )}
    </>
  )
}
