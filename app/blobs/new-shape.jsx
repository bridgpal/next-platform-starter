'use client';

import { useEffect, useState } from 'react';
import { generateBlob } from 'app/blobs/generator';
import { ShapeRenderer } from './renderer';
import { uploadShapeAction } from './actions';
import { uploadDisabled } from 'utils';

export function NewShape(props) {
    const { setLastMutationTime } = props;
    const [blobData, setBlobData] = useState();
    const [wasUploaded, setWasUploaded] = useState(false);

    const randomizeBlob = () => {
        setBlobData(generateBlob());
        setWasUploaded(false);
    };

    const onUpload = async () => {
        await uploadShapeAction({ parameters: blobData.parameters });
        setWasUploaded(true);
        setLastMutationTime(Date.now());
    };

    useEffect(() => {
        if (!blobData) {
            randomizeBlob();
        }
    }, [blobData]);

    return (
        <div className="flex flex-col items-center justify-center w-full gap-5">
            <div className="text-lg font-bold">New Random Shape</div>
            <div className="rounded-lg bg-white border border-orange-200 shadow-xl shadow-orange-900/10 overflow-hidden">
                <div className="text-md w-full text-center text-orange-950 text-lg p-4 border-b border-orange-200">
                    {blobData?.parameters?.name}
                </div>
                <div className="p-4">
                    <ShapeRenderer svgPath={blobData?.svgPath} colors={blobData?.parameters?.colors} />
                </div>
            </div>
            <div className="flex justify-center gap-4 pt-2">
                <button className="btn btn-primary" onClick={randomizeBlob}>
                    Randomize
                </button>
                <button className="btn btn-primary" onClick={onUpload} disabled={uploadDisabled || wasUploaded || !blobData}>
                    Upload
                </button>
            </div>
        </div>
    );
}
