"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Facebook, Github, Apple } from "lucide-react";
import GoogleLogo from "./components/GoogleLogo";
import "./styles/page.css";

export default function NewCard() {
    const handleSocialLogin = (provider: string) => {
        console.log(`Logging in with ${provider}`);
        // Add your login logic here
    };

    return (
        <Card className="new-card-premium bg-black/60 border-white/80 shadow-2xl animate-in fade-in zoom-in duration-700">
            <CardHeader className="text-center space-y-3 pb-4">
                <CardTitle className="text-2xl md:text-3xl font-bold text-white">
                    Quick Sign In
                </CardTitle>
                <CardDescription className="text-gray-400 text-sm">
                    Choose your preferred login method
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-5">
                {/* Social Login Buttons */}
                <div className="space-y-5 social">
                    {/* Google Login */}
                    <Button
                        onClick={() => handleSocialLogin('Google')}
                        className="social-login-btn w-full bg-white hover:bg-gray-100 text-gray-800 font-semibold h-12 rounded-xl shadow-md transition-all hover:shadow-lg hover:scale-[1.02] border border-gray-200"
                    >
                        <GoogleLogo size={20} />
                        <span className="ml-3">Continue with Google</span>
                    </Button>

                    {/* Facebook Login */}
                    <Button
                        onClick={() => handleSocialLogin('Facebook')}
                        className="social-login-btn w-full bg-[#1877F2] hover:bg-[#166FE5] text-white font-semibold h-12 rounded-xl shadow-md transition-all hover:shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02]"
                    >
                        <Facebook size={20} fill="white" />
                        <span className="ml-3">Continue with Facebook</span>
                    </Button>

                    {/* GitHub Login */}
                    <Button
                        onClick={() => handleSocialLogin('GitHub')}
                        className="social-login-btn w-full bg-[#24292e] hover:bg-[#1a1e22] text-white font-semibold h-12 rounded-xl shadow-md transition-all hover:shadow-lg hover:shadow-gray-700/30 hover:scale-[1.02]"
                    >
                        <Github size={20} />
                        <span className="ml-3">Continue with GitHub</span>
                    </Button>

                    {/* Apple Login */}
                    <Button
                        onClick={() => handleSocialLogin('Apple')}
                        className="social-login-btn w-full bg-black hover:bg-gray-900 text-white font-semibold h-12 rounded-xl shadow-md transition-all hover:shadow-lg hover:shadow-gray-800/30 hover:scale-[1.02] border border-white/10"
                    >
                        <Apple size={20} fill="white" />
                        <span className="ml-3">Continue with Apple</span>
                    </Button>
                </div>

                {/* Divider */}
                <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-white/10"></div>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-black/60 px-3 text-gray-400 font-semibold">
                            Secure & Fast
                        </span>
                    </div>
                </div>

                {/* Info Text */}
                <p className="text-center text-xs text-gray-500 leading-relaxed">
                    By continuing, you agree to our Terms of Service and Privacy Policy
                </p>
            </CardContent>
        </Card>
    );
}