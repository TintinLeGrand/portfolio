'use client';

import { MonoText } from './MonoText';
import { CircularProgress } from "@nextui-org/react";

export function ElementCard({
    name,
    url,
    knowledge
}: Readonly<{
    name: string;
    url: string;
    knowledge: any;
}>) {

    let value: number = knowledge.value;
    let color: string;
    if (value <= 15) {
        color = "stroke-gray-400";
    } else if (value <= 40) {
        color = "stroke-blue-400";
    } else if (value <= 65) {
        color = "stroke-orange-400";
    } else {
        color = "stroke-lime-400";
    }

    let track = color + "/10";

    return (
        <div className="rounded-full flex flex-col items-center min-w-32 lg:min-w-40 min-h-32 lg:min-h-40 p-4 gap-2 h-fit">
            <div className="rounded-full overflow-hidden h-24 w-24 items-center justify-center flex bg-white">
                <CircularProgress
                    className='absolute rounded-full ring-0 hover:ring-2 ring-black dark:ring-white'
                    classNames={{
                        svg: "w-32 h-32 drop-shadow-md",
                        indicator: color,
                        track: track,
                        value: "text-3xl font-semibold text-white",
                    }}
                    strokeWidth={2}
                    value={value} />
                <img src={url} alt={`${name} application icon`} className='aspect-auto strokelim max-w-24 max-h-24' />
            </div>
            <MonoText className="text-lg md:text-xl max-w-24 mt-4">{name}</MonoText>
            <p className='text-sm'>
                {knowledge.text}
            </p>
        </div>
    );
}