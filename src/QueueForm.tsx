    "use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const doctors = ["Dr. Cruz", "Dr. Santos", "Dr. Garcia"];

export default function QueueForm() {
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [queued, setQueued] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedDoctor) {
      setQueued(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardContent className="p-6 space-y-4">
          <h1 className="text-2xl font-bold text-center">Line Up with UpNext</h1>
          {queued ? (
            <div className="text-center space-y-2">
              <p className="text-green-600 font-semibold">
                You're now in line for <br />
                <span className="text-black">{selectedDoctor}</span>.
              </p>
              <p className="text-sm text-gray-600">Please wait for your turn.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label>Select Your Doctor</Label>
                <Select onValueChange={setSelectedDoctor}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a doctor" />
                  </SelectTrigger>
                  <SelectContent>
                    {doctors.map((doc, idx) => (
                      <SelectItem key={idx} value={doc}>
                        {doc}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" className="w-full">
                Join Queue
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}