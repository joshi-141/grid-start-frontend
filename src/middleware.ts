import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const token = req.cookies.get("token")?.value;

    const publicRoutes = [
        "/login",
        "/registration",
        "/forgot-password",
        "/reset-password",
        "/change-password"
    ];

    const isPublic = publicRoutes.some(route => req.nextUrl.pathname.startsWith(route));

    // 🔹 If user is not logged in, block protected pages
    if (!token && !isPublic) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    // 🔹 If logged in, prevent going back to login/register pages
    if (token && isPublic) {
        return NextResponse.redirect(new URL("/", req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/((?!_next|static|favicon.ico|images).*)",
    ]
};
