import { atom } from "jotai";
import { NoteInfo } from "../models";
import { notesMock } from "./mocks";

// const loadNotes = async () => {
//   const notes = await window.
// }

export const notesAtom = atom<NoteInfo[]>(notesMock)

export const selectedNoteIndexAtom = atom<number | null>(null)

export const selectedNoteAtom = atom((get)=> {
    const notes = get(notesAtom)
    const selectedNoteIndex = get(selectedNoteIndexAtom)

    if (selectedNoteIndex == null) return null

    const selectedNote = notes[selectedNoteIndex]
    return {
        ...selectedNote,
        content: `Hello from note ${selectedNoteIndex}`
    }
})

export const createEmptyNoteAtom = atom(null, async (get, set) => {
    const notes = get(notesAtom)
  
    if (!notes) return
  
    const title = `Note ${notes.length+1}`
  
    if (!title) return
  
    const newNote: NoteInfo = {
      title,
      lastEditTime: Date.now()
    }
  
    set(notesAtom, [newNote, ...notes.filter((note) => note.title !== newNote.title)])
  
    set(selectedNoteIndexAtom, 0)
  })
  
  export const deleteNoteAtom = atom(null, async (get, set) => {
    const notes = get(notesAtom)
    const selectedNote = get(selectedNoteAtom)
  
    if (!selectedNote || !notes) return
  
    // const isDeleted = await window.context.deleteNote(selectedNote.title)
  
    // if (!isDeleted) return
  
    // filter out the deleted note
    set(
      notesAtom,
      notes.filter((note) => note.title !== selectedNote.title)
    )
  
    // de select any note
    set(selectedNoteIndexAtom, null)
  })