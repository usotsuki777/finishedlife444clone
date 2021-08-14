import React, { ReactNode } from 'react'

import { RightNav } from "../components/RightNav"

type Props = {
    children: ReactNode
}

function MainLayout({ children }: Props) {
    return (
        <div className="bg-[#3fbf3f] bg-opacity-[0.2]">
            <main>
                <div className="container mx-auto">
                    <div className="flex">
                        <div className="flex-1" />
                        <div className="flex-0">
                            <div className="pt-10 mb-20">
                                <div className="bg-[#B9E8B9] ring-4 ring-[#394239]  max-w-screen-lg mx-auto ">

                                    {children}

                                </div>
                            </div>

                        </div>

                        <div className="flex-1" >
                            <RightNav />
                        </div>

                    </div>
                </div>
            </main>
        </div>
    )
} // ! MainLayout

export { MainLayout }