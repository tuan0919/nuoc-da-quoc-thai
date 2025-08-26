import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FaFacebook, FaGoogle, FaRegUser, FaTwitter } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { TbLockPassword } from "react-icons/tb";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginStore } from "../stores/login.ui.store";
import { useMutation } from "@tanstack/react-query";
import { AuthService } from "../services/AuthService";
import { LogInIcon } from "lucide-react";
import { useAuthenticateStore } from "@/shared/auth.store";

const FormSchema = z.object({
    username: z.string().min(2, {
        message: "Tên tài khoản phải có ít nhất 2 chữ số.",
    }),
    password: z.string().min(3, {
        message: "Mật khẩu phải có ít nhất 3 chữ số",
    }),
});

export function LoginForm({ className }: { className?: string }) {
    const navigate = useNavigate();
    const { username, password, setUsername, setPassword, reset } = useLoginStore();
    const {setToken, setRefreshToken, setUsername: setAuthUsername } = useAuthenticateStore();
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: username,
            password: password,
        },
    });
    const login = useMutation({
        mutationKey: ["login", username, password],
        mutationFn: (values: { username: string; password: string }) =>
            AuthService.login(values.username, values.password),
        onSuccess: ({ token, refreshToken }) => {
            setToken(token);
            setRefreshToken(refreshToken);
            setAuthUsername(username);
        },
        onError: (err) => {
            console.error("Login failed", err);
        }
    });
    const onSubmit = form.handleSubmit(async (values) => {
        login.mutate(values);
        reset();
        navigate("/");
    });
    return (
        <div className={className}>
            <Form {...form}>
                <form className="space-y-6">
                    <div
                    >
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <div className="relative">
                                            <FaRegUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                                            <Input
                                                placeholder="Username/Email"
                                                className="pl-12 pr-4 py-4 border-2 border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 rounded-xl text-base shadow-sm"
                                                {...field}
                                                value={username}
                                                onChange={(e) => {
                                                    field.onChange(e);
                                                    setUsername(e.target.value)
                                                }}
                                            />
                                        </div>
                                    </FormControl>
                                    <FormMessage className="text-red-500 text-sm mt-1" />
                                </FormItem>
                            )}
                        />
                    </div>

                    {/* Password Field */}
                    <div
                    >
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <div className="relative">
                                            <TbLockPassword className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                                            <Input
                                                type="password"
                                                placeholder="Password"
                                                className="pl-12 pr-4 py-4 border-2 border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 rounded-xl text-base shadow-sm"
                                                {...field}
                                                value={password}
                                                onChange={(e) => {
                                                    field.onChange(e);
                                                    setPassword(e.target.value)
                                                }}
                                            />
                                        </div>
                                    </FormControl>
                                    <FormMessage className="text-red-500 text-sm mt-1" />
                                </FormItem>
                            )}
                        />
                    </div>

                    {/* Forgot Password Link */}
                    <div
                    >
                        <Link
                            to="/forgot-password"
                            className="text-purple-600 hover:text-purple-800 text-sm font-medium transition-colors block text-right"
                        >
                            Quên mật khẩu?
                        </Link>
                    </div>

                    {/* Sign In Button */}
                    <div
                    >
                        <Button
                            type="submit"
                            className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl"
                            onClick={onSubmit}
                        >
                            <LogInIcon color="white" size={20} />
                            Đăng nhập
                        </Button>
                    </div>
                </form>
            </Form>

            {/* Divider */}
            <div
                className="my-6 flex items-center"
            >
                <div className="flex-1 border-t border-gray-300"></div>
                <span className="px-4 text-gray-500 text-sm font-medium">
                    HOẶC Tiếp tục với
                </span>
                <div className="flex-1 border-t border-gray-300"></div>
            </div>

            {/* Social Login Buttons */}
            <div
                className="flex justify-center space-x-4 mb-6"
            >
                <button
                    className="w-12 h-12 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center hover:border-gray-300 hover:shadow-md transition-all duration-300"
                >
                    <FaGoogle className="text-red-500 text-xl" />
                </button>
                <button
                    className="w-12 h-12 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center hover:border-gray-300 hover:shadow-md transition-all duration-300"
                >
                    <FaFacebook className="text-blue-600 text-xl" />
                </button>
                <button
                    className="w-12 h-12 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center hover:border-gray-300 hover:shadow-md transition-all duration-300"
                >
                    <FaTwitter className="text-blue-400 text-xl" />
                </button>
            </div>

            {/* Sign Up Link */}
            <div
                className="text-center"
            >
                <p className="text-gray-600 text-sm">
                    Chưa có tài khoản?{" "}
                    <Link
                        to="/signup"
                        className="text-purple-600 font-semibold hover:text-purple-800 hover:underline transition-colors"
                    >
                        ĐĂNG KÝ
                    </Link>
                </p>
            </div>
        </div>
    )
}