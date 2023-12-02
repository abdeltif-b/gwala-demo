import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { getLocations } from "@/lib/data";
import { ExternalLinkIcon, PlusIcon } from "@radix-ui/react-icons";

export const AskQuestion = async () => {
  const locations = getLocations();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <PlusIcon className="mr-2 h-4 w-4" />
          Ask a new question
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Ask a new question</DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input id="title" className="col-span-3" placeholder="Type your question" />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="location" className="text-right">
              Location
            </Label>
            <Select>
              <SelectTrigger id="location" className="col-span-3">
                <SelectValue placeholder="Select a location" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Locations</SelectLabel>
                  {locations.map((item) => (
                    <SelectItem key={item} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="content" className="text-right">
              Content
            </Label>
            <Textarea id="content" className="col-span-3" placeholder="Details about your question" />
          </div>
        </div>

        <DialogFooter>
          <Button type="submit">Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
