"use client";

import { format, formatDate } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { ptBR } from "date-fns/locale";
import { InputHTMLAttributes, useRef, useState } from "react";
import { cn } from "~/lib";
import { Button } from "./button";
import { Calendar } from "./calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

type DatePickerProps = {
  value?: string;
  name?: string;
};

export function DatePicker(props: InputHTMLAttributes<HTMLInputElement>) {
  const [date, setDate] = useState<Date>();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDate = (date?: Date) => {
    setDate(date);
    inputRef.current?.setAttribute(
      "value",
      date ? formatDate(date, "yyyy-MM-dd") : ""
    );
  };

  console.log({ inputValue: inputRef.current?.value });

  return (
    <Popover>
      <input type="hidden" {...props} ref={inputRef} />
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? (
            format(date, "PPP", { locale: ptBR })
          ) : (
            <span>Pick a date</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
