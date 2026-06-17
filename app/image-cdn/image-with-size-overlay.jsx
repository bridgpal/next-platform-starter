'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { buildNetlifyImageUrl, getResourceSize } from 'utils';

function normalizeSrcSet(srcSet) {
    if (!srcSet) {
        return srcSet;
    }

    return srcSet
        .split(',')
        .map((candidate) => {
            const trimmedCandidate = candidate.trim();
            if (!trimmedCandidate) {
                return trimmedCandidate;
            }

            const [src, descriptor] = trimmedCandidate.split(/\s+/, 2);
            const normalizedSrc = buildNetlifyImageUrl(src);
            return descriptor ? `${normalizedSrc} ${descriptor}` : normalizedSrc;
        })
        .join(', ');
}

export function ImageWithSizeOverlay({ src, srcSet, sizes, overlayPosition }) {
    const imageRef = useRef();
    const [imgSize, setImgSize] = useState(undefined);
    const normalizedSrc = buildNetlifyImageUrl(src);
    const normalizedSrcSet = normalizeSrcSet(srcSet);

    const handleImageLoad = useCallback(() => {
        const imgElement = imageRef.current;
        if (imgElement?.complete) {
            const size = getResourceSize(imgElement?.currentSrc);
            setImgSize(size);
        } else {
            setImgSize(undefined);
        }
    }, []);

    useEffect(() => {
        handleImageLoad();
    }, [handleImageLoad]);

    return (
        <div className="relative">
            {imgSize && (
                <span
                    className={`absolute py-1.5 px-2.5 text-sm rounded-lg bg-neutral-900/70 top-2.5 ${
                        overlayPosition === 'right' ? 'right-2.5' : 'left-2.5'
                    }`}
                >{`Size: ${Math.ceil(imgSize / 1024)}KB`}</span>
            )}

            <img
                src={normalizedSrc}
                srcSet={normalizedSrcSet}
                sizes={sizes}
                alt="Corgi"
                onLoad={handleImageLoad}
                ref={imageRef}
            />
        </div>
    );
}
