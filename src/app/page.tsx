import { SignInButton } from "@/components/auth/signin-button";
import { SignOutButton } from "@/components/auth/signout-button";
import { UserMenu } from "@/components/auth/user-menu";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { ArrowRight, LogIn, LogOut } from "lucide-react";
import Link from "next/link";

export default async function Home() {
    const session = await auth();
    return (
        <div className="flex flex-1 flex-col items-center justify-center">
            <div className="container flex flex-col items-center justify-center gap-2">
                <h1 className="text-2xl font-bold">Login First</h1>
                <p className="text-sm text-muted-foreground">Login to start tipping.</p>
                <div className="flex gap-2">
                    {session ? (
                        <>
                            <Link href="/dash" className="flex items-center gap-2">
                                <Button variant="outline" size="sm">
                                    <ArrowRight size={16} />
                                    Go to Dashboard
                                </Button>
                            </Link>
                            <SignOutButton className="gap-2">
                                <LogOut size={16} />
                                Sign Out
                            </SignOutButton>
                        </>
                    ) : (
                        <SignInButton className="gap-2">
                            <LogIn size={16} />
                            Sign In
                        </SignInButton>
                    )}
                </div>
            </div>
        </div>
    );
}
