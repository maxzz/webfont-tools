import { useSnapshot } from 'valtio';
import { fontData } from '@/store';
import { GlyphAttributes } from '@/store/types';
import { HTMLAttributes } from 'react';

function GlyphCell({ glyph, ...rest }: { glyph: GlyphAttributes; } & HTMLAttributes<HTMLDivElement>) {
    return (
        <div className="group w-min bg-sky-400/20 border-primary-400 border rounded divide-y grid" {...rest}>

            <div className="px-1 py-1 w-16 h-16 border-primary-400 rounded grid place-items-center group-hover:scale-[2] transition-transform">
                <svg className="1fill-foreground bg-sky-400" viewBox="0 0 512 512" transform="scale(1,-1)">
                {/* <svg className="1fill-foreground bg-sky-400/40" viewBox="0 0 1000 1000" transform="scale(1,-1)"> */}
                    <g
                        // transform="scale(1,-1) translate(0,-448) scale(0.9,0.9)"
                    >
                        <path d={glyph.d} />
                    </g>
                </svg>
            </div>

            <button>copy</button>

            <div className="w-full text-[.65rem] flex items-center justify-center overflow-hidden">
                {glyph.unicode}
            </div>
        </div>
    );
}

export function GlyphsGrid() {
    const snap = useSnapshot(fontData).glyphs;
    return (
        <div className="text-xs grid grid-cols-[repeat(auto-fit,minmax(5rem,1fr))]">
            {snap.map((glyph) => (
                <GlyphCell glyph={glyph} key={`${glyph.unicode}${glyph['glyph-name'] || ''}`} />
            ))}
        </div>
    );
}
