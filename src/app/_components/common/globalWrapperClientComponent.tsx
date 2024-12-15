"use client";

import {ReactNode} from "react";
import {RecoilRoot} from "recoil";
import {SessionProvider} from "next-auth/react";

type RecoilWrapperComponentProps = {
    children: ReactNode
}

const GlobalWrapperClientComponent = ({children}: RecoilWrapperComponentProps) => {
    return <RecoilRoot>
        <SessionProvider>
            {children}
        </SessionProvider>
    </RecoilRoot>;
}

export default GlobalWrapperClientComponent;