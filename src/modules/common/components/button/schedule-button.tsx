"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface ScheduleButtonProps{
    setSelectedDate: (date: Date | undefined) => void,
    loading: boolean
}

export function ScheduleButton({setSelectedDate,loading = false}:ScheduleButtonProps) {
  const [date, setDate] = React.useState<Date>();
  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate); // Update the local state
    setSelectedDate(selectedDate); // Pass the selected date to the parent component
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button disabled={loading} className="bg-slate-200 text-inputlabel rounded-md min-w-[7rem] hover:text-white">
          Shcedule
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleDateSelect}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
