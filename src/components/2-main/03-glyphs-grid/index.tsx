import { useSnapshot } from 'valtio';
import { fontData } from '@/store';
import { GlyphAttributes } from '@/store/types';
import { HTMLAttributes } from 'react';

function GlyphCell({ glyph, ...rest }: { glyph: GlyphAttributes; } & HTMLAttributes<HTMLDivElement>) {
    return (
        <div className="w-12 h-12 bg-red-400/30 border-primary-400 border rounded grid divide-y hover:scale-[2] transition-transform" {...rest}>

            <div className="px-1 py-1 border-primary-400 rounded grid place-items-center">
                <svg className="1fill-foreground bg-sky-400" viewBox="0 0 512 512">
                    <g transform="scale(1,-1) translate(0,-448) scale(0.9,0.9)">
                        <path d={glyph.d} />
                    </g>
                </svg>
            </div>

            <div className="w-8 h-8 text-[.65rem] flex items-center justify-center">
                {glyph.unicode}
            </div>
        </div>
    );
}

export function GlyphsGrid() {
    const snap = useSnapshot(fontData).glyphs;
    return (
        <div className="text-xs grid grid-cols-[repeat(auto-fit,minmax(3rem,1fr))]">
            {snap.map((glyph) => (
                <GlyphCell glyph={glyph} key={`${glyph.unicode}${glyph['glyph-name'] || ''}`} />
            ))}
        </div>
    );
}
