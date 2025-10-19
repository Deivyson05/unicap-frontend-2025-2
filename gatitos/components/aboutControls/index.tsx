'use-client'

import { Undo2, FolderClosed, GitPullRequestArrow, LayoutPanelTop } from "lucide-react";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import { Badge } from "@/components/ui/badge";


interface Props {
    projeto: {
        id: string;
        nome: string;
        desc: string;
        repo: string;
        site: string;
        img: string;
        tec: string[];
    } | undefined;

    onBack: () => void;
}

export function AboutControls({ projeto, onBack }: Props) {
    const buttonStyle = "p-6 cursor-pointer"

    return (
        <div className="flex fixed left-0 bottom-0 w-screen justify-between p-6">
            <div className="flex bg-background border-2 rounded-full">
                <button className={buttonStyle}
                    onClick={onBack}
                >
                    <Undo2 />
                </button>
            </div>
            <div className="flex bg-background border-2 rounded-full">
                <button className={buttonStyle}
                    onClick={() => {
                        window.open(projeto?.site || "#");
                    }}
                >
                    <LayoutPanelTop />
                </button>
                <button className={buttonStyle}
                    onClick={() => {
                        window.open(projeto?.repo || "#");
                    }}
                >
                    <FolderClosed />
                </button>
                
                <Dialog>
                    <DialogTrigger className={buttonStyle}>
                        <GitPullRequestArrow/>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader className="flex flex-col gap-4">
                            <DialogTitle>Tecnologias usadas:</DialogTitle>
                            <DialogDescription className="flex flex-wrap gap-2">
                                {
                                    projeto?.tec.map((t, index) => (
                                        <Badge variant="default" key={index}
                                            className={`text-white border-l-4`}
                                        >{t}</Badge>
                                    ))
                                }
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}