import { exists, createDir, BaseDirectory, readDir, FileEntry } from '@tauri-apps/api/fs';
import { NoteInfo } from '../models';
import { metadata } from "tauri-plugin-fs-extra-api"

export const getRootDir = ()=> {
    return `${BaseDirectory.Home}/notes`
}

export const getNotes = async ()=>{
    const rootDir = getRootDir()

    await exists(rootDir)
    
    if(!exists){
        await createDir('notes', { dir:  BaseDirectory.Home, recursive: true });
    }

    const notesFileNames = await readDir('notes', { dir: BaseDirectory.Home, recursive: true})
    
    const notes = notesFileNames.filter((file)=> file.name?.endsWith('.md'))
    

    return Promise.all(notes.map(getNoteInfoFromFile))
}

export const getNoteInfoFromFile = async (notes: FileEntry): Promise<NoteInfo> =>{
    const fileStats = await metadata(notes.path)
    return {
        title: notes.name || 'notes',
        lastEditTime: fileStats.modifiedAt.getMilliseconds()
    }
}
