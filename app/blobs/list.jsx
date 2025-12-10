'use client';
import { useEffect, useState } from 'react';
import { listShapesAction, getShapeAction } from './actions';
import { ShapeRenderer } from './renderer';
import { generateBlob } from './generator';

export function StoredBlobsList({ lastMutationTime }) {
    const [keys, setKeys] = useState([]);
    const [selectedKey, setSelectedKey] = useState();
    const [previewData, setPreviewData] = useState();

    useEffect(() => {
        console.log('Fetching keys...');
        listShapesAction().then((response) => {
            setKeys(response);
        });
    }, [lastMutationTime]);

    const onSelect = async (keyName) => {
        setSelectedKey(keyName);
        const data = await getShapeAction({ keyName });
        setPreviewData(data);
    };

    return (
        <div className="flex flex-col items-center justify-center gap-3">
            <div className="text-lg font-bold h-6">Objects in Blob Store</div>
            <div className="flex flex-col gap-1 w-full bg-base-200 min-h-56 card">
                <div className="card-body text-md">
                    {!keys?.length ? (
                        <span>Please upload some shapes!</span>
                    ) : (
                        keys.map((keyName) => {
                            const isSelected = keyName === selectedKey;
                            return (
                                <div
                                    key={keyName}
                                    onClick={() => {
                                        onSelect(keyName);
                                    }}
                                    className={'w-full hover:bg-base-300 ' + (isSelected ? 'font-bold' : '')}
                                >
                                    {keyName}
                                </div>
                            );
                        })
                    )}
                    {previewData && <BlobPreview data={previewData} />}
                </div>
            </div>
        </div>
    );
}

function BlobPreview({ data }) {
    const fullBlobData = generateBlob(data); // Recreates the SVG path by the existing parameters
    return (
        <div className="mt-4 lg:mx-16 border border-neutral rounded">
            <div className="p-2 text-center">{data.name}</div>
            <div className="bg-neutral text-neutral-content p-2 font-mono">{JSON.stringify(data, null, ' ')}</div>
            <ShapeRenderer svgPath={fullBlobData.svgPath} colors={fullBlobData.parameters.colors} />
        </div>
    );
}
