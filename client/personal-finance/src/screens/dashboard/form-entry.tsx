import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../../components/ui/calendar";
import { cn } from "../../lib/utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Textarea } from "../../components/ui/textarea";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../../components/ui/card";

const categories = [
  {
    name: "Utility",
    value: "utility",
  },
  {
    name: "Housing",
    value: "housing",
  },
  {
    name: "Paycheck",
    value: "paycheck",
  },
  {
    name: "Insurance",
    value: "insurance",
  },
  {
    name: "Personal",
    value: "personal",
  },
];

const FormEntry = () => {
  const form = useForm();
  const { handleSubmit, control } = form;
  const submitForm = (data) => {
    console.log(data);
  };
  return (
    <Card className="w-[500px]">
      <CardHeader className="font-semibold">Add Your Expense Here</CardHeader>
      <Form {...form}>
        <form onSubmit={handleSubmit(submitForm)}>
          <CardContent className="space-y-3">
            {/* Date */}
            <FormField
              name="date"
              render={({ field }) => (
                <FormItem className="flex flex-col w-full gap-1">
                  <FormLabel>Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="w-4 h-4 ml-auto opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />
            {/* Amount */}
            <FormField
              name="amount"
              render={({ field }) => (
                <FormItem className="flex flex-col w-full gap-1">
                  <FormLabel>Amount</FormLabel>
                  <FormControl>
                    <Input {...field} type="number" placeholder="10,000.00" />
                  </FormControl>
                </FormItem>
              )}
            />
            {/* Category */}
            <FormField
              name="category"
              control={control}
              render={({ field }) => (
                <FormItem className="flex flex-col gap-1">
                  <FormLabel>Category</FormLabel>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue>{field.value}</SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {categories?.map(({ name, value }) => (
                          <SelectItem value={value} key={value}>
                            {name}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            {/* Description */}
            <FormField
              name="description"
              render={({ field }) => (
                <FormItem className="flex flex-col w-full gap-1">
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea {...field} placeholder="Pokemon Cards..." />
                  </FormControl>
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full mt-6">
              Submit
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};

export default FormEntry;
