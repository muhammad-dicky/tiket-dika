"use client"

import { Button } from "@/components/ui/button";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Info, Mails } from "lucide-react";
import Image from "next/image";
import { Form, FormProvider, useForm, useFormContext } from "react-hook-form";

const FloatingActionButton = () => {
  const form = useForm();
  const { control, formState: { errors } } = useForm();

  const onSubmit = (data:any) => {
    console.log(data);
  }

  return (
    <>
      <div className="fixed bottom-4 right-4 z-10">
        {/* Tambahkan ikon atau isi dari FAB di sini */}
        <Popover>
  <PopoverTrigger>
      <Button className="p-6 m-5" variant={"outline"}>
        <Mails/>
      </Button>
    
  </PopoverTrigger>
  <PopoverContent>
    <div className="bg-blue-600 py-2">
    <Image src={"/logotravel.png"} width={100} height={40} alt={""}/>

    </div>

 


  <FormProvider {...form}>
      <Form >
        {/* Form fields go here */}
        <FormField
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nama</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email address..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pesan</FormLabel>
              <FormControl>
                <Input placeholder="Enter your messages..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Add more form fields as needed */}
        
        <Button className="w-full mt-5">Submit</Button>
      </Form>
    </FormProvider>

  </PopoverContent>
</Popover>

      </div>
      </>
    );
  };
  
  export default FloatingActionButton;