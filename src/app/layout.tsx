import "./globals.css";
import {Metadata} from "next";
import GlobalWrapperClientComponent from "./_components/common/globalWrapperClientComponent";

export const metadata: Metadata = {
    title: "BlueLunch",
    description: "BlueLunch",
};

export default function RootLayout({
   children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
        <GlobalWrapperClientComponent>
            {children}
        </GlobalWrapperClientComponent>
        </body>
        </html>
    );
}
