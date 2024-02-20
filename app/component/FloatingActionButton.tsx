"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BaseSyntheticEvent } from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Info, Mails } from "lucide-react";
import Image from "next/image";
import {
  Form,
  FormProvider,
  useForm,
  FieldValues,
  SubmitHandler,
} from "react-hook-form";

const FloatingActionButton = () => {
  const [showAlert, setShowAlert] = useState(false);
  const methods = useForm<FormData>();

  // const onSubmit: SubmitHandler<FormData> = async (data) => {
  //   // Handle form submission heres
  //   console.log(data);
  //   // Reset the form after submission
  //   methods.reset();
  // };

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  // Fungsi untuk mengubah state saat nilai input berubah
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Fungsi untuk menangani pengiriman formulir
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission here

    // Menghapus isi state setelah pengiriman
    setFormData({
      username: "",
      email: "",
      message: "",
    });
    alert("Data berhasil dikirim!");
  };

  return (
    <>
      <div className="fixed bottom-4 right-4 z-10">
        {/* Tambahkan ikon atau isi dari FAB di sini */}
        <Popover>
          <PopoverTrigger>
            <Button className="p-6 m-5" variant={"outline"}>
              <Mails />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="bg-blue-600 py-2">
              <Image src={"/logotravel.png"} width={100} height={40} alt={""} />
            </div>
            <FormProvider {...methods}>
              <form
                onSubmit={handleSubmit}
                className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
              >
                <div className="mb-4">
                  <label
                    htmlFor="username"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Username:
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Message:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
                  ></textarea>
                </div>
                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Submit
                  </button>
                </div>

                {showPopup && (
                  <div className="fixed inset-0 flex items-center justify-center">
                    <div className="bg-white border border-gray-300 rounded p-6 shadow-lg">
                      <p>Data berhasil dikirim!</p>
                    </div>
                  </div>
                )}
              </form>
            </FormProvider>
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
};

export default FloatingActionButton;
