import {GET} from "../backend/Backend.tsx";
import HandleStatus from "./HandleStatus.tsx";
import {loadPages, PROJ_STATE} from "../menu/PageManager.tsx";
import type {ModalBlueprintProps} from "../Modal.tsx";
import {openModal} from "../Modal.tsx";

interface VersionMeta {
    id: number;
    details: any;
}

export default async function OpenProjVersion() {
    if (!PROJ_STATE.currentId) {
        console.error("No project selected! Please run OpenProj first.");
        return;
    }

    const projRes = await GET(`/project/${PROJ_STATE.currentId}/info`);
    HandleStatus(projRes, false);

    if (projRes.payload) {
        const versions: number[] = projRes.payload.versions || [];

        if (versions.length === 0) {
            alert("No versions found for this project.");
            return;
        }

        const versionDetailsPromises = versions.map(async (id) => {
            const verRes = await GET(`/project/version/${id}/info`);
            return {
                id: id,
                details: verRes.payload ? verRes.payload : "Failed to load info"
            };
        });

        const rawVersionsMeta = await Promise.all(versionDetailsPromises);

        const data = await openModal<OpenProjVersionData>(OpenProjVersionModal, {
            versionsData: rawVersionsMeta
        });

        PROJ_STATE.currentVersionId = data.selectedVersionId;
        const v = (await GET(`/project/version/${data.selectedVersionId}/info`)).payload;
        console.log(v);
        PROJ_STATE.setCurrentVersion(v);
        loadPages();
    }
}

// -------------------------------------------------------------

// What the modal returns
interface OpenProjVersionData {
    selectedVersionId: number;
}

interface OpenProjVersionModalProps extends ModalBlueprintProps<OpenProjVersionData> {
    versionsData: VersionMeta[];
}

export function OpenProjVersionModal({ resolve, versionsData }: OpenProjVersionModalProps) {
    return (
        <div>
            <h3 style={{ marginTop: 0, marginBottom: '16px' }}>Version auswählen...</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: '400px', overflowY: 'auto' }}>
                {versionsData.map((v) => {
                    let displayString = `Version ID: ${v.id}`;

                    if (v.details && typeof v.details === 'object' && typeof v.details.erstellt === 'number') {
                        const date = new Date(v.details.erstellt);

                        displayString = date.toLocaleString();
                    } else if (typeof v.details === 'string') {
                        displayString = v.details;
                    }

                    return (
                        <button
                            key={v.id}
                            onClick={() => {
                                resolve({ selectedVersionId: v.id });
                            }}
                            style={optionButtonStyle}
                        >
                            <div style={{ fontWeight: '500' }}>{displayString}</div>
                            <div style={{ fontSize: '11px', color: '#777', marginTop: '2px' }}>
                                ID: {v.id}
                            </div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
const optionButtonStyle: React.CSSProperties = {
    padding: '12px',
    textAlign: 'left',
    background: '#f9f9f9',
    border: '1px solid #e5e5e5',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background 0.2s',
    color: '#222'
};