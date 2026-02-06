import { Code } from 'bright';

export function CodeBlock({ code, lang, lineNumbers, title }) {
    return (
        <div className="relative group">
            {title && (
                <div className="flex items-center gap-2 px-4 py-2 bg-black border-b border-cream/10">
                    <div className="w-2 h-2 bg-vermillion rounded-full" />
                    <span className="text-xs font-mono text-cream/50">{title}</span>
                </div>
            )}
            <Code
                lang={lang}
                lineNumbers={lineNumbers}
                theme="poimandres"
                className="!bg-black !rounded-none border border-cream/10"
            >
                {code}
            </Code>
        </div>
    );
}
