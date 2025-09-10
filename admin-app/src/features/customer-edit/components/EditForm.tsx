import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FaUser, FaMapMarkerAlt, FaPhone, FaTag } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Schema for form validation
const FormSchema = z.object({
  customerName: z.string().min(2, { message: "Tên phải có ít nhất 2 ký tự." }),
  address: z.string().min(5, { message: "Địa chỉ phải có ít nhất 5 ký tự." }),
  phoneNumber: z
    .string()
    .regex(/^[0-9]{10}$/, { message: "Số điện thoại không hợp lệ." }),
  price1: z.number().min(0, { message: "Giá phải là số dương." }),
  price2: z.number().min(0, { message: "Giá phải là số dương." }),
  avatar: z.string().optional(),
});

type FormValues = z.infer<typeof FormSchema>;

export const EditForm = () => {
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      customerName: "",
      address: "",
      phoneNumber: "",
      price1: 0,
      price2: 0,
      avatar: "",
    },
  });

  return (
    <div className="flex-1 px-2 py-4 sm:px-4">
      <div className="bg-white/70 rounded-2xl shadow p-3 sm:p-6">
        <div className="flex flex-col items-center mb-6">
          <img
            src={
              avatarPreview ||
              `https://i.pravatar.cc/150?u=demo`
            }
            className="w-24 h-24 rounded-full object-cover border-4 border-white dark:border-gray-600 shadow-md mb-4"
          />
          <input
            type="file"
            id="avatar-upload"
            accept="image/*"
            className="hidden"
          />
          <label
            htmlFor="avatar-upload"
            className="cursor-pointer text-sm text-pink-600 hover:underline"
          >
            Thay đổi ảnh đại diện
          </label>
        </div>

        <Form {...form}>
          <form className="space-y-4">
            {/* Tên khách hàng */}
            <FormField
              control={form.control}
              name="customerName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs sm:text-sm font-semibold text-pink-500 mb-1 flex items-center gap-1">
                    <FaUser className="w-4 h-4" /> Tên khách hàng
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="Nhập tên khách hàng..."
                      className="w-full px-2 py-1 text-xs sm:text-sm rounded-md border"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Địa chỉ */}
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs sm:text-sm font-semibold text-pink-500 mb-1 flex items-center gap-1">
                    <FaMapMarkerAlt className="w-4 h-4" /> Địa chỉ
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="Nhập địa chỉ..."
                      className="w-full px-2 py-1 text-xs sm:text-sm rounded-md border"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Số điện thoại */}
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs sm:text-sm font-semibold text-pink-500 mb-1 flex items-center gap-1">
                    <FaPhone className="w-4 h-4" /> Số điện thoại
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="tel"
                      placeholder="Nhập số điện thoại..."
                      className="w-full px-2 py-1 text-xs sm:text-sm rounded-md border"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Giá */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="price1"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs sm:text-sm font-semibold text-pink-500 mb-1 flex items-center gap-1">
                      <FaTag className="w-4 h-4" /> Giá đá bi (VNĐ)
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="number"
                        placeholder="Nhập giá đá bi..."
                        className="w-full px-2 py-1 text-xs sm:text-sm rounded-md border"
                        value={field.value === 0 ? "" : field.value}
                        onChange={(e) =>
                          field.onChange(parseInt(e.target.value, 10) || 0)
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="price2"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs sm:text-sm font-semibold text-pink-500 mb-1 flex items-center gap-1">
                      <FaTag className="w-4 h-4" /> Giá đá cây (VNĐ)
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="number"
                        placeholder="Nhập giá đá cây..."
                        className="w-full px-2 py-1 text-xs sm:text-sm rounded-md border"
                        value={field.value === 0 ? "" : field.value}
                        onChange={(e) =>
                          field.onChange(parseInt(e.target.value, 10) || 0)
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                className="flex-1 py-2 rounded-xl bg-gradient-to-r from-pink-500 via-pink-400 to-pink-600 text-white font-bold text-xs sm:text-base shadow"
              >
                Lưu thay đổi
              </Button>

              <Button
                type="button"
                variant="outline"
                className="flex-1 py-2 rounded-xl border-pink-200 text-pink-600 font-bold text-xs sm:text-base shadow"
              >
                Hủy
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};
