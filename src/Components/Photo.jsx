import { useState } from "react";
export default function Photo({
    src,
    alt,
    label,
    className = "",
    natural = false,
}) {
    const [ok, setOk] = useState(true);
    return (
        <div
            className={`overflow-hidden ${natural ? "" : "bg-ink/10"} ${className}`}
        >
            {ok ? (
                <img
                    src={src}
                    alt={alt}
                    onError={() => setOk(false)}
                    className={
                        natural ? "block h-auto w-full" : "h-full w-full object-cover"
                    }
                />
            ) : (
                <div
                    className={`grid h-full min-h-32 place-items-center border border-dashed border-ink/40 p-4 text-center text-xs text-ink/60 ${natural ? "aspect-[3/4]" : ""}`}
                >
                    {label}
                </div>
            )}
        </div>
    );
}
