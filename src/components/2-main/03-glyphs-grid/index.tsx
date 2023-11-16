import { useSnapshot } from 'valtio';
import { fontData } from '@/store';
import { GlyphAttributes } from '@/store/types';
import { HTMLAttributes } from 'react';

function GlyphCell({ glyph, ...rest }: { glyph: GlyphAttributes; } & HTMLAttributes<HTMLDivElement>) {
    return (
        <div className="px-1 py-1 border-primary-400 border rounded flex space-x-2" {...rest}>

            <div className="flex">
                <div className="w-8 h-8 bg-primary-200 border-primary-400 border rounded flex items-center justify-center">
                    {glyph.unicode}
                </div>

                <div className="border-primary-400 border rounded grid place-items-center">
                    {/* <svg className="w-16 h-16 bg-blue-300" viewBox="0 0 512 512" transform="scale(1,-1)"> */}
                    <svg className="w-16 h-16 bg-blue-300" viewBox="0 0 512 512">
                        <g transform="scale(1,-1) translate(0, -448) scale(0.9, 0.9)">
                            <path d={glyph.d} />
                        </g>
                    </svg>
                </div>
            </div>

        </div>
    );
}

export function GlyphsGrid() {
    const snap = useSnapshot(fontData).glyphs;
    return (
        <div className="text-xs grid grid-cols-[repeat(auto-fit,minmax(16rem,1fr))]">
            {snap.map((glyph) => (
                <GlyphCell glyph={glyph} key={`${glyph.unicode}${glyph['glyph-name'] || ''}`} />
            ))}
        </div>
    );
}
