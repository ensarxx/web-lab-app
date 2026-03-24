import type { Project } from '../types/project'

const PROJECTS_URL = '/data/projects.json'

export async function fetchProjects(): Promise<Project[]> {
  try {
    const response = await fetch(PROJECTS_URL)

    if (!response.ok) {
      throw new Error(`Projeler yüklenemedi: ${response.status} ${response.statusText}`)
    }

    const data = (await response.json()) as Project[]
    return data
  } catch (error) {
    console.error('fetchProjects hata:', error)
    throw error instanceof Error
      ? error
      : new Error('Projeler yüklenirken beklenmeyen bir hata oluştu.')
  }
}
