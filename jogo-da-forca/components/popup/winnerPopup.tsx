'use client'

interface WinnerPopupProps {
    active: boolean;
}

export function WinnerPopup({ active }: WinnerPopupProps) {
    return (
        <>
            {
                active == true ? (
                    <div className="fixed w-screen h-screen flex items-center justify-center bg-black/50">
                        <div className="bg-gray-50 text-black p-8 rounded-xl flex flex-col gap-6">
                            <h2 className="text-2xl font-semibold text-green-700">Você Venceu!</h2>
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