import React from 'react';
import { createRoot, Root } from 'react-dom/client';

// Define what a "Blueprint" component looks like.
// It must accept a 'resolve' prop so it can send its data back.
export type ModalBlueprintProps<T> = {
    resolve: (data: T) => void;
    reject: (reason?: any) => void;
};

type ModalInstance = {
    id: string;
    element: React.ReactNode;
};

// Internal listeners to update the React container when array changes
let listeners: () => void = () => {};
let modalQueue: ModalInstance[] = [];
let rootInstance: Root | null = null;

/**
 * 1. The Magic Function: Call this anywhere in your app!
 * @param Component The component blueprint
 * @param props Any extra props you want to pass to your blueprint
 */
export function openModal<T>(
    Component: React.ComponentType<ModalBlueprintProps<T> & any>,
    props: any = {}
): Promise<T> {
    return new Promise<T>((resolve, reject) => {
        const id = Math.random().toString(36).substring(2, 9);

        // When the component resolves, clean it up from the queue
        const handleResolve = (data: T) => {
            resolve(data);
            closeModalInstance(id);
        };

        const handleReject = (reason?: any) => {
            reject(reason);
            closeModalInstance(id);
        };

        // Instantiate the blueprint component dynamically
        const modalElement = (
            <Component
                key={id}
                resolve={handleResolve}
                reject={handleReject}
                {...props}
            />
        );

        modalQueue = [...modalQueue, { id, element: modalElement }];
        listeners(); // Notify the container component to re-render
    });
}

function closeModalInstance(id: string) {
    modalQueue = modalQueue.filter((m) => m.id !== id);
    listeners();
}

/**
 * 2. The Container Component
 * Put this once at the root of your app (e.g., App.tsx) so React has a place to mount the modals.
 */
export function GlobalModalContainer() {
    const [, forceUpdate] = React.useReducer((x) => x + 1, 0);

    React.useEffect(() => {
        listeners = () => forceUpdate();
        return () => {
            listeners = () => {};
        };
    }, []);

    if (modalQueue.length === 0) return null;

    return (
        <>
            {modalQueue.map((modal) => (
                <div key={modal.id} style={overlayStyle}>
                    <div style={modalBoxStyle}>
                        <button onClick={() => closeModalInstance(modal.id)} style={closeButtonStyle}>✕</button>
                        {modal.element}
                    </div>
                </div>
            ))}
        </>
    );
}

// --- Layout Styles to keep it on top ---
const overlayStyle: React.CSSProperties = {
    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    zIndex: 99999, // Absolute top layer
};

const modalBoxStyle: React.CSSProperties = {
    background: '#fff', padding: '24px', borderRadius: '12px',
    position: 'relative', minWidth: '350px', color: '#000',
    boxShadow: '0 8px 30px rgba(0,0,0,0.3)'
};

const closeButtonStyle: React.CSSProperties = {
    position: 'absolute', top: '12px', right: '12px',
    background: 'none', border: 'none', cursor: 'pointer', fontSize: '18px'
};