"use client";

import { Button } from "@/components/ui/button";
import { BillboardColumn } from "./columns";
import { Edit, MoreHorizontal } from "lucide-react";
import { DropdownMenu, DropdownMenuLabel, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

interface CellActionProps {
  data: BillboardColumn;
}
export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem>
                  <Edit className="mr-2 h-4 w-4" />
                  Update
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
