import type { FilterState, Project, SortField, SortOrder } from '../types/project'

export function filterBySearch(projects: Project[], search: string): Project[] {
  const term = search.trim().toLowerCase()
  if (!term) return projects

  return projects.filter((project) => {
    const inTitle = project.title.toLowerCase().includes(term)
    const inDescription = project.description.toLowerCase().includes(term)
    const inTech = project.tech.some((t) => t.toLowerCase().includes(term))
    return inTitle || inDescription || inTech
  })
}

export function filterByCategory(projects: Project[], category: FilterState['category']): Project[] {
  if (category === 'all') return projects
  return projects.filter((project) => project.category === category)
}

export function sortProjects(projects: Project[], field: SortField, order: SortOrder): Project[] {
  const sorted = [...projects].sort((a, b) => {
    if (field === 'year') {
      return a.year - b.year
    }
    // field === 'title'
    return a.title.localeCompare(b.title, 'tr')
  })

  if (order === 'desc') {
    sorted.reverse()
  }

  return sorted
}

export function applyFilters(projects: Project[], filters: FilterState): Project[] {
  const { search, category, sortField, sortOrder } = filters

  let result = projects
  result = filterBySearch(result, search)
  result = filterByCategory(result, category)
  result = sortProjects(result, sortField, sortOrder)

  return result
}
