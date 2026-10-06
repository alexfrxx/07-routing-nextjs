import axios from 'axios';
import type { Note, PostNote } from '../types/note';

const key = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

interface FetchNotesProps {
  notes: Note[];
  totalPages: number;
}

interface SearchNotesProps {
  search?: string;
  page: number;
  perPage: number;
  tag?: string;
}

export async function fetchNotes({
  search,
  page,
  perPage,
  tag
}: SearchNotesProps): Promise<FetchNotesProps> {
  const response = await axios.get<FetchNotesProps>(
    `https://notehub-public.goit.study/api/notes`,
    {
      params: {
        search,
        page,
        perPage,
        tag
      },
      headers: {
        Authorization: `Bearer ${key}`
      }
    }
  );
  return response.data;
}

export async function postNote(object: PostNote): Promise<Note> {
  const response = await axios.post<Note>(
    `https://notehub-public.goit.study/api/notes`,
    object,
    {
      headers: {
        Authorization: `Bearer ${key}`
      }
    }
  );
  return response.data;
}

export async function deleteNote(id: string): Promise<Note> {
  const response = await axios.delete<Note>(
    `https://notehub-public.goit.study/api/notes/${id}`,
    {
      headers: {
        Authorization: `Bearer ${key}`
      }
    }
  );

  return response.data;
}

export async function fetchNoteById(id: string): Promise<Note> {
  const response = await axios.get<Note>(
    `https://notehub-public.goit.study/api/notes/${id}`,
    {
      headers: {
        Authorization: `Bearer ${key}`
      }
    }
  );
  return response.data;
}
