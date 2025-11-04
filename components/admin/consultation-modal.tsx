"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { format } from "date-fns"

interface Consultation {
  id: string
  name: string
  email: string
  company: string
  message: string
  status: string
  created_at: string
}

export default function ConsultationModal({
  consultation,
  onClose,
}: {
  consultation: Consultation
  onClose: () => void
}) {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{consultation.name}</DialogTitle>
          <DialogDescription>Consultation Details</DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Email</p>
              <p className="text-sm">{consultation.email}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Company</p>
              <p className="text-sm">{consultation.company || "Not provided"}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Date</p>
              <p className="text-sm">{format(new Date(consultation.created_at), "MMM dd, yyyy 'at' hh:mm a")}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Status</p>
              <p className="text-sm capitalize">{consultation.status}</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-muted-foreground mb-2">Message</p>
            <p className="text-sm bg-muted p-4 rounded-lg whitespace-pre-wrap">{consultation.message}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
