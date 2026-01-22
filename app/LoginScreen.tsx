"use client";

import { useState } from "react";
import { AuthMode } from "./types";
import {
    Eye,
    EyeOff,
    Facebook,
    ArrowRight,
} from "lucide-react";
import GoogleLogo from "./components/GoogleLogo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import "./styles/page.css";

interface LoginScreenProps {
    mode: AuthMode;
    setMode: (mode: AuthMode) => void;
    onLogin: (email: string) => void;
}

export default function LoginScreen({
    mode,
    setMode,
    onLogin,
}: LoginScreenProps) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [fullname, setFullname] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !password) return;

        setIsLoading(true);
        setTimeout(() => {
            onLogin(email);
            setIsLoading(false);
        }, 1500);
    };

    return (
        <Card className="login-page  bg-black/60  border-white/80 shadow-2xl animate-in fade-in zoom-in duration-700">
            <CardHeader className="text-center space-y-2 pb-4">
                <CardTitle className="text-xl md:text-3xl font-bold text-white">
                    Welcome to Back
                </CardTitle>
                <CardDescription className="text-gray-400 text-xs md:text-sm">
                    Please enter your details to login
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">


                {/* Login Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Email Field */}
                    <div className="space-y-2">
                        <Label htmlFor="fullname" className="label text-white text-xs uppercase  font-semibold opacity-70">
                            Full Name
                        </Label>
                        <div className="relative">

                            <Input
                                id="fullname"
                                type="text"
                                required
                                value={fullname}
                                onChange={(e) => setFullname(e.target.value)}
                                placeholder="enter your full name"
                                autoComplete="off"
                                className="input w-full bg-white/5 border-white/10 text-white placeholder:text-gray-500 pl-12 pr-4 h-12 rounded-xl focus-visible:ring-blue-500/50 focus-visible:border-blue-500/50"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email" className="label text-white text-xs uppercase font-semibold opacity-70">
                            Email
                        </Label>
                        <div className="relative">

                            <Input
                                id="email"
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="email@example.com"
                                autoComplete="off"
                                className="input w-full bg-white/5 border-white/10 text-white placeholder:text-gray-500 pl-12 pr-4 h-12 rounded-xl focus-visible:ring-blue-500/50 focus-visible:border-blue-500/50"
                            />
                        </div>
                    </div>

                    {/* Password Field */}
                    <div className="space-y-2">
                        <Label htmlFor="password" className="label text-white text-xs uppercase font-semibold opacity-70">
                            Password
                        </Label>
                        <div className="relative">

                            <Input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                autoComplete="new-password"
                                className="input w-full bg-white/5 border-white/10 text-white placeholder:text-gray-500 pl-12 pr-4 h-12 rounded-xl focus-visible:ring-blue-500/50 focus-visible:border-blue-500/50"
                            />
                            <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 hover:bg-transparent h-8 w-8"
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </Button>



                        </div>
                    </div>

                    {/* Remember Me & Forgot Password */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 translate-y-5 gap-2 checkbox">
                            <Checkbox
                                id="remember"
                                className="border-white/30 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                            />
                            <Label
                                htmlFor="remember"
                                className="text-white text-sm select-none cursor-pointer"
                            >
                                Remember me
                            </Label>
                        </div>
                        <Button
                            variant="link"
                            type="button"
                            onClick={() => setMode(AuthMode.FORGOT)}
                            className="text-blue-400 hover:text-blue-300 text-sm p-0 h-auto font-medium translate-y-5"
                        >
                            Forgot Password?
                        </Button>
                    </div>

                    {/* Submit Button */}
                    <Button
                        disabled={isLoading}
                        type="submit"
                        className="button h-12 px-6
    rounded-xl
    text-base font-semibold text-white
    bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500
    shadow-lg shadow-blue-500/25
    transition-all duration-300
    hover:scale-[1.03]
    hover:shadow-purple-500/40
    active:scale-[0.97]"
                        size="lg"
                    >
                        {isLoading ? (
                            <>
                                <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                Loading...
                            </>
                        ) : (
                            <>
                                {mode === AuthMode.LOGIN ? "Login" : "Create Account"}
                                <ArrowRight size={18} />
                            </>
                        )}
                    </Button>
                </form>
            </CardContent>

            <CardFooter className="justify-center pb-6">
                <Button
                    variant="link"
                    type="button"
                    onClick={() =>
                        setMode(mode === AuthMode.LOGIN ? AuthMode.SIGNUP : AuthMode.LOGIN)
                    }
                    className="text-white font-semibold hover:text-blue-300 hover:underline"
                >
                    {mode === AuthMode.LOGIN
                        ? "Don't have an account? Sign Up"
                        : "Already have an account? Sign In"}
                </Button>
            </CardFooter>
        </Card>
    );
}
