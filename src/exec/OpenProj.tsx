import {GET} from "../backend/Backend.tsx";
import HandleStatus from "./HandleStatus.tsx";
import type {Project} from "../menu/PageManager.tsx";
import {PROJ_STATE} from "../menu/PageManager.tsx";
import {openModal} from "../Modal.tsx";
import type {ModalBlueprintProps} from "../Modal.tsx";
import {useEffect, useState} from "react";

export default async function OpenProj() {
    const data = await openModal(OpenProjModal);

    PROJ_STATE.currentId = data.selectedId;
    const p: Project = (await GET(`/project/${data.selectedId}/info`)).payload as Project;
    PROJ_STATE.setCurrent(p);
}

interface OpenProjData {
    selectedId: number
}

export function OpenProjModal({ resolve, reject }: ModalBlueprintProps<OpenProjData>) {
    const [projects, setProjects] = useState<Array<{ id: number; name: string }>>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProjects() {
            try {
                const res = await GET("/project/list");
                HandleStatus(res, false);

                if (res.payload && res.payload.projects) {
                    setProjects(res.payload.projects);
                }
            } catch (err) {
                console.error("Failed to load projects", err);
                reject(err);
            } finally {
                setLoading(false);
            }
        }

        fetchProjects();
    }, [reject]);

    if (loading) {
        return <div style={{ textAlign: 'center', padding: '20px' }}>Loading projects...</div>;
    }

    return (
        <div>
            <h3 style={{ marginTop: 0, marginBottom: '16px' }}>Projekt auswählen...</h3>

            {projects.length === 0 ? (
                <p style={{ color: '#666' }}>Noch keine Projekte.</p>
            ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {projects.map((project) => (
                        <button
                            key={project.id}
                            onClick={() => {
                                resolve({ selectedId: project.id });
                            }}
                        >
                            {project.name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}