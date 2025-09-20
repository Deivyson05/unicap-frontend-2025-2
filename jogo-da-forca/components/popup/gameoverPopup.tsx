'use client'

interface GameoverPopupProps {
    active: boolean;
}

export function GameoverPopup({ active }: GameoverPopupProps) {
    return (
        <>
            {
                active == true ? (
                    <div className="fixed w-screen h-screen flex items-center justify-center bg-black/50">
                        <div className="bg-gray-50 text-black p-8 rounded-xl flex flex-col gap-6">
                            <h2 className="text-2xl font-semibold text-red-700">Você Perdeu!</h2>
                            <button
                                className="bg-blue-500 text-white rounded-xl py-4 font-semibold cursor-pointer"
                                onClick={() => {
                                    window.location.reload();
                                }}
                            >Reiniciar</button>
                        </div>
                    </div>
                ) : (<></>)
            }
        </>
    );
}